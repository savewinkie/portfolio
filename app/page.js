import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Workflow from '@/components/Workflow';
import Pricing from '@/components/Pricing';
import GithubStats from '@/components/GithubStats';
import Contact from '@/components/Contact';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import Loader from '@/components/Loader';
import Particles from '@/components/Particles';
import MobileNav from '@/components/MobileNav';
import ScrollToTop from '@/components/ScrollToTop';
import CursorEffect from '@/components/CursorEffect';
import SmoothScroll from '@/components/SmoothScroll';
import SpotlightEffect from '@/components/SpotlightEffect';

export default function Home() {
  return (
    <>
      <ScrollToTop />
      <Loader />
      <SmoothScroll />
      <SpotlightEffect />
      <CursorEffect />
      <Particles />
      <ScrollReveal />
      <Navbar />
      <MobileNav />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Workflow />
        <GithubStats />
        <Pricing />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}