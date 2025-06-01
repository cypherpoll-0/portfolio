'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

interface PlanetProps {
  src: string;
  size: number;
  top: string;
  left: string;
  depth?: number;
}

export default function Planet({ src, size, top, left, depth = 0.5 }: PlanetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -depth * 300]);

  return (
    <motion.div
      ref={ref}
      style={{
        position: 'fixed',
        top,
        left,
        width: size,
        height: size,
        zIndex: 10,
        pointerEvents: 'none',
        y,
        mixBlendMode: 'screen',
      }}
    >
      <Image
        src={src}
        alt="Planet"
        width={size}
        height={size}
        draggable={false}
        priority
      />
    </motion.div>
  );
}
