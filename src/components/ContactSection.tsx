import React, { useState } from 'react';
import { Mail, Send, MessageSquare, Star, Heart, Code, MapPin, Phone } from 'lucide-react';
import { toast } from "sonner";
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    type: 'collaboration' // Default selection
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, type: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Prepare email content
    let subject = '';
    
    switch(formData.type) {
      case 'collaboration':
        subject = `Collaboration Request from ${formData.name}`;
        break;
      case 'feedback':
        subject = `Project Feedback from ${formData.name}`;
        break;
      case 'suggestion':
        subject = `Website Suggestion from ${formData.name}`;
        break;
      case 'question':
        subject = `Question from ${formData.name}`;
        break;
      case 'bug':
        subject = `Bug Report from ${formData.name}`;
        break;
      default:
        subject = `Message from ${formData.name}`;
    }
    
    const mailtoLink = `mailto:imgtk17@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nType: ${formData.type}\n\nMessage:\n${formData.message}`)}`;
    
    // Open default mail client
    window.open(mailtoLink);
    
    // Show success message
    setTimeout(() => {
      const typeText = {
        'collaboration': 'Collaboration request',
        'feedback': 'Feedback',
        'suggestion': 'Suggestion',
        'question': 'Question',
        'bug': 'Bug report'
      }[formData.type] || 'Message';
      
      toast.success(`${typeText} sent successfully! I'll get back to you soon.`);
      setFormData({ name: '', email: '', message: '', type: 'collaboration' });
      setIsSubmitting(false);
    }, 1500);
  };

  // Icon mapping for different message types
  const getIconForType = (type: string) => {
    switch(type) {
      case 'collaboration': return <Send className="h-4 w-4" />;
      case 'feedback': return <MessageSquare className="h-4 w-4" />;
      case 'suggestion': return <Star className="h-4 w-4" />;
      case 'question': return <Heart className="h-4 w-4" />;
      case 'bug': return <Code className="h-4 w-4" />;
      default: return <Send className="h-4 w-4" />;
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "imgtk17@gmail.com",
      description: "Drop me a line anytime"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Available Globally",
      description: "Remote collaboration worldwide"
    },
    {
      icon: Phone,
      title: "Response Time",
      value: "24-48 hours",
      description: "Quick turnaround guaranteed"
    }
  ];

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="section-container">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-accent/10 to-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-accent to-blue-500 rounded-full mb-8 floating-element"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Mail className="h-8 w-8 text-white" />
            </motion.div>
            
            <motion.h2 
              className="text-4xl lg:text-5xl font-playfair font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Let's Create Something{" "}
              <span className="premium-text-gradient">Amazing</span>{" "}
              Together
            </motion.h2>
            
            <motion.p 
              className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              I'm always excited to discuss new projects, creative ideas, receive feedback, 
              or answer questions about my work. Let's start a conversation!
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-playfair font-bold mb-8">Get in Touch</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    className="premium-card p-6 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-accent to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">{info.title}</h4>
                        <p className="text-accent font-semibold mb-1">{info.value}</p>
                        <p className="text-sm text-foreground/60">{info.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              className="premium-card p-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-medium mb-3 group-focus-within:text-accent transition-colors">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-4 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm text-foreground focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-medium mb-3 group-focus-within:text-accent transition-colors">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-4 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm text-foreground focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="type" className="block text-sm font-medium mb-3">
                    Purpose
                  </label>
                  <Select
                    value={formData.type}
                    onValueChange={handleSelectChange}
                  >
                    <SelectTrigger className="w-full px-4 py-4 h-auto border border-white/20 bg-white/5 backdrop-blur-sm text-foreground focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none rounded-xl">
                      <SelectValue placeholder="Select the purpose of your message" />
                    </SelectTrigger>
                    <SelectContent className="glass-morphism border border-white/20 rounded-xl">
                      <SelectItem value="collaboration" className="focus:bg-white/10 rounded-lg">
                        <div className="flex items-center gap-2">
                          <Send className="h-4 w-4" />
                          <span>Collaboration / Work Together</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="feedback" className="focus:bg-white/10 rounded-lg">
                        <div className="flex items-center gap-2">
                          <MessageSquare className="h-4 w-4" />
                          <span>Project Feedback</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="suggestion" className="focus:bg-white/10 rounded-lg">
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4" />
                          <span>Website Suggestion</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="question" className="focus:bg-white/10 rounded-lg">
                        <div className="flex items-center gap-2">
                          <Heart className="h-4 w-4" />
                          <span>Ask a Question</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="bug" className="focus:bg-white/10 rounded-lg">
                        <div className="flex items-center gap-2">
                          <Code className="h-4 w-4" />
                          <span>Report a Bug</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-4 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm text-foreground focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Tell me about your project or idea..."
                    required
                  ></textarea>
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-accent via-blue-500 to-purple-500 text-white py-4 rounded-xl font-semibold text-lg shadow-2xl magnetic-hover neon-glow disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      Processing
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin ml-2"></div>
                    </>
                  ) : (
                    <>
                      Send Message
                      {getIconForType(formData.type)}
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
