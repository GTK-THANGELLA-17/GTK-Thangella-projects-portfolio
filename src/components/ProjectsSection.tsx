
import React, { useState, useRef } from 'react';
import { ExternalLink, Github, ArrowRight, Play, Star } from 'lucide-react';
import ProjectDetails from './ProjectDetails';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const projects = [
  
  {
    id: 2,
    title: "Code Craft Toolkit",
    description: "A comprehensive suite of tools to divide, merge, and compare code snippets across multiple programming languages.",
    tags: ["Vite", "TypeScript", "React", "Tailwind CSS", "Node.js"],
    image: "/HOME-1.png",
    demoLink: "https://code-craft-tool.vercel.app/",
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
        "/HOME-1.png"
      ]
    }
  },
  {
    id: 3,
    title: "Lifespan Estimator",
    description: "A comprehensive tool to estimate your potential lifespan based on various health and lifestyle factors, backed by scientific research and advanced algorithms.",
    tags: ["React", "TypeScript", "TailwindCSS", "shadcn/ui", "Recharts", "Git", "Vercel"],
    image: "/Lifespan-Estimator.png",
    demoLink: "https://lifespan-estimator.vercel.app/",
    githubLink: "https://github.com/your-github-link",
    details: {
      fullDescription: "Lifespan Estimator provides an estimate of your remaining lifespan based on health, lifestyle habits, and environmental factors. This tool takes into account medical conditions, diet, exercise, social connections, and mental well-being to provide an educated estimate. Please note that this is a general tool and should not replace professional health advice.",
      benefits: [
        "Get an estimate of your remaining lifespan based on personal data and lifestyle choices.",
        "Understand how your health and environment influence your long-term well-being.",
        "Learn about factors that may shorten or extend your life expectancy.",
        "Encourages proactive health behaviors and awareness about quality of life."
      ],
      realWorldImpact: "Lifespan Estimator raises awareness about the impact of daily habits and environmental factors on longevity. It encourages individuals to evaluate their health and lifestyle choices, sparking meaningful conversations around wellness and proactive health management.",
      images: [
        "/Lifespan-Estimator.png"
      ]
    }
  },
  {
  "id": 4,
  "title": "Reel Revival",
  "description": "A platform to book private screenings of classic and hard-to-find films, offering a premium cinema experience while supporting local theaters.",
  "tags": ["React", "TypeScript", "Vite", "TailwindCSS", "Node.js"],
  "image": "/Reel-Revival.png",
  "demoLink": "https://reel-revival.vercel.app/",
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
},
  {
  "id": 5,
  "title": "Need2Fix",
  "description": "A smart service provider platform connecting verified professionals with customers for quick, reliable, location-based services.",
  "tags": ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
  "image": "/need2fix-home.png",
  "demoLink": "https://need2fix-v1.vercel.app/",
  "githubLink": "https://github.com/your-github-link",
  "details": {
    "fullDescription": "Need2Fix is a revolutionary digital marketplace designed to bridge the gap between skilled service providers and customers seeking trusted professionals. It offers instant location-based matching, verified profiles, and direct communication via WhatsApp or phone calls, making it easier than ever to find reliable help.",
    "benefits": [
      "Smart GPS-enabled location detection to find services in your exact area.",
      "Verified and background-checked professionals with detailed profiles and ratings.",
      "Seamless communication through WhatsApp integration and one-click calling.",
      "Mobile-first, fast-loading, and responsive design optimized for all devices."
    ],
    "realWorldImpact": "Need2Fix transforms the traditional service market by digitizing and standardizing access to quality service providers, creating employment opportunities, empowering small businesses, and supporting local economies across India.",
    "images": [
      "/need2fix-home.png"
    ]
  }
},
{
  "id": 5,
  "title": "CineLaunch",
  "description": "Empowering filmmakers worldwide to fund and create their cinematic visions through global crowdfunding and community support.",
  "tags": ["React", "TypeScript", "Crowdfunding", "Film", "Community"],
  "image": "/cine-launch.png",
  "demoLink": "https://cine-launch-v1.vercel.app/",
  "githubLink": "https://github.com/your-github-link",
  "details": {
    "fullDescription": "CineLaunch is a comprehensive crowdfunding platform designed to empower filmmakers by connecting them with a global community of film enthusiasts and industry investors. It offers multiple funding pathways including crowdfunding, investor funding, and grant programs to help filmmakers bring their creative visions to life.",
    "benefits": [
      "Multiple funding options tailored to your project’s needs: crowdfunding, investor funding, and grants.",
      "High success rates with a supportive global community of film lovers and professionals.",
      "Clear guidance and step-by-step process to prepare, launch, and promote your campaign.",
      "Tools to craft engaging campaigns with compelling visuals and rewards.",
      "Access to investor networks and grant programs for additional financing."
    ],
    "realWorldImpact": "CineLaunch democratizes film production by enabling creators worldwide to finance projects without relying on traditional gatekeepers. This fosters diverse storytelling and supports independent filmmakers in bringing fresh voices to the global cinema landscape.",
    "callToAction": "Join thousands of filmmakers who have successfully funded their projects through CineLaunch. Submit your project today and start your journey to bring your film dreams to life!",
    "images": [
      "/cine-launch.png"
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

  return (
    <section id="projects" ref={ref} className="relative overflow-hidden">
      <div className="section-container">
        {/* Background decoration */}
        <div className="absolute inset-0 tech-grid opacity-30"></div>
        
        <motion.div 
          style={{ opacity }}
          className="relative z-10"
        >
          <div className="text-center max-w-4xl mx-auto mb-20">
            <motion.div
              className="inline-block px-6 py-3 bg-gradient-to-r from-accent/20 to-blue-500/20 rounded-full text-accent font-semibold text-sm mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              Featured Projects
            </motion.div>
            
            <motion.h2 
              className="text-4xl lg:text-5xl font-playfair font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Crafting Digital{" "}
              <span className="premium-text-gradient">Masterpieces</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-foreground/70 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Explore my portfolio of projects that showcase creativity, technical excellence, 
              and problem-solving innovation. Each project represents a unique challenge and solution.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                className="group premium-card p-0 h-[420px] cursor-pointer overflow-hidden"
                onClick={() => setSelectedProject(project)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -12, scale: 1.02 }}
              >
                <div className="h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <motion.img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Collaboration badge */}
                    {project.details.collaborateInfo && (
                      <Badge className="absolute top-4 right-4 bg-gradient-to-r from-accent to-blue-500 text-white border-0">
                        <Star className="h-3 w-3 mr-1" />
                        Open to Collaborate
                      </Badge>
                    )}
                    
                    {/* Hover overlay with buttons */}
                    <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Button
                        size="sm"
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30 text-white"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.demoLink, '_blank');
                        }}
                      >
                        <Play className="h-4 w-4 mr-1" />
                        Demo
                      </Button>
                      <Button
                        size="sm"
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30 text-white"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.githubLink, '_blank');
                        }}
                      >
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </Button>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                    <p className="text-foreground/70 mb-4 text-sm leading-relaxed flex-1">{project.description}</p>
                    
                    <div className="flex gap-2 flex-wrap mb-4">
                      {project.tags.slice(0, 3).map((tag, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-accent/10 to-blue-500/10 text-accent border border-accent/20"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-accent/10 to-blue-500/10 text-accent border border-accent/20">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center text-accent text-sm font-medium group-hover:translate-x-2 transition-transform">
                      View Details
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Projects Button */}
          <motion.div 
            className="flex justify-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Button 
              className="group relative overflow-hidden bg-gradient-to-r from-accent via-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl magnetic-hover neon-glow"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore All Projects 
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          </motion.div>
        </motion.div>
      </div>

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
