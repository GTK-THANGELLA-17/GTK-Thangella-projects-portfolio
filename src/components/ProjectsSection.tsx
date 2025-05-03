
import React, { useState, useRef } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import ProjectDetails from './ProjectDetails';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const projects = [
  {
    id: 1,
    title: "MoviePulse",
    description: "A data-driven platform providing real-time audience insights and analytics for content creators.",
    tags: ["Vite", "TypeScript", "React", "Shad CN UI", "Tailwind CSS", "Node.js"],
    image: "/home.png",
    ApplicationLink: "https://moviepulse-nu.vercel.app/",
    githubLink: "https://github.com/example",
    details: {
      fullDescription: "MoviePulse is a dynamic platform that empowers content creators, filmmakers, and marketers with real-time, data-driven insights into audience preferences. Utilizing advanced analytics, it aggregates feedback from global audiences across films, TV shows, YouTube videos, and streaming platforms, helping creators tailor their content to meet the evolving demands of viewers. The platform provides interactive visualizations and trend analysis, making it easier for creators to understand and act on audience preferences.",
      benefits: [
        "Global audience insights across films, TV shows, and streaming platforms",
        "Real-time analytics for quick decision-making",
        "Trend tracking to stay ahead of emerging content preferences",
        "Interactive data visualizations to simplify complex information"
      ],
      realWorldImpact: "MoviePulse is revolutionizing the entertainment industry by providing creators with powerful tools to understand global audience preferences. It is helping content creators and streaming platforms make informed, data-driven decisions, ultimately leading to more engaging and successful content.",
      images: [
        "/home.png",
        "/features.png",
        "/insights.png",
        "/importance.png",
        "/cast-your-opinion.png",
        "/stats.png"
      ],
      collaborateInfo: "Hi there! I'm the solo developer working on MoviePulse. If you're passionate about helping content creators and skilled in Node.js backend development, I would love to collaborate! I'm looking for backend developers to improve, optimize, and scale the system for real-time analytics and audience feedback."
    }
  },
  {
    id: 2,
    title: "Code Craft Toolkit",
    description: "A comprehensive suite of tools to divide, merge, and compare code snippets across multiple programming languages.",
    tags: ["Vite", "TypeScript", "React", "Tailwind CSS", "Node.js"],
    image: "/HOME-1.png",
    ApplicationLink: "https://code-craft-tool.vercel.app/",
    githubLink: "https://github.com/your-github-link",
    details: {
      fullDescription: "Code Craft Toolkit is a powerful suite of tools built to simplify code management for developers. It includes features like automatic language detection, code merging, and visual diffing. Whether you're dealing with code snippets across different languages or need a visual representation of changes, this toolkit will help streamline your workflow and boost productivity.",
      benefits: [
        "Automatically detects programming languages in mixed code snippets.",
        "Easily merge multiple code files into one with proper sections.",
        "Visually compare different versions of code with highlighted changes.",
        "Clean, simple interface for developers to quickly access tools."
      ],
      realWorldImpact: "Code Craft Toolkit is changing how developers manage their code by providing simple, efficient tools for dividing, merging, and comparing code snippets. It's making collaboration smoother, reducing the time spent managing code, and enabling developers to focus more on writing and less on managing their workflows.",
      images: [
        "\HOME-1.png"
      ]
    }
  },
  {
    "id": 3,
    "title": "Lifespan Estimator",
    "description": "A comprehensive tool to estimate your potential lifespan based on various health and lifestyle factors, backed by scientific research and advanced algorithms.",
    "tags": ["React", "TypeScript", "TailwindCSS", "shadcn/ui", "Recharts", "Git", "Vercel"],
    "image": "/Lifespan-Estimator.png",
    "ApplicationLink": "https://lifespan-estimator.vercel.app/",
    "githubLink": "https://github.com/your-github-link",
    "details": {
      "fullDescription": "Lifespan Estimator provides an estimate of your remaining lifespan based on health, lifestyle habits, and environmental factors. This tool takes into account medical conditions, diet, exercise, social connections, and mental well-being to provide an educated estimate. Please note that this is a general tool and should not replace professional health advice.",
      "benefits": [
        "Get an estimate of your remaining lifespan based on personal data and lifestyle choices.",
        "Understand how your health and environment influence your long-term well-being.",
        "Learn about factors that may shorten or extend your life expectancy.",
        "Encourages proactive health behaviors and awareness about quality of life."
      ],
      "realWorldImpact": "Lifespan Estimator raises awareness about the impact of daily habits and environmental factors on longevity. It encourages individuals to evaluate their health and lifestyle choices, sparking meaningful conversations around wellness and proactive health management.",
      "images": [
        "/Lifespan-Estimator.png"
      ]
    }
  },
  {
    "id": 2,
    "title": "Reel Revival",
    "description": "Reel Revival offers a platform to book exclusive private screenings for classic films and movies that are no longer in theaters, creating a premium cinema experience for film lovers and supporting local theaters. This is a concept that I am working on developing. If you like this concept or want to give suggestions, feel free to message me!",
    "tags": ["React", "TypeScript", "Vite", "TailwindCSS", "Node.js"],
    "image": "/Reel-Revival.png",
    "ApplicationLink": "https://reel-revival.vercel.app/",
    "githubLink": "https://github.com/your-github-link",
    "details": {
      "fullDescription": "Reel Revival connects movie enthusiasts with theaters for private screenings of classic films or movies missed during their theatrical run. We provide a customizable viewing experience in premium theaters, supporting local businesses during non-peak times. This is a concept that I am working on developing, and I would love to hear your feedback!",
      "benefits": [
        "Private Screenings: Book a theater for an exclusive movie experience.",
        "Classic Movie Selection: Watch films that are no longer in theaters.",
        "Customizable Events: Perfect for special occasions like birthdays or anniversaries.",
        "Support for Local Theaters: Keep cinemas alive during off-peak periods.",
        "Premium Experience: State-of-the-art projection and sound."
      ],
      "realWorldImpact": "Reel Revival allows film lovers to relive movie magic on the big screen while supporting local theaters, fostering a community of movie enthusiasts who can enjoy cinema in a private, memorable setting.",
      "images": [
        "/Reel-Revival.png"
      ]
    }
  }
  
];


const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  // Hover animation variants
  const cardVariants = {
    rest: { 
      scale: 1,
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
    },
    hover: { 
      scale: 1.03,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
    }
  };

  const imageVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 }
  };

  const buttonVariants = {
    rest: { opacity: 0, y: 10 },
    hover: { opacity: 1, y: 0, transition: { duration: 0.2 } }
  };

  return (
    <section id="projects" ref={ref} className="section-container relative overflow-hidden">
      {/* Background grid pattern - Aceternity-style */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>
      </div>
      
      <motion.div 
        style={{ opacity, scale }}
        className="relative z-10"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold bg-clip-text text-transparent bg-gradient-to-r from-gold-400 to-gold-600 mb-6">
            Featured Projects
          </h2>
          <p className="text-navy-700 dark:text-navy-200">
            Explore my portfolio of projects that showcase my skills, creativity, and problem-solving approach.
            Each project represents a unique challenge and solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ScrollReveal 
              key={project.id}
              variant="techReveal"
              delay={idx * 0.1} 
              threshold={0.1}
            >
              <motion.div
                className="project-card h-[360px] cursor-pointer rounded-xl overflow-hidden bg-navy-800/10 backdrop-blur-sm border border-white/5"
                onClick={() => setSelectedProject(project)}
                variants={cardVariants}
                initial="rest"
                whileHover="hover"
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <motion.div className="h-full w-full relative">
                  <motion.img 
                    src={project.image} 
                    alt={project.title} 
                    className="h-full w-full object-cover"
                    variants={imageVariants}
                  />
                  
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 flex flex-col justify-end"
                  >
                    {/* Collaboration badge */}
                    {project.details.collaborateInfo && (
                      <Badge className="absolute top-4 right-4 bg-gold-500 hover:bg-gold-600 text-white">
                        Seeking Collaboration
                      </Badge>
                    )}
                    
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm line-clamp-2">{project.description}</p>
                    
                    <div className="mb-4 flex gap-2 flex-wrap">
                      {project.tags.slice(0, 3).map((tag, index) => (
                        <span 
                          key={index} 
                          className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-navy-800/70 text-navy-100"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-navy-800/70 text-navy-100">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <motion.div 
                      className="flex space-x-4"
                      variants={buttonVariants}
                    >
                      <Button
                        size="sm"
                        className="rounded-full bg-transparent hover:bg-white/10 border border-white/20 text-white flex items-center gap-1"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.ApplicationLink, '_blank');
                        }}
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Application
                      </Button>
                      <Button
                        size="sm"
                        className="rounded-full bg-transparent hover:bg-white/10 border border-white/20 text-white flex items-center gap-1"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.githubLink, '_blank');
                        }}
                      >
                        <Github className="h-3.5 w-3.5" />
                        Code
                      </Button>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="flex justify-center mt-10">
          <Button 
            className="group relative overflow-hidden rounded-full bg-navy-800 px-6 py-2 transition-all hover:bg-navy-700 hover:shadow-[0_0_15px_5px_rgba(245,158,11,0.1)]"
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-gold-500/20 to-gold-400/20 opacity-0 group-hover:opacity-100 transition-opacity"
              initial={{ opacity: 0 }}
              whileHover={{ 
                opacity: 1,
                background: [
                  "linear-gradient(45deg, rgba(245,158,11,0.2) 0%, rgba(245,158,11,0.1) 100%)",
                  "linear-gradient(45deg, rgba(245,158,11,0.3) 0%, rgba(245,158,11,0.15) 100%)",
                  "linear-gradient(45deg, rgba(245,158,11,0.2) 0%, rgba(245,158,11,0.1) 100%)"
                ]
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="relative z-10 flex items-center gap-1">
              View All Projects 
              <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
            </span>
          </Button>
        </div>
      </motion.div>

      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default ProjectsSection;
