'use client';
import { motion } from 'framer-motion';
import { sectionMotion } from '@/hooks/useSectionMotion';

export default function Contact() {
  return (
    <section className="h-full flex flex-col items-center justify-center px-6 text-center space-y-6">
      <motion.h2
        className="text-4xl font-bold text-pink-400 prose prose-invert max-w-3xl text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        {...sectionMotion}
      >
        Contact Me
      </motion.h2>

      <motion.form
        className="flex flex-col space-y-4 w-full max-w-md"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 bg-black border border-pink-500/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <input
          type="email"
          placeholder="you@galaxy.dev"
          className="p-3 bg-black border border-pink-500/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <textarea
          placeholder="Your Message"
          className="p-3 bg-black border border-pink-500/30 rounded-md text-white h-32 resize-none focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <motion.button
          type="submit"
          className="bg-gradient-to-r from-pink-500 to-purple-600 py-3 rounded-md font-bold text-white hover:scale-105 transition"
          whileTap={{ scale: 0.95 }}
        >
          Send Signal 📡
        </motion.button>
      </motion.form>
    </section>
  );
}
