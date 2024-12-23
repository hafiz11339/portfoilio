'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 relative">
      {/* Background Image with Blur */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg')",
          filter: 'blur(10px)',
        }}
      ></div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-primary">Syed Umair Zafar</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
            Full Stack Developer
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12"
          >
            <Button asChild size="lg">
              <Link href="/projects">
                View My Work <ArrowRight className="ml-2" />
              </Link>
            </Button>
            {/* <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center space-x-6"
          >
            {/* <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
              </a>
            </Button> */}
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/hafiz-umair-1830941b5" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:syedumairzafar@gmail.com">
                <Mail className="h-6 w-6" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
