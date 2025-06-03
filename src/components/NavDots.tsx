'use client';
import { useEffect, useState } from 'react';

// const sections = ['hero','about','experience','projects','contact'];
const sections = ["hero", "about", "skills", "experience", "projects", "contact"];


export default function NavDots() {
  const [active, setActive] = useState('hero');

  useEffect(()=>{
    const obs=new IntersectionObserver(entries=>{
      entries.forEach(e=>{ if(e.isIntersecting) setActive(e.target.id); });
    },{threshold:0.6});
    sections.forEach(id=>{
      const el=document.getElementById(id); if(el) obs.observe(el);
    });
    return ()=>obs.disconnect();
  },[]);

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-30">
      {sections.map(id=>(
        <a key={id} href={`#${id}`} className="group">
          <span className={`block h-3 w-3 rounded-full transition
            ${active===id?'bg-[#23D4FF] scale-125':'bg-[#3A3D54]'}`}/>
        </a>
      ))}
    </nav>
  );
}
