'use client';
import { motion } from 'framer-motion';

export function SectionWrapper({
  id,
  children,
}: { id:string; children:React.ReactNode }) {
  return (
    <motion.section
      id={id}
      className="scroll-section h-screen flex items-center justify-center px-8"
      initial={{ opacity:0, y:40 }}
      whileInView={{ opacity:1, y:0 }}
      transition={{ duration:0.6, ease:'easeOut' }}
      viewport={{ once:true, amount:0.4 }}
    >
      <div className="max-w-6xl w-full">{children}</div>
    </motion.section>
  );
}
