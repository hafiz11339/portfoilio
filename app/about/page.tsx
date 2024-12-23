'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skills = [
  'Python', 'Django', 'Django REST Framework', 'FastAPI', 'Generative AI', 'Langchain', 'React', 'Next.js','Redux','Tailwind CSS',
  'PostgreSQL', 'AWS', 'Docker', 'Git'
];

export default function About() {
  return (
    <main className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_1280.jpg')",
          filter: 'blur(50px)',
        }}
      ></div>

      {/* Content Section */}
      <section className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>

            {/* Cards Section */}
            <div className="flex justify-center items-center min-h-[50vh]">
              {/* Centered Background Card */}
              <Card className="p-10 sm:p-20">
                <h2 className="text-2xl font-semibold mb-4">Background</h2>
                <p className="text-muted-foreground">
                  Hi Stranger! I’m <strong>Syed Umair Zafar</strong>, a passionate and versatile <strong>Full Stack Developer</strong> with <strong>4 years of industry experience</strong>. My expertise spans across modern technologies like <strong>Django</strong>, <strong>Django Rest Framework</strong>, <strong>FastAPI</strong>, <strong>React</strong>, <strong>Next.js</strong>, and the exciting world of <strong>Generative AI</strong>.
                  <br /><br />
                  I graduated from <strong>PUCIT</strong> (2016–2020) with a degree in <strong>Computer Science</strong>. My journey began in <strong>web scraping</strong>, where I successfully automated data extraction from over <strong>100+ websites</strong>, laying a solid foundation in backend technologies and automation.
                  <br /><br />
                  My discovery of <strong>Django</strong> was a pivotal moment—it fascinated me with its simplicity and robust capabilities. This sparked my passion for backend development, where I’ve since delivered scalable and efficient solutions using <strong>Django Rest Framework</strong> and <strong>FastAPI</strong>.
                  <br /><br />
                  Recognizing the need to bridge the gap between frontend and backend, I took the initiative to master <strong>React</strong>. Today, I can confidently build seamless, end-to-end web applications, handling both frontend and backend development with proficiency.
                  <br /><br />
                  Over the past year, I’ve immersed myself in the evolving field of <strong>AI</strong>, exploring frameworks like <strong>LangChain</strong> and <strong>LangGraph</strong> to craft intelligent, cutting-edge applications.
                  <br /><br />
                  My journey reflects an insatiable drive to learn, grow, and innovate. I’m always excited to collaborate, explore new challenges, and create impactful solutions. Feel free to connect with me at <a href="mailto:syedumairzafar@gmail.com" className="text-primary underline">syedumairzafar@gmail.com</a>.
                </p>
              </Card>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-12"
          >
            <h2 className="text-2xl font-semibold mb-6 text-center">Skills</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm m-3 p-auto">
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
