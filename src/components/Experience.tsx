'use client';
import { motion } from 'framer-motion';

const companies = [
  {
    name: 'Share India Securities',
    years: 'August 2024 – Present',
    role: 'Executive',
    description: 'Developed responsive, consistent UI components using React.js and Tailwind CSS, enhancing user experience across the application. Optimized state management and data flow to improve performance and eliminate rendering issues. Led testing efforts with unit tests, SonarQube analysis, and close QA collaboration to reduce post-release bugs and ensure code reliability.',
  },
  {
    name: 'Affinity Technosys',
    years: 'January 2023 – July 24',
    role: 'Software Development Engineer',
    description: 'Built fault-tolerant RESTful APIs for blog and video streaming features using Node.js, TypeScript, and Prisma ORM, ensuring backend scalability and performance. Developed high-performance, server-rendered web features with Next.js, TypeScript, and Redux, improving state management and load times. Also authored technical documentation on data replication and caching strategies to support maintainability and team onboarding.',
  },
  {
    name: 'PwC',
    years: 'September 2021 – October 22',
    role: 'Associate',
    description: 'Developed reusable, high-performance React.js components to enhance user experience, increasing average time on page by 14%. Maintained and optimized RESTful APIs using Node.js and Express.js, ensuring seamless frontend integration and backend scalability. Followed Agile practices using JIRA for project tracking and Git for version control, enabling efficient team collaboration and streamlined development workflows.',
  },
];

export default function Experience() {
  return (
    <div className="flex flex-col items-center text-center space-y-8">
      <h2 className="text-3xl font-semibold">Professional Experience</h2>
      <br />
      <br />
      <div className="flex flex-col gap-7 w-full max-w-3xl">
        {companies.map((c) => (
          <motion.div
            key={c.name}
            whileHover={{ y: -4 }}
            className="bg-[#0C0C1A] border border-white/10 rounded-lg px-6 py-5 space-y-2 text-center"
          >
            <div className="text-xl font-semibold text-white">{c.name}</div>
            <div className="text-sm text-[#9FA2B6]">{c.role} • {c.years}</div>
            <p className="text-sm text-[#c7c9d9] leading-relaxed">{c.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
