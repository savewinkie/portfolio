'use client';

import { useState, useEffect } from 'react';

export default function Typewriter({ lines, speed = 45 }) {
  const [displayed, setDisplayed] = useState([]);
  const [lineIdx, setLineIdx]     = useState(0);
  const [charIdx, setCharIdx]     = useState(0);
  const [done, setDone]           = useState(false);

  useEffect(() => {
    if (done) return;

    if (lineIdx >= lines.length) {
      setDone(true);
      return;
    }

    const currentLine = lines[lineIdx];

    // Empty line — just push it immediately
    if (currentLine.text === '') {
      const timer = setTimeout(() => {
        setDisplayed(prev => [...prev, currentLine]);
        setLineIdx(prev => prev + 1);
        setCharIdx(0);
      }, 120);
      return () => clearTimeout(timer);
    }

    if (charIdx < currentLine.text.length) {
      const timer = setTimeout(() => {
        setCharIdx(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    }

    // Line complete
    const timer = setTimeout(() => {
      setDisplayed(prev => [...prev, { ...currentLine, text: currentLine.text }]);
      setLineIdx(prev => prev + 1);
      setCharIdx(0);
    }, 80);
    return () => clearTimeout(timer);
  }, [lineIdx, charIdx, lines, speed, done]);

  const currentPartial =
    lineIdx < lines.length && lines[lineIdx].text !== ''
      ? { ...lines[lineIdx], text: lines[lineIdx].text.slice(0, charIdx) }
      : null;

  const renderText = (line) => {
    if (line.type === 'name') {
      return (
        <span className="t-name">
          {line.text.split('Link').map((part, i, arr) =>
            i < arr.length - 1
              ? [part, <span key={i} className="highlight">Link</span>]
              : part
          )}
        </span>
      );
    }
    if (line.type === 'prompt')  return <><span className="t-prompt">❯ </span><span className="t-cmd">{line.text}</span></>;
    if (line.type === 'prompt2') return <><span className="t-prompt2">// </span><span className="t-comment">{line.text}</span></>;
    if (line.type === 'key')     return <><span className="t-key">{line.key}</span><span className="t-fg">: </span><span className="t-val">&quot;{line.text}&quot;</span></>;
    if (line.type === 'tag')     return <span className="t-tag">{line.text}</span>;
    if (line.type === 'comment') return <span className="t-comment">{line.text}</span>;
    if (line.type === 'blank')   return <>&nbsp;</>;
    return <span className="t-cmd">{line.text}</span>;
  };

  return (
    <div className="terminal-body">
      {displayed.map((line, i) => (
        <div key={i} className="t-line">
          {renderText(line)}
        </div>
      ))}

      {currentPartial && (
        <div className="t-line">
          {renderText(currentPartial)}
          <span className="t-cursor" />
        </div>
      )}

      {done && <span className="t-cursor" style={{ display: 'inline-block' }} />}
    </div>
  );
}