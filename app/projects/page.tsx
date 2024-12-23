'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { ProjectModal } from '@/components/ProjectModal';

const projects = [
  {
    title: 'Legal Search AI System',
    description: 'Design a cutting-edge legal search AI system utilizing Django Rest Framework and LangChain. Integrate Pinecone as the vector database, and leverage React.js for a seamless front-end user experience',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['Django REST Framework', 'LangChain', 'Pinecone', 'React.js','S3','AWS','Stripe'],
    liveUrl: 'https://lawgptapp.xeventechnologies.com/',
    details: <ul className="list-disc pl-4 space-y-2">
      <li>Leading the backend team and handling PostgreSQL database management.</li>
      <li>Managed the creation of APIs using Django Rest Framework.</li>
      <li>Utilized Amazon S3 buckets to store user-uploaded files.</li>
      <li>Implemented user history tracking for relevant search results, optimizing user experience.</li>
      <li>Successfully integrated Stripe for the payment method.</li>
      <li>Used Pinecone to store vector data and retrieve information through semantic search.</li>
      <li>Implemented a system where the AI can generate legal drafts for users, upload its own drafts, and allow for editing.</li>
      <li>Developed a module that allows users to write their own wills based on their personal state.</li>
      <li>Created an API to upload JSON data from the database and save filled form data from the client into the database.</li>
      <li>For managing state in a React.js team project, we rely on Redux. It provides a centralized state management solution, making it easier to handle shared data across components efficiently.</li>
    </ul>
  },
  {
    title: ' HRM (Human Resource Management System)',
    description: 'HRM system to manage resource records, utilizing Django REST Framework (DRF) for the backend and SQL Server for the database. ',
    image: 'https://img.freepik.com/premium-vector/hrm-human-resource-management-concept-with-big-words-people-surrounded-by-related-icon-with-blue-color-style_25156-1387.jpg?w=1380',
    tags: ['Django REST Framework', 'Microsoft SQL Server','AWS','S3'],
    liveUrl: null,
    details: <ul className="list-disc pl-4 space-y-2">
      <li><strong>Backend Operations</strong>: Managed backend functionality using Django REST Framework (DRF).</li>
      <li><strong>Database:</strong> Utilized SQL Server for efficient data storage and retrieval.</li>
      <li>Utilized Amazon <strong>S3 buckets</strong> to store user-uploaded files.</li>
      <li><strong>Purpose:</strong> Designed as a comprehensive resource management tool for tracking employee records.</li>
      <li><strong>APIs:</strong> Developed APIs to facilitate seamless interaction for both HR and employees.</li>
      <li><strong>Cloud Deployment:</strong> Deployed the Docker image on Google Cloud Run for scalable and efficient deployment.</li>
    </ul>
  },
  {
    title: ' Event HUB',
    description: 'Developed an event planner system to manage Google Calendar events efficiently. Built with FastAPI, it allows users to create, update, and delete events seamlessly. This system simplifies event handling and ensures smooth calendar management.',
    image: 'https://cdn-cjhkj.nitrocdn.com/krXSsXVqwzhduXLVuGLToUwHLNnSxUxO/assets/images/optimized/rev-b135bb1/spotme.com/wp-content/uploads/2020/10/AdobeStock_333205002-scaled.jpeg',
    tags: ['FastAPI','Google Calendar','PostgreSQL','GIT','Docker','AWS'],
    liveUrl: null,
    details: <ul className="list-disc pl-4 space-y-2">
      <li><strong>Google Calendar Integration:</strong> Enables users to create and update their events and fetch all events based on their user ID.</li>
      <li><strong>Event Storage:</strong> Saves all event records in the database for easy retrieval and management.</li>
      <li><strong>Backend Framework:</strong> Built using FastAPI for fast and efficient development.</li>
      <li><strong>API Authentication:</strong> Utilize JWT tokens for secure API authentication.</li>
      <li><strong>Containerization:</strong> Utilizes Docker for creating a portable and consistent application environment.</li>
    </ul>
  },
  {
    title: ' AI-Powered Document Management System',
    description: 'A document management system using FastAPI and React.js that generates embeddings, stores data in Qdrant and SQL Server, and securely saves files in S3.',
    image: 'https://www.pairsoft.com/wp-content/uploads/2024/02/ai-document-management-pairsoft.jpg',
    tags: ['FastAPI','Qdrant','SQL Server','React.js','GIT','Docker','Amazon S3'],
    liveUrl: null,
    details:<ul className="list-disc pl-4 space-y-2">
    <li><strong>File Upload:</strong> Allows users to upload files through a user-friendly React.js interface.</li>
    <li><strong>Embedding Generation:</strong> Processes uploaded files and generates embeddings using NLP models, ensuring efficient vector representation.</li>
    <li><strong>Vector Storage:</strong> Stores generated embeddings in the Qdrant vector database for similarity search and retrieval.</li>
    <li><strong>Index Management:</strong> Saves the unique index name for each file in the SQL Server database for efficient tracking.</li>
    <li><strong>Question-Answer Management:</strong> Extracts and saves relevant question-answer pairs in the SQL Server database for future use.</li>
    <li><strong>File Storage:</strong> Securely saves uploaded files in the Amazon S3 bucket, with metadata stored in the database.</li>
    <li><strong>Backend Framework:</strong> Built with FastAPI for rapid and efficient development of APIs.</li>
    <li><strong>Frontend Framework:</strong> Developed using React.js for an intuitive and dynamic user experience.</li>
    <li><strong>API Authentication:</strong> Secured with JWT tokens to ensure user authentication and data safety.</li>
    <li><strong>Containerization:</strong> Utilizes Docker for consistent and portable application deployment.</li>
  </ul>
  
  },
  {
    title: 'Ticket Management System',
    description: 'A collaborative ticket management system for admins and developers with user history tracking, filtering, and ticket cloning.',
    image: 'https://media.istockphoto.com/id/1422796420/vector/ticket-illustration-ticket-concept.jpg?s=612x612&w=0&k=20&c=CMMjn2YO3MkLivt6QRp7LPD4SZfPEZds97loXnEaisk=',
    tags: ['Django','Microsoft SQL Server','CSS','GIT'],
    liveUrl: null,
    details:<ul className="list-disc pl-4 space-y-2">
    <li><strong>Admin Module:</strong> Allows admins to create users by country and assign them to specific clients. Admins can also create tickets and manage them efficiently.</li>
    <li><strong>Developer Module:</strong> Provides developers access to their assigned tickets along with the ability to update ticket status and history.</li>
    <li><strong>Ticket Filtering:</strong> Enables filtering of tickets based on users, countries, and clients for quick and organized access.</li>
    <li><strong>Ticket Cloning:</strong> Offers an option to clone existing tickets to streamline the creation of similar tasks or requests.</li>
    <li><strong>User History:</strong> Maintains a detailed history of user activities and ticket updates for tracking and auditing purposes.</li>
    <li><strong>Dashboard:</strong> Features an interactive dashboard for admins to monitor and manage tickets, users, and filters effectively.</li>
    <li><strong>Backend Framework:</strong> Developed using Django for both the backend and frontend.</li>
    <li><strong>Database Management:</strong> Stores user, ticket, and client data in SQL Server for robust and scalable storage.</li>
  </ul>
  
  },
  {
    title: 'ETL Pipeline with Python and SQL Server',
    description: 'A Python-based ETL pipeline that extracts raw data from SQL Server, processes it and stores the results in a database.',
    image: 'https://t3.ftcdn.net/jpg/04/75/02/72/360_F_475027206_RzBc0iiF5op2WY8kStxyqjxvKzXMzUXU.jpg',
    tags: ['Python','Microsoft SQL Server','GIT'],
    liveUrl: null,
    details:<ul className="list-disc pl-4 space-y-2">
    <li><strong>Data Extraction:</strong> Fetches raw data from the SQL Server database using Python and pyodbc for seamless database connectivity.</li>
    <li><strong>Data Transformation:</strong> Processes the extracted data using <a href="https://pandas.pydata.org/" target="_blank" rel="noopener noreferrer"><strong>Pandas</strong></a> and <a href="https://www.dask.org/" target="_blank" rel="noopener noreferrer"><strong>Dask</strong></a> for filtering, cleaning, aggregation, and other transformation logic to get the desired results.</li>
    <li><strong>Data Loading:</strong> Loads the transformed data into another SQL Server database, making it available for the Power BI team.</li>
    <li><strong>Automated ETL Scripts:</strong> Multiple Python scripts created for handling different datasets, ensuring modularity and maintainability.</li>
    <li><strong>Error Handling:</strong> Includes robust error handling to log and report issues during extraction, transformation, or loading phases.</li>
    <li><strong>Scheduling:</strong> Scripts are designed for integration with scheduling tools like cron or Task Scheduler to automate ETL tasks at regular intervals.</li>
    <li><strong>Database Management:</strong> Utilizes SQL Server for both raw data storage and the processed data repository, ensuring seamless integration between teams.</li>
  </ul>
  
  
  },
  {
    title: 'Property Price Scraper with Django REST Framework',
    description: 'A Django-based backend that scrapes property data from a real-estate site, calculates property radius, and evaluates if the price is good or expensive based on user queries.',
    image: 'https://miro.medium.com/v2/resize:fit:1200/0*NCO1DF14J42HEQWR.jpg',
    tags: ['Django REST Framework','Python','Microsoft SQL Server','GIT','Scraping','Selenium','Scrapy'],
    liveUrl: null,
    details:<ul className="list-disc pl-4 space-y-2">
    <li><strong>Web Scraping:</strong> Scrapes real-estate property data (prices, locations, etc.) from a property listing website using Scrapy and Requests and Zapier Proxies.</li>
    <li><strong>Price Evaluation:</strong> Implements a custom price comparison algorithm to determine if a property's price is considered good or expensive based on the average market price in that radius.</li>
    <li><strong>API Query:</strong> Users can send queries with the name or location of a property, and the system returns relevant scraped data including price evaluation.</li>
    <li><strong>Database Storage:</strong> Stores relevant property details such as names, prices, and evaluation results in a PostgreSQL database for later use or reporting.</li>
    <li><strong>Backend Framework:</strong> Built using Django REST Framework to expose APIs for querying property data and evaluating prices.</li>
    <li><strong>Authentication:</strong> Secures the API with JWT tokens to authenticate users before performing queries and scraping operations.</li>
    <li><strong>Async Operations:</strong> Implements asynchronous scraping to improve performance and avoid blocking other requests while scraping property data.</li>
    <li><strong>Admin Dashboard:</strong> Provides an admin interface for monitoring scraping tasks, reviewing queries, and managing scraped property data.</li>
  </ul>
  
  
  },
  {
    title: 'Automated Web Scraping Solution for High-Volume Data Extraction',
    description: 'A scalable web scraping solution using Scrapy, Selenium, and Requests to extract data from 100+ websites, deploy on client machines, and schedule background tasks for periodic scraping.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoyel3e_DScnLinIqPWQyjbdSlY6Z9KwttrQ&s',
    tags: ['Python','Scrapy', 'Selenium', 'Requests','Threading','Asyncio','JSON','CSV','SQL','Celery','APScheduler'],
    liveUrl: null,
    details:<ul className="list-disc pl-4 space-y-2">
    <li><strong>Multi-Site Scraping:</strong> Configured scraping scripts for over 100+ websites, including bovada.com, dhanak.com.pk, daraz.pk, and toppr.com, handling diverse structures and data formats.</li>
    <li><strong>Scraping Tools:</strong> Used Scrapy for high-speed scraping, Selenium for dynamic content rendering, and Requests for simple HTTP data fetching.</li>
    <li><strong>Asynchronous Operations:</strong> Leveraged Asyncio for non-blocking scraping tasks to handle multiple sites simultaneously, improving efficiency.</li>
    <li><strong>Threading:</strong> Integrated multithreading to speed up the scraping process, ensuring quicker data retrieval.</li>
    <li><strong>Background Tasks:</strong> Implemented Celery and APScheduler to schedule scraping tasks at specific intervals (e.g., daily, weekly) in the background.</li>
    <li><strong>Data Storage:</strong> Stored scraped data in JSON files, CSV files, or directly in SQL/NoSQL databases depending on client preferences and requirements.</li>
    <li><strong>Error Handling:</strong> Added robust exception handling to manage website-specific issues such as CAPTCHAs, dynamic content, and rate limits.</li>
    <li><strong>Deployment:</strong> Packaged and deployed the scripts on client machines using Docker for consistent environments and easier portability.</li>
    <li><strong>Monitoring and Logs:</strong> Provided detailed logging and monitoring to track scraping progress and debug issues efficiently.</li>
    <li><strong>Performance Optimization:</strong> Optimized the scraper for speed and accuracy by combining asynchronous scraping, threading, and caching mechanisms.</li>
  </ul>
  
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (selectedProject) {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  }, [selectedProject]);

  return (
    <main className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2015/02/24/02/05/website-647013_1280.jpg')",
          filter: 'blur(15px)',
        }}
      ></div>
      <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-8">My Projects</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card 
                    className="overflow-hidden cursor-pointer transition-shadow hover:shadow-lg"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="relative h-48">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectModal
              project={selectedProject}
              isOpen={isModalOpen}
              onClose={() => setSelectedProject(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

