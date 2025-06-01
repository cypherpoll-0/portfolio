'use client';
import { motion } from 'framer-motion';
import { sectionMotion } from '@/hooks/useSectionMotion';

export default function About() {
  return (
    <section className="h-full flex items-center justify-center px-6 text-center">
      <motion.div
        className="prose prose-invert max-w-3xl text-center"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        {...sectionMotion}
      >
        <h2 className="text-4xl font-bold text-purple-400 mb-4">About Me</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          I’m a frontend developer who turns cosmic ideas into real web experiences. With a passion
          for clean design, fast performance, and futuristic interfaces, I build things that feel
          like they came from another galaxy.
        </p>
      </motion.div>
    </section>
  );
}
