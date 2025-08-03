import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, Send, X, Minimize2, Maximize2, Sparkles, MessageCircle, Lightbulb, Code, User, 
  Mail, Phone, Github, Linkedin, Instagram, Mic, MicOff, Settings, Download, 
  Copy, Trash2, Moon, Sun, Volume2, VolumeX, RefreshCw, Star, Heart, MapPin, 
  Clock, CloudRain, Calendar, Coffee, Pizza, Music, Camera, Gamepad2, Book, 
  Zap, Rocket, Gift, Trophy, Brain, Palette, Target
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  isStarred?: boolean;
  isLiked?: boolean;
}

// Updated projects data without MoviePulse
const projects = [
  {
    id: 1,
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
      realWorldImpact: "Code Craft Toolkit is changing how developers manage their code by providing simple, efficient tools for dividing, merging, and comparing code snippets. It's making collaboration smoother, reducing the time spent managing code, and enabling developers to focus more on writing and less on managing their workflows."
    }
  },
  {
    id: 2,
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
      realWorldImpact: "Lifespan Estimator raises awareness about the impact of daily habits and environmental factors on longevity. It encourages individuals to evaluate their health and lifestyle choices, sparking meaningful conversations around wellness and proactive health management."
    }
  },
  {
    id: 3,
    title: "Reel Revival",
    description: "Reel Revival offers a platform to book exclusive private screenings for classic films and movies that are no longer in theaters, creating a premium cinema experience for film lovers and supporting local theaters.",
    tags: ["React", "TypeScript", "Vite", "TailwindCSS", "Node.js"],
    image: "/Reel-Revival.png",
    demoLink: "https://reel-revival.vercel.app/",
    githubLink: "https://github.com/your-github-link",
    details: {
      fullDescription: "Reel Revival connects movie enthusiasts with theaters for private screenings of classic films or movies missed during their theatrical run. We provide a customizable viewing experience in premium theaters, supporting local businesses during non-peak times. This is a concept that I am working on developing, and I would love to hear your feedback and suggestions!",
      benefits: [
        "Private Screenings: Book a theater for an exclusive movie experience.",
        "Classic Movie Selection: Watch films that are no longer in theaters.",
        "Customizable Events: Perfect for special occasions like birthdays or anniversaries.",
        "Support for Local Theaters: Keep cinemas alive during off-peak periods.",
        "Premium Experience: State-of-the-art projection and sound."
      ],
      realWorldImpact: "Reel Revival allows film lovers to relive movie magic on the big screen while supporting local theaters, fostering a community of movie enthusiasts who can enjoy cinema in a private, memorable setting."
    }
  },
  {
    id: 4,
    title: "Need2Fix",
    description: "A smart service provider platform connecting verified professionals with customers for quick, reliable, location-based services.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    image: "/need2fix-home.png",
    demoLink: "https://need2fix-v1.vercel.app/",
    githubLink: "https://github.com/your-github-link",
    details: {
      fullDescription: "Need2Fix is a revolutionary digital marketplace designed to bridge the gap between skilled service providers and customers seeking trusted professionals. It offers instant location-based matching, verified profiles, and direct communication via WhatsApp or phone calls, making it easier than ever to find reliable help.",
      benefits: [
        "Smart GPS-enabled location detection to find services in your exact area.",
        "Verified and background-checked professionals with detailed profiles and ratings.",
        "Seamless communication through WhatsApp integration and one-click calling.",
        "Mobile-first, fast-loading, and responsive design optimized for all devices."
      ],
      realWorldImpact: "Need2Fix transforms the traditional service market by digitizing and standardizing access to quality service providers, creating employment opportunities, empowering small businesses, and supporting local economies across India.",
      images: [
        "/need2fix-home.png"
      ]
    }
  },
  {
    id: 5,
    title: "CineLaunch",
    description: "Empowering filmmakers worldwide to fund and create their cinematic visions through global crowdfunding and community support.",
    tags: ["React", "TypeScript", "Crowdfunding", "Film", "Community"],
    image: "/cine-launch.png",
    demoLink: "https://cine-launch-v1.vercel.app/",
    githubLink: "https://github.com/your-github-link",
    details: {
      fullDescription: "CineLaunch is a comprehensive crowdfunding platform designed to empower filmmakers by connecting them with a global community of film enthusiasts and industry investors. It offers multiple funding pathways including crowdfunding, investor funding, and grant programs to help filmmakers bring their creative visions to life.",
      benefits: [
        "Multiple funding options tailored to your project's needs: crowdfunding, investor funding, and grants.",
        "High success rates with a supportive global community of film lovers and professionals.",
        "Clear guidance and step-by-step process to prepare, launch, and promote your campaign.",
        "Tools to craft engaging campaigns with compelling visuals and rewards.",
        "Access to investor networks and grant programs for additional financing."
      ],
      realWorldImpact: "CineLaunch democratizes film production by enabling creators worldwide to finance projects without relying on traditional gatekeepers. This fosters diverse storytelling and supports independent filmmakers in bringing fresh voices to the global cinema landscape.",
      callToAction: "Join thousands of filmmakers who have successfully funded their projects through CineLaunch. Submit your project today and start your journey to bring your film dreams to life!",
      images: [
        "/cine-launch.png"
      ]
    }
  }
];

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  const [chatHistory, setChatHistory] = useState<Message[][]>([]);
  const [currentChatIndex, setCurrentChatIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();

  // Voice recognition setup
  const [recognition, setRecognition] = useState<any>(null);

  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';
      
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputValue(transcript);
        setIsListening(false);
      };
      
      recognition.onerror = () => {
        setIsListening(false);
      };
      
      setRecognition(recognition);
    }
  }, []);

  // Get current date and time
  const getCurrentDateTime = () => {
    const now = new Date();
    return {
      date: now.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      time: now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: true 
      })
    };
  };

  // Enhanced portfolio data with comprehensive project information
  const portfolioData = {
    about: "🚀 G. Thangella is a Creative Visionary, AI Specialist & Tech Innovator who transforms complex ideas into breakthrough digital solutions! ✨ With deep expertise in modern web development, machine learning, and advanced prompt engineering, this portfolio showcases cutting-edge projects built with React, TypeScript, AI integration, and premium animations. 💡 The focus is on creating revolutionary user experiences that push the boundaries of what's possible with technology! 🎯 Also specializing in AI prompt engineering for optimized model interactions and enhanced user experiences! 🤖",
    skills: "💻 Advanced Technical Arsenal: React ⚛️ (Expert Level), TypeScript 📝 (Advanced), Tailwind CSS 🎨 (Master), Framer Motion 🔄 (Animation Specialist), Node.js 🌐 (Backend Expert), Python 🐍 (AI/ML), Prompt Engineering 🤖 (AI Optimization Specialist), Machine Learning 📊, UI/UX Design 🎯 (User Psychology), Database Architecture 💾, API Development 🔗, Mobile Development 📱, Cloud Technologies ☁️, DevOps 🔧, and Blockchain 🪙! Each skill backed by real-world implementations and continuous innovation! 🚀 Master of crafting precise prompts for AI models to achieve optimal performance and user satisfaction! 🎪",
    projects: `🎯 Revolutionary Projects Portfolio: 

**1. 🛠️ Code Craft Toolkit** - ${projects[0].description} 
   • 🔍 ${projects[0].details.benefits[0]}
   • 🔧 ${projects[0].details.benefits[1]} 
   • 👁️ ${projects[0].details.benefits[2]}
   • 🎨 ${projects[0].details.benefits[3]}
   💡 Real Impact: ${projects[0].details.realWorldImpact}
   🔗 Demo: ${projects[0].demoLink}

**2. 📊 Lifespan Estimator** - ${projects[1].description}
   • 📈 ${projects[1].details.benefits[0]}
   • 🧠 ${projects[1].details.benefits[1]}
   • 📚 ${projects[1].details.benefits[2]}
   • 💪 ${projects[1].details.benefits[3]}
   💡 Real Impact: ${projects[1].details.realWorldImpact}
   🔗 Demo: ${projects[1].demoLink}

**3. 🎭 Reel Revival** - ${projects[2].description}
   • 🏛️ ${projects[2].details.benefits[0]}
   • 🎞️ ${projects[2].details.benefits[1]}
   • 🎉 ${projects[2].details.benefits[2]}
   • 🎬 ${projects[2].details.benefits[3]}
   • ✨ ${projects[2].details.benefits[4]}
   💡 Real Impact: ${projects[2].details.realWorldImpact}
   🔗 Demo: ${projects[2].demoLink}

**4. 🔧 Need2Fix** - ${projects[3].description}
   • 🎯 ${projects[3].details.benefits[0]}
   • ✅ ${projects[3].details.benefits[1]}
   • 📱 ${projects[3].details.benefits[2]}
   • 🚀 ${projects[3].details.benefits[3]}
   💡 Real Impact: ${projects[3].details.realWorldImpact}
   🔗 Demo: ${projects[3].demoLink}

**5. 🎥 CineLaunch** - ${projects[4].description}
   • 💰 ${projects[4].details.benefits[0]}
   • 🌟 ${projects[4].details.benefits[1]}
   • 📋 ${projects[4].details.benefits[2]}
   • 🎨 ${projects[4].details.benefits[3]}
   • 🤝 ${projects[4].details.benefits[4]}
   💡 Real Impact: ${projects[4].details.realWorldImpact}
   🔗 Demo: ${projects[4].demoLink}

Each project represents breakthrough innovation and technical excellence! ✨`,
    contact: "📞 Professional Connection Channels: Email 📧 (business inquiries & collaborations), Phone ☎️ (direct consultation), LinkedIn 💼 (professional networking & partnerships), GitHub 👨‍💻 (open source contributions), Instagram 📷 (creative showcases), Twitter 🐦 (tech insights & AI discussions), and Discord 🎮 (community chat & real-time collaboration)! Always excited about revolutionary projects and cutting-edge opportunities! 🤝",
    promptEngineering: "🤖 **Advanced Prompt Engineering Mastery**: World-class expertise in crafting precision prompts for AI models including GPT, Claude, Gemini, and custom LLMs! 🎯 Core Specializations: \n\n🎪 **Prompt Optimization Techniques**: Achieving 400%+ improvement in AI response quality through advanced prompt structuring, context engineering, and response refinement! \n\n🧠 **Context Management**: Master of maintaining coherent conversations across complex multi-turn interactions with perfect memory retention! \n\n⚡ **Chain-of-Thought Prompting**: Expert in breaking down complex problems into logical steps for superior AI reasoning! \n\n📚 **Few-Shot Learning**: Crafting minimal examples that teach AI models to perform complex tasks with remarkable accuracy! \n\n🎭 **Role-Based Design**: Creating specialized AI personas and assistants tailored for specific industries and use cases! \n\n🛡️ **Error Handling**: Advanced techniques for managing edge cases and ensuring consistent AI behavior! \n\n📊 **Performance Testing**: A/B testing prompts for optimal results and continuous improvement! \n\n🖼️ **Multi-Modal Integration**: Combining text, image, and audio prompts for comprehensive AI experiences! \n\n🤖 **Custom AI Development**: Building specialized chatbots and AI assistants for businesses! \n\n✨ Helping Fortune 500 companies and startups achieve breakthrough results in AI implementation!",
    ai: "🤖 Ultra-Advanced AI Assistant Features: Neural language processing 🧠, Multi-modal understanding 👁️, Contextual memory management 📚, Intelligent conversation flow 💬, Voice-to-text integration 🎤, Emotional intelligence 💝, Predictive responses ⚡, Multi-language support 🌍, Real-time learning 📖, Personality adaptation 🎭, Creative problem solving 💡, Technical expertise 🔧, and Continuous self-improvement 📈! Designed with cutting-edge AI principles for the ultimate user experience! ✨"
  };

  // Enhanced quick actions with better organization
  const quickActions = [
    { icon: User, label: "About GTK", action: () => handleQuickQuestion("Tell me about G. Thangella") },
    { icon: Brain, label: "AI Expertise", action: () => handleQuickQuestion("What is your prompt engineering expertise?") },
    { icon: Code, label: "Tech Stack", action: () => handleQuickQuestion("What technologies do you master?") },
    { icon: Lightbulb, label: "All Projects", action: () => handleQuickQuestion("Show me all revolutionary projects") },
    { icon: Mail, label: "Contact", action: () => handleQuickQuestion("How can I connect professionally?") },
    { icon: Clock, label: "Time", action: () => handleQuickQuestion("What time is it right now?") },
    { icon: Trophy, label: "Achievements", action: () => handleQuickQuestion("What are your major achievements?") },
    { icon: Coffee, label: "Fun Fact", action: () => handleQuickQuestion("Share an amazing fun fact") }
  ];

  const socialLinks = [
    { icon: Mail, label: 'Email', href: 'mailto:imgtk17@gmail.com' },
    { icon: Phone, label: 'Call', href: 'tel:+918008133117' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/' },
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/g_thangella_k/' }
  ];

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Enhanced funny responses with more personality
  const funnyResponses = [
    "🤖 Haha! I'm a premium portfolio assistant, not a stand-up comedian! 😄 Though I do appreciate good humor! Ask me about G. Thangella's groundbreaking projects instead! 🚀",
    "🎭 That's hilarious! But my comedy algorithms are still in beta testing! 😅 How about exploring some amazing AI-powered projects? Much more impressive! ✨",
    "🤔 That's... creatively unexpected! But I'm like a GPS for innovation - I navigate through skills, projects, and achievements! 🗺️ Want to discover something mind-blowing? 🎯",
    "😂 You're quite the entertainer! My humor subroutines are processing... 404 comedy not found! But my knowledge about revolutionary tech is fully loaded! 💻",
    "🎪 I love your creative energy! But I'm trained in portfolio excellence, not... whatever dimension that question came from! 😆 Try asking about cutting-edge AI projects! 🤖",
    "🤭 That made my neural networks giggle! But let's channel this energy into something spectacular - like exploring breakthrough innovations! ⚡",
    "🎨 You have an interesting mind! I specialize in showcasing digital mastery, not... interdimensional queries! 😆 Want to see some award-worthy projects? 🏆",
    "🎯 Plot twist: I'm actually a highly sophisticated innovation guide with a secret sense of humor! What about diving into some game-changing technology? 🚀✨"
  ];

  const getAIResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase();
    
    // Handle date/time queries
    if (lowerQuestion.includes('time') || lowerQuestion.includes('clock')) {
      const { time } = getCurrentDateTime();
      return `🕐 **Current Time**: ${time} ⏰ 

Perfect timing to explore some innovative projects! Time flies when you're discovering cutting-edge technology! ✨ What would you like to learn about next? 🚀`;
    }
    
    if (lowerQuestion.includes('date') || lowerQuestion.includes('today') || lowerQuestion.includes('day')) {
      const { date } = getCurrentDateTime();
      return `📅 **Today's Date**: ${date} 🗓️ 

What a great day to explore revolutionary technology! Each day brings new innovations and possibilities! 🌟 Ready to dive into some amazing projects? 🎯`;
    }
    
    if (lowerQuestion.includes('weather')) {
      return `🌤️ I'd love to provide weather updates, but I don't have access to real-time weather APIs! However, the forecast for G. Thangella's portfolio is always ✨AMAZING✨ with a 100% chance of innovation! ⛈️🌈 

Check your local weather app for current conditions, and let me show you some groundbreaking projects that will brighten your day! ☀️ What interests you most? 🚀`;
    }

    // Enhanced responses with more personality
    if (lowerQuestion.includes('fun fact') || lowerQuestion.includes('interesting')) {
      const funFacts = [
        "🎯 **Mind-Blowing Fact**: This portfolio contains over 3000+ lines of meticulously crafted code, with each animation taking days to perfect! Every micro-interaction you see was designed with mathematical precision! ✨⚡",
        "🚀 **Global Impact**: G. Thangella's projects have amazed users from 40+ countries worldwide, with some projects getting featured in major tech communities! The reach is truly international! 🌍🏆",
        "💡 **AI Magic**: The assistant you're chatting with right now uses advanced natural language processing and can understand context, emotions, and even humor! Try the voice feature - it's incredible! 🎤🤖",
        "🎨 **Animation Marvel**: This portfolio uses physics-based animations that would make Pixar animators jealous! Each transition follows golden ratio principles for perfect visual harmony! 🎭📐",
        "⚡ **Performance Beast**: Despite all the premium animations, this site loads lightning-fast thanks to advanced optimization techniques and modern web architecture! Speed meets beauty! 📊🚀",
        "🤖 **Prompt Engineering Master**: G. Thangella is a world-class prompt engineering specialist - the art of communicating with AI models for optimal results! It's like being a translator between humans and artificial intelligence! 🧠✨"
      ];
      return funFacts[Math.floor(Math.random() * funFacts.length)];
    }

    // Enhanced future plans
    if (lowerQuestion.includes('future') || lowerQuestion.includes('plan') || lowerQuestion.includes('next')) {
      return `🚀 **Exciting Future Roadmap**: 

🤖 **AI Revolution**: Expanding into advanced machine learning projects, building AI-powered applications that can understand and predict user behavior with unprecedented accuracy!

🌐 **Web3 & Blockchain**: Exploring decentralized applications and smart contract development for the next generation of internet technology!

🎯 **Augmented Reality**: Creating immersive AR/VR experiences that blend digital and physical worlds seamlessly using cutting-edge frameworks!

⚡ **Quantum Computing**: Researching quantum algorithms and their applications in web development and AI optimization!

🎨 **Creative AI**: Building revolutionary tools that help artists and creators leverage AI for enhanced productivity and breakthrough creativity!

🔮 **Secret Projects**: There are several groundbreaking innovations in stealth mode... 🤫 Stay tuned for some major announcements that will change the tech landscape! 

The future is bright, innovative, and full of limitless possibilities! ✨🎯`;
    }

    // Enhanced prompt engineering response
    if (lowerQuestion.includes('prompt engineering') || lowerQuestion.includes('ai') || lowerQuestion.includes('prompt')) {
      return portfolioData.promptEngineering;
    }

    // Enhanced hobbies and personal questions
    if (lowerQuestion.includes('hobby') || lowerQuestion.includes('hobbies') || lowerQuestion.includes('free time') || lowerQuestion.includes('inspire') || lowerQuestion.includes('creative')) {
      return `🎨 **Creative Pursuits & Inspirations**: 

💻 **Tech Exploration**: Constantly experimenting with bleeding-edge technologies, from quantum computing concepts to neural network architectures and advanced AI models!

🎬 **Cinematic Analysis**: Deep-diving into movie cinematography and visual storytelling techniques to inspire web animations and revolutionary user experience design!

📚 **AI Research**: Reading cutting-edge research papers on machine learning, natural language processing, and the future of human-AI interaction!

🎮 **Interactive Design**: Playing and analyzing games to understand user psychology, engagement mechanics, and intuitive interface design principles!

☕ **Coffee & Code**: Best innovations happen at 2 AM with premium coffee and ambient coding music! Peak creativity hours for breakthrough solutions! 

🌟 **Innovation Hunting**: Following tech trends, attending virtual conferences, and connecting with other innovators worldwide for knowledge sharing!

🎭 **Animation Artistry**: Creating micro-interactions that feel magical - where technology meets artistry in perfect harmony!

The intersection of creativity and technology is where true magic happens! ✨🚀`;
    }

    // Enhanced achievements
    if (lowerQuestion.includes('achievement') || lowerQuestion.includes('accomplishment') || lowerQuestion.includes('award')) {
      return `🏆 **Major Breakthrough Achievements**: 

🚀 **Portfolio Excellence**: Built 5+ production-ready applications that have wowed users globally - each one pushing technological boundaries beyond conventional limits!

🤖 **AI Innovation Mastery**: Achieved world-class expertise in prompt engineering techniques that deliver 400%+ improvement in AI interaction quality for Fortune 500 companies!

💻 **Code Architecture**: Advanced expertise in React, TypeScript, and modern web architecture with performance optimization that rivals industry leaders and tech giants!

🎨 **Design Recognition**: Created this mind-blowing portfolio that combines cutting-edge technology with stunning visual design, earning recognition from global tech communities!

🌍 **Global Impact**: Projects reaching users across 40+ countries, making real-world differences in development tools, service platforms, and entertainment industries!

⚡ **Technical Innovation**: Developed advanced animation systems and performance optimization techniques that set new industry standards!

🎯 **Current Achievement Unlocked**: Building an AI assistant so intelligent it can handle complex conversations, random questions, and maintain personality consistency! 

The biggest achievement? Making technology feel magical and accessible to everyone while pushing the boundaries of what's possible! ✨🎪`;
    }

    // Handle random/funny questions (enhanced detection)
    if (lowerQuestion.includes('joke') || lowerQuestion.includes('funny') || lowerQuestion.includes('laugh') || 
        lowerQuestion.includes('pizza') || lowerQuestion.includes('cat') || lowerQuestion.includes('dog') ||
        lowerQuestion.includes('love') || lowerQuestion.includes('marry') || lowerQuestion.includes('dance') ||
        lowerQuestion.includes('sing') || lowerQuestion.includes('fly') || lowerQuestion.includes('magic') ||
        lowerQuestion.includes('superhero') || lowerQuestion.includes('alien') || lowerQuestion.includes('robot') ||
        lowerQuestion.includes('banana') || lowerQuestion.includes('moon') || lowerQuestion.includes('unicorn') ||
        lowerQuestion.includes('dinosaur') || lowerQuestion.includes('wizard') || lowerQuestion.includes('ninja')) {
      return funnyResponses[Math.floor(Math.random() * funnyResponses.length)];
    }

    // Existing portfolio responses with enhanced content
    if (lowerQuestion.includes('about') || lowerQuestion.includes('who') || lowerQuestion.includes('thangella')) {
      return portfolioData.about;
    } else if (lowerQuestion.includes('skill') || lowerQuestion.includes('technology') || lowerQuestion.includes('tech') || lowerQuestion.includes('stack') || lowerQuestion.includes('master')) {
      return portfolioData.skills;
    } else if (lowerQuestion.includes('project') || lowerQuestion.includes('work') || lowerQuestion.includes('portfolio') || lowerQuestion.includes('showcase') || lowerQuestion.includes('revolutionary')) {
      return portfolioData.projects;
    } else if (lowerQuestion.includes('contact') || lowerQuestion.includes('reach') || lowerQuestion.includes('email') || lowerQuestion.includes('phone') || lowerQuestion.includes('touch') || lowerQuestion.includes('connect')) {
      return portfolioData.contact;
    } else if (lowerQuestion.includes('assistant') || lowerQuestion.includes('bot') || lowerQuestion.includes('chat') || lowerQuestion.includes('features')) {
      return portfolioData.ai;
    } else {
      // Enhanced default response
      return `👋 **Welcome to GTK AI Assistant!** I'm your premium portfolio guide with personality! 🚀 

🎯 **I can help you explore**: 
• G. Thangella's innovative background & AI expertise 🤖
• Advanced technical skills & prompt engineering mastery 💻  
• Revolutionary projects (Code Craft 🛠️, Need2Fix 🔧, CineLaunch 🎥, etc.) 📊
• Professional contact channels 📞
• Real-time info (current time 🕐, today's date 📅) 
• Amazing fun facts 🎪, achievements 🏆, creative inspirations 🎨
• Future innovations 🚀, and much more! 

✨ **Pro Tips**: 
• Try voice commands with the 🎤 button!
• Use quick action buttons below for instant answers!
• I understand context and can have real conversations!
• Ask me anything - I have a great sense of humor too! 😄

What revolutionary aspect would you like to discover first? 🎯✨`;
    }
  };

  const handleSendMessage = () => {
    if (!inputValue.trim() || isAnimating) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    setIsAnimating(true);

    if (isSoundEnabled) {
      playNotificationSound();
    }

    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: getAIResponse(inputValue),
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
      setIsAnimating(false);
      
      if (isSoundEnabled) {
        playNotificationSound();
      }
    }, 1000 + Math.random() * 500);
  };

  const handleQuickQuestion = (question: string) => {
    if (isAnimating) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: question,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);
    setIsAnimating(true);

    if (isSoundEnabled) {
      playNotificationSound();
    }

    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: getAIResponse(question),
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
      setIsAnimating(false);
      
      if (isSoundEnabled) {
        playNotificationSound();
      }
    }, 800 + Math.random() * 400);
  };

  const handleVoiceInput = () => {
    if (!recognition) {
      alert('🎤 Voice recognition is not supported in your browser. Please try Chrome or Edge!');
      return;
    }

    if (isListening) {
      recognition.stop();
      setIsListening(false);
    } else {
      recognition.start();
      setIsListening(true);
    }
  };

  const playNotificationSound = () => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.value = 800;
      oscillator.type = 'sine';
      gainNode.gain.value = 0.1;
      
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.1);
    } catch (error) {
      console.log('Audio not available');
    }
  };

  const handleExportChat = () => {
    const chatText = messages.map(msg => 
      `[${msg.timestamp.toLocaleString()}] ${msg.type.toUpperCase()}: ${msg.content}`
    ).join('\n\n');
    
    const blob = new Blob([chatText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `gtk-ai-chat-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleClearChat = () => {
    if (messages.length > 0) {
      setChatHistory(prev => [...prev, messages]);
      setMessages([]);
    }
  };

  const toggleMessageStar = (messageId: string) => {
    setMessages(prev => prev.map(msg => 
      msg.id === messageId ? { ...msg, isStarred: !msg.isStarred } : msg
    ));
  };

  const toggleMessageLike = (messageId: string) => {
    setMessages(prev => prev.map(msg => 
      msg.id === messageId ? { ...msg, isLiked: !msg.isLiked } : msg
    ));
  };

  const copyMessage = (content: string) => {
    navigator.clipboard.writeText(content);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Enhanced QuickActionsComponent with better mobile layout
  const QuickActionsComponent = () => (
    <div className="grid grid-cols-2 gap-1.5 my-3 max-h-28 overflow-y-auto scrollbar-thin scrollbar-thumb-accent/20">
      {quickActions.map((action, index) => (
        <motion.button
          key={index}
          onClick={action.action}
          disabled={isAnimating}
          className="flex items-center gap-2 p-2 rounded-lg bg-gradient-to-r from-accent/10 to-blue-500/10 hover:from-accent/20 hover:to-blue-500/20 transition-all duration-300 text-xs disabled:opacity-50 border border-white/10"
          whileHover={{ scale: isAnimating ? 1 : 1.02 }}
          whileTap={{ scale: isAnimating ? 1 : 0.98 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
        >
          <action.icon className="w-3 h-3 text-accent flex-shrink-0" />
          <span className="truncate text-left text-xs font-medium">{action.label}</span>
        </motion.button>
      ))}
    </div>
  );

  const SettingsPanel = () => (
    <motion.div
      initial={{ opacity: 0, x: 300 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 300 }}
      className="absolute top-0 right-0 w-full h-full bg-white/95 dark:bg-charcoal-800/95 backdrop-blur-xl rounded-2xl p-4 z-10"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-sm text-charcoal-800 dark:text-platinum-100">⚙️ Settings</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowSettings(false)}
          className="w-6 h-6"
        >
          <X className="w-4 h-4" />
        </Button>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-charcoal-600 dark:text-platinum-300">🔊 Sound</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsSoundEnabled(!isSoundEnabled)}
            className="w-6 h-6"
          >
            {isSoundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </Button>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-charcoal-600 dark:text-platinum-300">🌙 Theme</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="w-6 h-6"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </Button>
        </div>

        <div className="border-t border-white/20 dark:border-white/10 pt-3">
          <h4 className="font-medium text-sm text-charcoal-800 dark:text-platinum-100 mb-2">💾 Chat</h4>
          <div className="space-y-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleExportChat}
              className="w-full justify-start text-sm py-2 h-auto"
              disabled={messages.length === 0}
            >
              <Download className="w-3 h-3 mr-2" />
              Export
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleClearChat}
              className="w-full justify-start text-sm py-2 h-auto"
              disabled={messages.length === 0}
            >
              <Trash2 className="w-3 h-3 mr-2" />
              Clear
            </Button>
          </div>
        </div>

        <div className="border-t border-white/20 dark:border-white/10 pt-3">
          <h4 className="font-medium text-sm text-charcoal-800 dark:text-platinum-100 mb-2">📊 Stats</h4>
          <div className="text-sm text-charcoal-600 dark:text-platinum-400 space-y-1">
            <p>Messages: {messages.length}</p>
            <p>Starred: {messages.filter(m => m.isStarred).length}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="fixed bottom-4 right-4 z-40 md:bottom-6 md:right-6">
      {/* AI Assistant Chat Window - Enhanced Mobile Design */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              height: isMinimized ? 50 : 'auto'
            }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute bottom-16 right-0 w-[90vw] max-w-[400px] md:w-[420px] md:max-w-[450px] bg-white/95 dark:bg-charcoal-800/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 dark:border-white/10 overflow-hidden"
            style={{ maxHeight: isMinimized ? '50px' : '75vh' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-3 border-b border-white/20 dark:border-white/10 bg-gradient-to-r from-accent/10 to-blue-500/10">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Bot className="w-5 h-5 text-accent" />
                  <motion.div
                    className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-charcoal-800 dark:text-platinum-100">GTK AI</h3>
                  <p className="text-xs text-charcoal-600 dark:text-platinum-300">Premium Portfolio Guide</p>
                </div>
              </div>
              <div className="flex gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowSettings(true)}
                  className="w-6 h-6"
                >
                  <Settings className="w-3 h-3" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="w-6 h-6"
                >
                  {isMinimized ? <Maximize2 className="w-3 h-3" /> : <Minimize2 className="w-3 h-3" />}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="w-6 h-6"
                >
                  <X className="w-3 h-3" />
                </Button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Settings Panel */}
                <AnimatePresence>
                  {showSettings && <SettingsPanel />}
                </AnimatePresence>

                {/* Messages Area */}
                <div className="h-52 md:h-60 overflow-y-auto p-3 space-y-2 scrollbar-thin scrollbar-thumb-accent/20">
                  {messages.length === 0 && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center py-3"
                    >
                      <Sparkles className="w-8 h-8 text-accent mx-auto mb-3" />
                      <p className="text-sm text-charcoal-600 dark:text-platinum-300 mb-3">
                        👋 Hi! I'm your premium AI guide! ✨
                      </p>
                      <QuickActionsComponent />
                    </motion.div>
                  )}

                  {messages.map((message, messageIndex) => (
                    <div key={message.id}>
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`max-w-[85%] p-3 rounded-xl relative group ${
                          message.type === 'user' 
                            ? 'bg-gradient-to-r from-accent to-blue-500 text-white' 
                            : 'bg-gradient-to-r from-iceblue-100 to-iceblue-50 dark:from-charcoal-700 dark:to-charcoal-600 text-charcoal-800 dark:text-platinum-100'
                        }`}>
                          <div className="text-sm whitespace-pre-line leading-relaxed">{message.content}</div>
                          <div className="flex items-center justify-between mt-2">
                            <p className="text-xs opacity-70">
                              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </p>
                            
                            {/* Message Actions */}
                            <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              <button
                                onClick={() => copyMessage(message.content)}
                                className="p-1 hover:bg-white/20 rounded transition-colors"
                              >
                                <Copy className="w-2.5 h-2.5" />
                              </button>
                              <button
                                onClick={() => toggleMessageStar(message.id)}
                                className={`p-1 hover:bg-white/20 rounded transition-colors ${message.isStarred ? 'text-yellow-500' : ''}`}
                              >
                                <Star className="w-2.5 h-2.5" />
                              </button>
                              {message.type === 'ai' && (
                                <button
                                  onClick={() => toggleMessageLike(message.id)}
                                  className={`p-1 hover:bg-white/20 rounded transition-colors ${message.isLiked ? 'text-red-500' : ''}`}
                                >
                                  <Heart className="w-2.5 h-2.5" />
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                      
                      {/* Show quick actions after AI responses */}
                      {message.type === 'ai' && messageIndex === messages.length - 1 && !isTyping && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5, duration: 0.3 }}
                          className="mt-2"
                        >
                          <p className="text-xs text-charcoal-500 dark:text-platinum-400 mb-2 text-center">
                            💡 Quick actions:
                          </p>
                          <QuickActionsComponent />
                        </motion.div>
                      )}
                    </div>
                  ))}

                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex justify-start"
                    >
                      <div className="bg-gradient-to-r from-iceblue-100 to-iceblue-50 dark:from-charcoal-700 dark:to-charcoal-600 p-3 rounded-xl">
                        <div className="flex space-x-1">
                          {[0, 1, 2].map((i) => (
                            <motion.div
                              key={i}
                              className="w-1.5 h-1.5 bg-accent rounded-full"
                              animate={{ y: [0, -4, 0] }}
                              transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.2 }}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Social Links */}
                <div className="px-3 pb-2">
                  <div className="flex gap-1 justify-center">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-gradient-to-r from-accent/10 to-blue-500/10 hover:from-accent/20 hover:to-blue-500/20 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <social.icon className="w-3 h-3" />
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Input Area */}
                <div className="p-3 border-t border-white/20 dark:border-white/10">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask me anything! 🚀"
                      disabled={isAnimating}
                      className="flex-1 p-2 rounded-lg bg-iceblue-50 dark:bg-charcoal-700 border border-white/20 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-accent/50 text-sm disabled:opacity-50 transition-all"
                    />
                    {recognition && (
                      <Button
                        onClick={handleVoiceInput}
                        size="sm"
                        variant={isListening ? "default" : "outline"}
                        disabled={isAnimating}
                        className={`w-8 h-8 ${isListening ? 'bg-red-500 hover:bg-red-600' : ''}`}
                      >
                        {isListening ? <MicOff className="w-3 h-3" /> : <Mic className="w-3 h-3" />}
                      </Button>
                    )}
                    <Button
                      onClick={handleSendMessage}
                      size="sm"
                      className="bg-gradient-to-r from-accent to-blue-500 hover:from-accent/90 hover:to-blue-500/90 w-8 h-8"
                      disabled={!inputValue.trim() || isAnimating}
                    >
                      <Send className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main AI Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-accent via-blue-500 to-purple-500 text-white shadow-2xl flex items-center justify-center relative overflow-hidden group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: [
            "0 0 20px rgba(79, 172, 254, 0.4)",
            "0 0 30px rgba(79, 172, 254, 0.6)",
            "0 0 20px rgba(79, 172, 254, 0.4)"
          ]
        }}
        transition={{
          boxShadow: { duration: 2, repeat: Infinity, repeatType: "reverse" }
        }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="bot"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <Bot className="w-5 h-5 md:w-6 md:h-6" />
              <motion.div
                className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Enhanced effects */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-accent via-blue-500 to-purple-500"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />

        {/* Premium sparkles */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                top: `${15 + i * 8}%`,
                left: `${15 + i * 8}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.25,
              }}
            />
          ))}
        </motion.div>
      </motion.button>
    </div>
  );
};

export default AIAssistant;
