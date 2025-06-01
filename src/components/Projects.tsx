'use client';
import { motion } from 'framer-motion';
import { sectionMotion } from '@/hooks/useSectionMotion';

const projects = [
  {
    title: 'Nebula Notes',
    description: 'A Markdown note app styled like a starfield, built with Next.js + Tailwind.',
  },
  {
    title: 'Starview Gallery',
    description: 'A 3D planet gallery with Three.js and scroll interactions.',
  },
];

export default function Projects() {
  return (
    <section className="h-full flex flex-col items-center justify-center px-6 text-center space-y-8">
      <motion.h2
        className="text-4xl font-bold text-blue-400 prose prose-invert max-w-3xl text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        {...sectionMotion}
      >
        My Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="bg-[#111827] p-6 rounded-2xl border border-blue-500/30 shadow-md hover:shadow-blue-500/40 transition hover:scale-[1.02]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="text-sm text-gray-400 mt-2">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
