'use client';
import { useState, useEffect } from 'react';

const sections = ['hero', 'about', 'projects', 'contact'];

export default function NavDots() {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
            break;
          }
        }
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 space-y-4">
      {sections.map((sec) => (
        <a
          key={sec}
          href={`#${sec}`}
          className={`block w-3 h-3 rounded-full transition-all duration-300 ${
            active === sec ? 'bg-indigo-400 scale-125' : 'bg-gray-600'
          }`}
        ></a>
      ))}
    </div>
  );
}
