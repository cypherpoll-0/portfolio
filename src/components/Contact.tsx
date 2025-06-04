'use client';
import { motion } from 'framer-motion';
import { sectionMotion } from '@/hooks/useSectionMotion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-8 py-20 text-center space-y-16">
      <motion.h2
        className="text-5xl font-extrabold text-pink-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        {...sectionMotion}
      >
        Get In Touch
      </motion.h2>
      
      <motion.div
        className="space-y-6 text-xl text-gray-300"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p>
          Feel free to reach out via email or any socials for opportunities, collaborations, or just to say hi!
        </p>
        
        <p>
          <span className="text-gray-400">Email:</span>{' '}
          <a
            href="mailto:ayushkedia1990@gmail.com"
            className="text-pink-400 hover:underline"
          >
            ayushkedia1990@gmail.com
          </a>
        </p>
      </motion.div>
      
      
      <motion.div
        className="flex gap-10 justify-center text-pink-400 text-3xl mt-8"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <a
          href="https://github.com/cypherpoll-0"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition duration-200"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/cypherpoll0"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition duration-200"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://x.com/ayushkedia1990?t=QpnHgL2ZeU8tccvjekKctQ&s=09"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition duration-200"
        >
          <FaTwitter />
        </a>
      </motion.div>
    </section>
  );
}
