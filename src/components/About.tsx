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
        <br />
        <p className="text-lg text-gray-300 leading-relaxed">
          I’m a Full Stack Web Developer with 3 years of experience building fast, scalable, and user-friendly web applications. I specialize in the MERN stack — React, Node.js, Express, and PostgreSQL.
          <br />
          <br />
          I’ve worked with both startups and established firms, helping them launch high-performance products from scratch, optimize existing codebases, and deliver seamless user experiences under tight deadlines. My passion lies in turning product ideas into fully functional apps that are clean, reliable, and built to scale.
          <br />
          <br />
          Currently, I’m looking for exciting opportunities where I can contribute to ambitious teams, solve real-world problems, and build meaningful products. Whether it’s a new MVP, a growing SaaS, or a feature-heavy platform — I’m ready to launch.
          <br />
          <br />
          Let’s build something impactful together 🚀
        </p>
      </motion.div>
    </section>
  );
}
