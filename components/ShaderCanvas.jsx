'use client';

import { useEffect, useRef } from 'react';

const SCALE = 4; // shader pixel size — larger = far fewer pixels to compute = faster
const BAYER = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5]; // flat 4x4
const TARGET_FPS = 30; // dithered look doesn't need 60; halves CPU
const FRAME_MS = 1000 / TARGET_FPS;

function isLightTheme() {
  return document.documentElement.getAttribute('data-theme') === 'light';
}

// build a 0..255 RGB ramp for the current theme/hue, so per-pixel work is just a lookup
function buildRamp(hue) {
  const light = isLightTheme();
  let c1, c2;
  if (hue) {
    if (light) { c1 = hue.coreLight || hue.core; c2 = hue.edgeLight || hue.edge; }
    else { c1 = hue.edge; c2 = hue.core; }
  } else if (light) { c1 = [80, 150, 255]; c2 = [20, 70, 220]; }
  else { c1 = [200, 200, 200]; c2 = [255, 255, 255]; }

  const ramp = new Uint32Array(33); // 32 steps + 1
  for (let i = 0; i <= 32; i++) {
    const t = i / 32;
    const R = Math.round(c1[0] + (c2[0] - c1[0]) * t);
    const G = Math.round(c1[1] + (c2[1] - c1[1]) * t);
    const B = Math.round(c1[2] + (c2[2] - c1[2]) * t);
    ramp[i] = (255 << 24) | (B << 16) | (G << 8) | R;
  }
  return ramp;
}

export default function ShaderCanvas({ variant = 0, hue = null, glow = true }) {
  const canvasRef = useRef(null);
  const glowRef = useRef(null);
  // live values the animation loop reads — updating these does NOT restart the loop
  const variantRef = useRef(variant);
  const hueRef = useRef(hue);

  useEffect(() => { variantRef.current = variant; }, [variant]);
  useEffect(() => { hueRef.current = hue; }, [hue]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;

    const glowCanvas = glowRef.current;
    const gctx = glowCanvas ? glowCanvas.getContext('2d') : null;

    let bw = 0, bh = 0, img = null, buf = null;
    let xn = null, yn = null; // precomputed normalized coords
    let rafId = 0;
    let t = Math.random() * 100;
    let lastFrame = 0;

    // cached ramp + the hue it was built for, so we only rebuild on change
    let ramp = buildRamp(hueRef.current);
    let rampHue = hueRef.current;
    let rampLight = isLightTheme();

    function resize() {
      const r = canvas.parentElement.getBoundingClientRect();
      const w = Math.max(1, Math.ceil(r.width));
      const h = Math.max(1, Math.ceil(r.height));
      if (w === canvas.width && h === canvas.height) return; // no change
      canvas.width = w;
      canvas.height = h;
      bw = Math.max(1, Math.ceil(w / SCALE));
      bh = Math.max(1, Math.ceil(h / SCALE));
      img = ctx.createImageData(bw, bh);
      buf = new Uint32Array(img.data.buffer);
      xn = new Float32Array(bw);
      yn = new Float32Array(bh);
      for (let x = 0; x < bw; x++) xn[x] = x / bw;
      for (let y = 0; y < bh; y++) yn[y] = y / bh;
      if (glowCanvas) { glowCanvas.width = w; glowCanvas.height = h; }
    }
    resize();
    window.addEventListener('resize', resize);
    // re-fit whenever the panel itself changes size (after 3D transitions settle)
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement);

    // mouse tracking (passive listener = no scroll jank)
    let mouseX = 0.5, mouseY = 0.5, smoothX = 0.5, smoothY = 0.5;
    const parent = canvas.parentElement;
    function onMove(e) {
      const r = parent.getBoundingClientRect();
      mouseX = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width));
      mouseY = Math.max(0, Math.min(1, (e.clientY - r.top) / r.height));
    }
    function onLeave() { mouseX = 0.5; mouseY = 0.5; }
    parent.addEventListener('mousemove', onMove, { passive: true });
    parent.addEventListener('mouseleave', onLeave, { passive: true });

    function draw(now) {
      rafId = requestAnimationFrame(draw);
      if (now - lastFrame < FRAME_MS) return; // throttle to TARGET_FPS
      lastFrame = now;

      const hueNow = hueRef.current;
      const lightNow = isLightTheme();
      // rebuild ramp only when theme or project changed
      if (hueNow !== rampHue || lightNow !== rampLight) {
        ramp = buildRamp(hueNow);
        rampHue = hueNow;
        rampLight = lightNow;
      }
      const backVal = lightNow ? 242 : 0;
      const backPix = (255 << 24) | (backVal << 16) | (backVal << 8) | backVal;

      const variantNow = variantRef.current;
      const seed = variantNow * 1.7;
      const freqA = 7.0 + variantNow * 1.5;
      const freqB = 6.5 + variantNow * 1.2;

      smoothX += (mouseX - smoothX) * 0.06;
      smoothY += (mouseY - smoothY) * 0.06;
      const pullX = (smoothX - 0.5) * 0.12;
      const pullY = (smoothY - 0.5) * 0.12;

      const breath = 0.70 + Math.sin(t * 0.10 + seed) * 0.04;
      const cxc = 0.5 + Math.sin(t * 0.05 + seed) * 0.04 + pullX;
      const cyc = 0.5 + Math.cos(t * 0.045 + seed) * 0.03 + pullY;

      // glow layer
      if (gctx) {
        const gw = glowCanvas.width, gh = glowCanvas.height;
        gctx.clearRect(0, 0, gw, gh);
        const gx = cxc * gw, gy = (cyc - 0.05) * gh;
        const rad = gw * (0.55 + (breath - 0.70));
        const grad = gctx.createRadialGradient(gx, gy, 0, gx, gy, rad);
        const core = hueNow ? (lightNow ? (hueNow.coreLight || hueNow.core) : hueNow.core)
                            : (lightNow ? [40, 110, 245] : [255, 255, 255]);
        const a = lightNow ? 0.16 : 0.22;
        grad.addColorStop(0, `rgba(${core[0]},${core[1]},${core[2]},${a})`);
        grad.addColorStop(0.5, `rgba(${core[0]},${core[1]},${core[2]},${a * 0.4})`);
        grad.addColorStop(1, 'rgba(0,0,0,0)');
        gctx.fillStyle = grad;
        gctx.fillRect(0, 0, gw, gh);
      }

      // precompute a few time-dependent constants out of the inner loop
      const tA = t * 0.08 + seed, tB = t * 0.07 - seed;
      const tC = t * 0.04 + seed, tD = t * 0.03;
      const lob1c = Math.sin(t * 0.05 + seed) * 0.05;
      const lob2c = Math.cos(t * 0.045 + seed) * 0.05;
      const ripT = t * 0.14;
      const t06 = t * 0.06, t05b = t * 0.05;

      for (let y = 0; y < bh; y++) {
        const ny = yn[y];
        const cyv = ny - cyc;
        const rowBayer = (y & 3) * 4;
        const rowOff = y * bw;
        for (let x = 0; x < bw; x++) {
          const nx = xn[x];
          const cxv = nx - cxc;
          const d = Math.sqrt(cxv * cxv + cyv * cyv);

          let v = breath - d * 1.05;
          v += Math.sin(nx * freqA + Math.cos(ny * 4.0 + tA) * 1.2 + t06) * 0.26;
          v += Math.cos(ny * freqB + Math.sin(nx * 4.5 + tB) * 1.2 - t05b) * 0.24;
          v += Math.sin((nx * 9.0 - ny * 8.0) + tC) * 0.16;
          v += Math.cos((nx * 11.0 + ny * 10.0) - tD) * 0.12;
          const l1x = (nx - 0.45) - lob1c, l1y = ny - 0.4;
          const l2x = nx - 0.6, l2y = (ny - 0.62) - lob2c;
          v += 0.22 - Math.sqrt(l1x * l1x + l1y * l1y) * 1.3;
          v += 0.18 - Math.sqrt(l2x * l2x + l2y * l2y) * 1.4;
          v += Math.sin(d * 16.0 - ripT) * 0.07;

          const norm = v < -1 ? 0 : v > 1 ? 1 : (v + 1) * 0.5;
          const th = (BAYER[rowBayer + (x & 3)] + 0.5) / 16;
          if (norm > th) {
            let inten = (norm - th) * 1.8;
            if (inten > 1) inten = 1;
            buf[rowOff + x] = ramp[(inten * 32) | 0];
          } else {
            buf[rowOff + x] = backPix;
          }
        }
      }

      ctx.putImageData(img, 0, 0);
      ctx.drawImage(canvas, 0, 0, bw, bh, 0, 0, canvas.width, canvas.height);
      t += 0.10 * (60 / TARGET_FPS); // keep motion speed consistent despite lower fps
    }
    rafId = requestAnimationFrame(draw);

    // pause when tab not visible
    function onVis() {
      if (document.hidden) { cancelAnimationFrame(rafId); }
      else { lastFrame = 0; rafId = requestAnimationFrame(draw); }
    }
    document.addEventListener('visibilitychange', onVis);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      ro.disconnect();
      parent.removeEventListener('mousemove', onMove);
      parent.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('visibilitychange', onVis);
    };
  }, [glow]); // only depends on glow — variant/hue handled via refs, no remount

  return (
    <>
      {glow && <canvas ref={glowRef} className="shader-glow" />}
      <canvas ref={canvasRef} className="shader-canvas" />
    </>
  );
}