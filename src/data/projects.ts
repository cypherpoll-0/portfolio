export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  demoUrl?: string;
  repoUrl?: string;
  imageUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Space Portfolio',
    description: 'My personal portfolio website built with Next.js 14 and TailwindCSS.',
    techStack: ['Next.js', 'TypeScript', 'TailwindCSS'],
    demoUrl: 'https://yourdomain.com',
    repoUrl: 'https://github.com/yourusername/space-portfolio',
    imageUrl: '/projects/space-portfolio.png',
  },
  {
    id: 2,
    title: 'Weather App',
    description: 'A simple weather forecasting app using OpenWeather API.',
    techStack: ['React', 'API', 'CSS'],
    demoUrl: 'https://weatherapp.example.com',
    repoUrl: 'https://github.com/yourusername/weather-app',
  },
  // Add more projects here
];
