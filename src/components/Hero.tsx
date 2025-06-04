'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 md:px-12 space-y-12">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="rounded-full overflow-hidden border-4 border-[#23D4FF] w-48 h-48 md:w-60 md:h-60 shadow-lg"
      >
        <Image
          src="/profile.png"
          alt="Profile"
          width={240}
          height={240}
          className="object-cover w-full h-full"
          priority
        />
      </motion.div>
      
      
      <motion.h1
        className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Full Stack&nbsp;
        <span className="text-[#23D4FF]">Web Developer</span>
        &nbsp;helping products launch faster. 🚀
      </motion.h1>
  
      <motion.p
        className="max-w-2xl text-lg md:text-xl text-[#9FA2B6] leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        I design and build high-performance web apps using React, Node.js, and PostgreSQL — optimized for speed, scale, and seamless user experience.
      </motion.p>
      
      <motion.a
        href="#projects"
        className="inline-flex items-center justify-center px-8 py-4 text-xl md:text-2xl font-semibold bg-[#23D4FF] text-black rounded-xl hover:bg-[#43dcff] transition duration-300 shadow-lg"
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div>
          View Projects
        </div>
      </motion.a>
    </section>
  );
}
