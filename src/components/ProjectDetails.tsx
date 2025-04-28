
import React, { useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Play, ArrowRight, Code, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

interface ProjectDetailsProps {
  project: {
    id: number;
    title: string;
    description: string;
    tags: string[];
    image: string;
    ApplicationLink: string;
    githubLink: string;
    details: {
      fullDescription: string;
      benefits: string[];
      realWorldImpact: string;
      images: string[];
      collaborateInfo?: string;
      highlights?: string[];
      techStack?: { name: string; icon?: string }[];
    };
  };
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetails = ({ project, isOpen, onClose }: ProjectDetailsProps) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % project.details.images.length);
  };
  
  const prevImage = () => {
    setActiveImageIndex((prev) => 
      prev === 0 ? project.details.images.length - 1 : prev - 1
    );
  };
  
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-3xl overflow-y-auto bg-gradient-to-b from-background to-background/95 backdrop-blur-sm border-l border-gold-500/10">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-2xl font-playfair bg-clip-text text-transparent bg-gradient-to-r from-gold-400 to-gold-600">
            {project.title}
          </SheetTitle>
        </SheetHeader>
        
        <div className="space-y-6">
          {/* Project Images Carousel */}
          <div className="relative rounded-lg overflow-hidden aspect-video bg-navy-800/50 shadow-lg border border-white/5">
            {project.details.images.map((image, index) => (
              <motion.div
                key={index}
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: index === activeImageIndex ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <img 
                  src={image} 
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
            
            {project.details.images.length > 1 && (
              <>
                <button 
                  onClick={prevImage} 
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                >
                  <ArrowRight className="h-4 w-4 rotate-180" />
                </button>
                <button 
                  onClick={nextImage} 
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                  {project.details.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === activeImageIndex ? 'bg-gold-500 w-4' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Project Overview */}
          <Card className="overflow-hidden border-gold-500/10 bg-navy-800/10 backdrop-blur-sm">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-2 text-gold-400">Overview</h3>
              <p className="text-muted-foreground">{project.details.fullDescription}</p>
            </CardContent>
          </Card>

          {/* Technologies */}
          <Card className="overflow-hidden border-gold-500/10 bg-navy-800/10 backdrop-blur-sm">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-3 text-gold-400">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <Badge 
                    key={index}
                    variant="outline"
                    className="px-3 py-1 bg-navy-800/50 border-gold-500/30 text-gold-100 hover:bg-navy-700/50 transition-all"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              
              {/* Tech Stack (if available) */}
              {project.details.techStack && (
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {project.details.techStack.map((tech, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-2 p-2 rounded-md bg-navy-700/30 border border-navy-600/30"
                    >
                      <Code className="h-3.5 w-3.5 text-gold-400" />
                      <span className="text-sm">{tech.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Benefits */}
          {project.details.benefits && project.details.benefits.length > 0 && (
            <Card className="overflow-hidden border-gold-500/10 bg-navy-800/10 backdrop-blur-sm">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-3 text-gold-400">Key Benefits</h3>
                <ul className="space-y-2">
                  {project.details.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Star className="mr-2 h-4 w-4 text-gold-500 mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Highlights (if available) */}
          {project.details.highlights && (
            <Card className="overflow-hidden border-gold-500/10 bg-navy-800/10 backdrop-blur-sm">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-3 text-gold-400">Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.details.highlights.map((highlight, index) => (
                    <div 
                      key={index}
                      className="p-3 rounded-md bg-navy-700/30 border border-navy-600/30"
                    >
                      <span className="text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Real World Impact */}
          {project.details.realWorldImpact && (
            <Card className="overflow-hidden border-gold-500/10 bg-navy-800/10 backdrop-blur-sm">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2 text-gold-400">Real World Impact</h3>
                <p className="text-muted-foreground">{project.details.realWorldImpact}</p>
              </CardContent>
            </Card>
          )}

          {/* Collaborate Info (if available) */}
          {project.details.collaborateInfo && (
            <Card className="overflow-hidden border-gold-500/10 bg-navy-800/10 backdrop-blur-sm border-t-4 border-t-gold-500">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2 text-gold-400">Open for Collaboration</h3>
                <p className="text-muted-foreground">{project.details.collaborateInfo}</p>
                <Button
                  variant="outline"
                  className="mt-4 border-gold-500/50 text-gold-500 hover:bg-gold-500/10"
                  onClick={() => window.location.href = '#contact'}
                >
                  Get in Touch
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Application & GitHub Links */}
          <div className="flex gap-4">
            <Button 
              className="flex-1 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 border-none shadow-md hover:shadow-lg transition-all"
              onClick={() => window.open(project.ApplicationLink, '_blank')}
            >
              <Play className="mr-2 h-4 w-4" />
              Application
            </Button>
            <Button 
              variant="outline" 
              className="flex-1 border-gold-500/50 text-gold-500 hover:bg-gold-500/10"
              onClick={() => window.open(project.githubLink, '_blank')}
            >
              <Github className="mr-2 h-4 w-4" />
              View Code
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ProjectDetails;
