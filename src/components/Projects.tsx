'use client';
import { motion } from 'framer-motion';
import { sectionMotion } from '@/hooks/useSectionMotion';

const projects = [
  {
    title: 'Paanika',
    description: 'A Freelance E-commerce website I made for a client using React.',
    link: 'http://www.paanika.com/#/',
  },
  {
    title: 'PdfGo',
    description: 'A Simple SaaS that helps store, share and leave comments on any PDF.',
    link: 'https://pdfgo.vercel.app/',
  },
  {
    title: 'Amazon Clone',
    description:
      'A simple Amazon clone with auth and cart features I built during my college days to learn React.',
    link: 'https://a-clone-486cd.web.app/',
  },
  {
    title: 'WhatsApp Clone',
    description:
      'A WhatsApp clone with auth and live messaging, built to explore real-time apps and dynamic databases.',
    link: 'https://whatsappf-7753e.web.app/',
  },
  {
    title: 'Throttling Example',
    description:
      'A demo project to visualize how throttling affects performance-heavy functions.',
    link: 'https://throttling-react.vercel.app',
  },
  {
    title: 'Debouncing Example',
    description:
      'A demo showing how debouncing improves search bar performance and UX.',
    link: 'https://debouncinginreact.vercel.app/',
  },
];

export default function Projects() {
  return (
    <section className="h-full flex flex-col items-center justify-center px-6 text-center space-y-12">
      <motion.h2
        className="text-4xl font-bold text-blue-400 max-w-3xl text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        {...sectionMotion}
      >
        My Projects
      </motion.h2>
      
      <div className="grid grid-cols-2 md:grid-cols-2 gap-10 max-w-5xl w-full">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="bg-[#111827] p-2 rounded-2xl border border-blue-500/30 shadow-md hover:shadow-blue-500/40 transition hover:scale-[1.02] flex flex-col justify-between gap-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col p-2">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="text-sm text-gray-400 mt-2">{project.description}</p>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2.5 rounded-md bg-[#23D4FF] text-black font-semibold text-sm hover:bg-[#43dcff] transition"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
