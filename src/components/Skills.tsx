'use client';
import { motion } from 'framer-motion';

const skills = [
    {
        category: 'Languages',
        items: ['JavaScript', 'TypeScript', 'SQL', 'Java'],
    },
    {
        category: 'Frontend',
        items: [
            'React.js',
            'Next.js',
            'TailwindCSS',
            'HTML',
            'CSS',
            'Redux',
            'React Testing Library',
        ],
    },
    {
        category: 'Backend',
        items: ['Node.js', 'Express.js', 'Prisma', 'Zod', 'Jest'],
    },
    {
        category: 'Cloud & DevOps',
        items: ['Docker', 'Git', 'CI/CD', 'AWS'],
    },
    {
        category: 'Messaging / DB / Caching',
        items: ['PostgreSQL', 'Kafka', 'Redis'],
    },
    {
        category: 'Other',
        items: [
            'Low-Level Design',
            'High-Level Design',
            'GraphQL',
            'REST API',
            'WebSockets',
            'Unit Testing',
        ],
    },
];

export default function Skills() {
    return (
        <section className="w-full max-w-6xl mx-auto text-center space-y-6 px-6 py-2">
            <motion.h2
                className="text-4xl font-bold"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Skills & Technologies
            </motion.h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                {skills.map((section) => (
                    <motion.div
                        key={section.category}
                        className="bg-[#0C0C1A] border border-white/10 rounded-xl p-2 text-left space-y-2"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <h3 className="text-xl font-semibold text-[#23D4FF]">
                            {section.category}
                        </h3>
                        <ul className="list-disc list-inside text-[#c3c7e5] space-y-0.5">
                            {section.items.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
