import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Workflow from '@/components/Workflow';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import Loader from '@/components/Loader';
import Particles from '@/components/Particles';
import MobileNav from '@/components/MobileNav';

export default function Home() {
  return (
    <>
      <Loader />
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
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}