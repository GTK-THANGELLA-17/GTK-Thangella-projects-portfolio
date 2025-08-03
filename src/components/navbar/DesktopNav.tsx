
import React from 'react';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { links } from './NavLinks';

interface DesktopNavProps {
  activeSection: string;
  handleAIAssistantClick: (e: React.MouseEvent) => void;
  handleLinkClick: (href: string) => void;
}

export const DesktopNav: React.FC<DesktopNavProps> = ({
  activeSection,
  handleAIAssistantClick,
  handleLinkClick,
}) => {
  return (
    <div className="hidden lg:block">
      <NavigationMenu>
        <NavigationMenuList className="flex space-x-6">
          {links.map((link) => (
            <NavigationMenuItem key={link.name}>
              <NavigationMenuLink 
                asChild
                className={cn(
                  "text-foreground/80 hover:text-accent transition-colors text-sm font-medium relative group",
                  activeSection === link.href.substring(1) && "text-accent"
                )}
              >
                <motion.a 
                  href={link.href}
                  onClick={link.name === 'AI Assistant' ? handleAIAssistantClick : (e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  {link.icon && <link.icon size={16} />}
                  <span>{link.name}</span>
                  <span className={cn(
                    "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent to-blue-500 transition-all duration-300 rounded-full", 
                    activeSection === link.href.substring(1) ? "w-full" : "w-0 group-hover:w-full"
                  )}></span>
                </motion.a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
