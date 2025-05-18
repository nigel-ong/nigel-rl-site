import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaLaptop, 
  FaServer, 
  FaUserCog, 
  FaTools, 
  FaHeadset, 
  FaCode,
  FaInfoCircle 
} from "react-icons/fa";
import { useTheme } from "@/components/ThemeProvider";

/**
 * SkillsSection Component with Interactive Features
 * 
 * This component displays technical skills with:
 * - Animated entrance when scrolled into view
 * - Interactive tooltips showing proficiency/details on hover
 * - Shine effect and hover animations (defined in CSS)
 * 
 * How to customize:
 * - Add new skills by adding objects to the skills array below
 * - Each skill can have:
 *   - category: Name of the skill category
 *   - icon: React icon component to display
 *   - items: Array of skills with name and optional details
 *   - color: "primary" or "secondary" for styling
 */
const SkillsSection = () => {
  const { theme } = useTheme();
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  
  // Enhanced skill data with tooltips, proficiency, and detailed information
  const skills = [
    {
      category: "Operating Systems",
      icon: <FaLaptop className="text-2xl text-primary mr-3" />,
      items: [
        { name: "macOS", details: "Daily driver for development, 5+ years experience" },
        { name: "Windows", details: "Administration, troubleshooting, and support for 100+ users" },
        { name: "Linux", details: "Server administration and command line proficiency" },
        { name: "iOS", details: "Mobile device management and app deployment" }
      ],
      color: "primary"
    },
    {
      category: "DevOps",
      icon: <FaServer className="text-2xl text-secondary mr-3" />,
      items: [
        { name: "SSH", details: "Secure remote administration" },
        { name: "AWS", details: "EC2, S3, Lambda, and basic cloud architecture" },
        { name: "Azure", details: "Microsoft 365 integration and identity management" },
        { name: "Docker", details: "Container deployment and orchestration" }
      ],
      color: "secondary"
    },
    {
      category: "Admin Tools",
      icon: <FaUserCog className="text-2xl text-primary mr-3" />,
      items: [
        { name: "Google Admin", details: "Workspace user management and security" },
        { name: "Mosyle", details: "MDM for Apple devices, policy and profile management" },
        { name: "Active Directory", details: "User and group management, GPO" },
        { name: "MDM Solutions", details: "Mobile device enrollment and security" }
      ],
      color: "primary"
    },
    {
      category: "Applications",
      icon: <FaTools className="text-2xl text-secondary mr-3" />,
      items: [
        { name: "MS Office", details: "Advanced Excel, Word, PowerPoint, and Teams" },
        { name: "Google Workspace", details: "Admin, training, and power user" },
        { name: "Meraki", details: "Network configuration and monitoring" },
        { name: "VoIP Systems", details: "3CX setup and management" },
        { name: "test", details: "3CX setup and management" }
      ],
      color: "secondary"
    },
    {
      category: "ITSM & Ticketing",
      icon: <FaHeadset className="text-2xl text-primary mr-3" />,
      items: [
        { name: "SharePoint", details: "Document management and workspace setup" },
        { name: "Documentation", details: "Process creation and knowledge base management" },
        { name: "Asset Management", details: "Inventory tracking and lifecycle" },
        { name: "Lifecycle Management", details: "Hardware refresh planning and execution" }
      ],
      color: "primary"
    },
    {
      category: "Programming Languages",
      icon: <FaCode className="text-2xl text-secondary mr-3" />,
      items: [
        { name: "JavaScript", details: "React, Node.js, and modern ES6+ features" },
        { name: "Python", details: "Automation, scripting, and data processing" },
        { name: "HTML/CSS", details: "Responsive design and modern frameworks" },
        { name: "SQL", details: "Database design, queries, and optimization" }
      ],
      color: "secondary"
    }
  ];

  // Animation variants for staggered children animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-16 text-center section-enter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Technical <span className="text-primary">Skills</span>
        </motion.h2>
        
        {/* Grid of skill cards with staggered animations */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 section-enter"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skills.map((skill, index) => (
            /* 
             * Skill card with multiple interactive features:
             * - Shine effect (CSS-based animation on hover)
             * - Scale/shadow hover effect
             * - Staggered animation when scrolled into view
             */
            <motion.div 
              key={index}
              className="bg-card text-card-foreground p-6 rounded-xl shadow-lg skill-card hoverable-card"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, itemIndex) => {
                  const tooltipId = `${skill.category}-${itemIndex}`;
                  return (
                    <li 
                      key={itemIndex} 
                      className="flex items-center relative"
                      onMouseEnter={() => setActiveTooltip(tooltipId)}
                      onMouseLeave={() => setActiveTooltip(null)}
                    >
                      <div className="flex items-center w-full">
                        <svg 
                          className={`mr-2 h-5 w-5 text-${skill.color}`} 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                          />
                        </svg>
                        <span>{item.name}</span>
                        {item.details && (
                          <FaInfoCircle 
                            className="ml-2 text-muted-foreground text-xs cursor-help" 
                            aria-label={`Details about ${item.name}`}
                          />
                        )}
                      </div>
                      
                      {/* Tooltip with skill details */}
                      {item.details && activeTooltip === tooltipId && (
                        <motion.div 
                          className="absolute z-50 left-full ml-4 -top-2 w-48 p-2 bg-card rounded-md border shadow-md text-xs"
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.details}
                        </motion.div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;