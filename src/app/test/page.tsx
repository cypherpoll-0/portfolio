'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect } from 'react';

/** Re-usable drifting planet */
function SoftPlanet({
  src,
  size,
  top,
  left,
  depth = 0.2,
}: {
  src: string;
  size: number;
  top: string;
  left: string;
  depth?: number;
}) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 2000], [0, -depth * 80]);

  // Optional: Debug scroll value
  useEffect(() => {
    const unsubscribe = scrollY.onChange((v) => {
      // console.log(`${src} scrollY:`, v);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.div
      style={{
        position: 'fixed',
        top,
        left,
        width: size,
        height: size,
        y,
        zIndex: 10,
        pointerEvents: 'none',
        filter: 'blur(2px)',
        opacity: 0.15,
        mixBlendMode: 'screen',
      }}
    >
      <Image
        src={src}
        alt=""
        width={size}
        height={size}
        draggable={false}
        priority
      />
    </motion.div>
  );
}

/** HUD overlay with futuristic lines + rings */
function HudOverlay() {
  return (
    <svg
      className="fixed inset-0 pointer-events-none z-20"
      width="100%"
      height="100%"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="none"
      style={{ opacity: 0.12 }}
    >
      <defs>
        <linearGradient id="hud" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#00e0ff" />
          <stop offset="100%" stopColor="#6a5cff" />
        </linearGradient>
      </defs>

      {/* horizontal HUD lines */}
      <line x1="0" y1="120" x2="1920" y2="120" stroke="url(#hud)" strokeWidth="1" />
      <line x1="0" y1="960" x2="1920" y2="960" stroke="url(#hud)" strokeWidth="1" />

      {/* concentric circles */}
      <circle cx="960" cy="540" r="320" fill="none" stroke="url(#hud)" strokeWidth="0.8" />
      <circle cx="960" cy="540" r="500" fill="none" stroke="url(#hud)" strokeWidth="0.6" />
    </svg>
  );
}

export default function SpaceDecor() {
  return (
    <>
      {/* Floating planets */}
      <SoftPlanet src="/planet-blue.png"  size={420} top="10%" left="-12%" depth={0.15} />
      <SoftPlanet src="/planet-green.png" size={260} top="68%" left="72%" depth={0.35} />
      <SoftPlanet src="/moon.png"         size={180} top="38%" left="82%" depth={0.25} />

      {/* Neon HUD */}
      <HudOverlay />
    </>
  );
}
