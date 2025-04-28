
import React, { useState } from 'react';
import { Mail, Send, MessageSquare, Star, Heart, Code } from 'lucide-react';
import { toast } from "sonner";
import { Button } from '@/components/ui/button';
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

  return (
    <section id="contact" className="bg-navy-50 dark:bg-navy-800/30" data-aos="fade-in" data-aos-delay="200">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center bg-gold-100 text-gold-800 dark:bg-gold-900/30 dark:text-gold-400 rounded-full h-14 w-14 mb-6 animate-bounce-gentle">
              <Mail className="h-6 w-6" />
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-navy-900 dark:text-white mb-4">
              Let's Connect
            </h2>
            
            <p className="text-navy-700 dark:text-navy-200 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, receiving feedback, or answering questions about my work. 
              Feel free to reach out for any reason!
            </p>
          </div>
          
          <div className="bg-white dark:bg-navy-800/70 rounded-2xl shadow-lg p-8 md:p-12 hover:shadow-xl transition-all duration-300 dark:border dark:border-navy-700/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-medium text-navy-800 dark:text-navy-200 mb-2 group-focus-within:text-gold-500 transition-colors">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-navy-200 dark:border-navy-600 bg-transparent text-navy-900 dark:text-white focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all outline-none"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-medium text-navy-800 dark:text-navy-200 mb-2 group-focus-within:text-gold-500 transition-colors">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-navy-200 dark:border-navy-600 bg-transparent text-navy-900 dark:text-white focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all outline-none"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-navy-800 dark:text-navy-200 mb-2">
                  Purpose
                </label>
                <Select
                  value={formData.type}
                  onValueChange={handleSelectChange}
                >
                  <SelectTrigger className="w-full px-4 py-3 h-auto border border-navy-200 dark:border-navy-600 bg-transparent text-navy-900 dark:text-white focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all outline-none">
                    <SelectValue placeholder="Select the purpose of your message" />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-navy-800 border border-navy-200 dark:border-navy-700">
                    <SelectItem value="collaboration" className="focus:bg-navy-100 dark:focus:bg-navy-700">
                      <div className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        <span>Collaboration / Work Together</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="feedback" className="focus:bg-navy-100 dark:focus:bg-navy-700">
                      <div className="flex items-center gap-2">
                        <MessageSquare className="h-4 w-4" />
                        <span>Project Feedback</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="suggestion" className="focus:bg-navy-100 dark:focus:bg-navy-700">
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4" />
                        <span>Website Suggestion</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="question" className="focus:bg-navy-100 dark:focus:bg-navy-700">
                      <div className="flex items-center gap-2">
                        <Heart className="h-4 w-4" />
                        <span>Ask a Question</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="bug" className="focus:bg-navy-100 dark:focus:bg-navy-700">
                      <div className="flex items-center gap-2">
                        <Code className="h-4 w-4" />
                        <span>Report a Bug</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy-800 dark:text-navy-200 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-navy-200 dark:border-navy-600 bg-transparent text-navy-900 dark:text-white focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              
              <div className="flex justify-end">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-6 rounded-lg font-medium transition-all disabled:opacity-70 hover:scale-105 transform h-auto"
                >
                  {isSubmitting ? (
                    <>Processing<div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin ml-2"></div></>
                  ) : (
                    <>Send Message {getIconForType(formData.type)}</>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
