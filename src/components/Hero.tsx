'use client';
import { motion } from 'framer-motion';
import { sectionMotion } from '@/hooks/useSectionMotion';

export default function Hero() {
  return (
    <section className="h-full flex flex-col items-center justify-center text-center px-4 space-y-6">
      <motion.img
        src='/profile.jpeg'
        alt="Profile"
        className="h-36 w-36 rounded-full border-4 border-indigo-500 shadow-xl animate-float prose prose-invert max-w-3xl text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        {...sectionMotion}
      />
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold tracking-wide bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Hi, I’m [Your Name]
      </motion.h1>
      <motion.p
        className="text-xl text-indigo-200 max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        Frontend Developer · Space Enthusiast · UI/UX Explorer ✨
      </motion.p>
    </section>
  );
}
