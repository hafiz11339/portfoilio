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
                <h2 className="text-2xl font-semibold mb-4">Contact me</h2>
                <p className="text-muted-foreground">
                <p className="text-xl"><strong>Email:</strong> syedumarzafar@gmail.com</p>
<                p className="text-xl"><strong>Phone:</strong> 03232455855</p>

                </p>

              </Card>
            </div>
          </motion.div>

          {/* Skills Section */}
         
        </div>
      </section>
    </main>
  );
}
