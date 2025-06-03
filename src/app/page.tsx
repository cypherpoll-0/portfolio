import { SectionWrapper } from '@/components/SectionWrapper';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills'; // <- added
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import SpaceBackground from '@/components/SpaceBackground';
import NavDots from '@/components/NavDots';

export default function Home() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <SpaceBackground />
      <NavDots />

      <main className="relative z-20 h-screen w-screen overflow-y-scroll snap-y snap-mandatory">
        <SectionWrapper id="hero"><Hero /></SectionWrapper>
        <SectionWrapper id="about"><About /></SectionWrapper>
        <SectionWrapper id="skills"><Skills /></SectionWrapper> {/* <- inserted here */}
        <SectionWrapper id="experience"><Experience /></SectionWrapper>
        <SectionWrapper id="projects"><Projects /></SectionWrapper>
        <SectionWrapper id="contact"><Contact /></SectionWrapper>
      </main>
    </div>
  );
}
