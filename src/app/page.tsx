import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import SpaceBackground from '@/components/SpaceBackground';
import NavDots from '@/components/NavDots';
import Planet from '@/components/Planet';

export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth text-white bg-black selection:bg-indigo-500/20">
      {/* Star Field Background */}
      <SpaceBackground />

      {/* Floating Planets */}
      <Planet src="/planet1.png" size={160} top="12%" left="8%" depth={0.25} />
      <Planet src="/planet2.png" size={100} top="70%" left="80%" depth={0.6} />
      <Planet src="/comet.png" size={120} top="45%" left="-60px" depth={0.35} />

      {/* Navigation Dots */}
      <NavDots />

      {/* Sections */}
      <div className="relative z-10">
        <section id="hero" className="snap-start h-screen flex items-center justify-center px-4">
          <Hero />
        </section>
        <section id="about" className="snap-start h-screen flex items-center justify-center px-4">
          <About />
        </section>
        <section id="projects" className="snap-start h-screen flex items-center justify-center px-4">
          <Projects />
        </section>
        <section id="contact" className="snap-start h-screen flex items-center justify-center px-4">
          <Contact />
        </section>
      </div>
    </main>
  );
}
