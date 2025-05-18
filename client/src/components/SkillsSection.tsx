import { motion } from "framer-motion";
import { 
  FaLaptop, 
  FaServer, 
  FaUserCog, 
  FaTools, 
  FaHeadset, 
  FaCode 
} from "react-icons/fa";
import { useTheme } from "@/components/ThemeProvider";

const SkillsSection = () => {
  const { theme } = useTheme();
  
  const skills = [
    {
      category: "Operating Systems",
      icon: <FaLaptop className="text-2xl text-primary mr-3" />,
      items: ["macOS", "Windows", "Linux", "iOS"],
      color: "primary"
    },
    {
      category: "DevOps",
      icon: <FaServer className="text-2xl text-secondary mr-3" />,
      items: ["SSH", "AWS", "Azure", "Docker"],
      color: "secondary"
    },
    {
      category: "Admin Tools",
      icon: <FaUserCog className="text-2xl text-primary mr-3" />,
      items: ["Google Admin", "Mosyle", "Active Directory", "MDM Solutions"],
      color: "primary"
    },
    {
      category: "Applications",
      icon: <FaTools className="text-2xl text-secondary mr-3" />,
      items: ["MS Office", "Google Workspace", "Meraki", "VoIP Systems"],
      color: "secondary"
    },
    {
      category: "ITSM & Ticketing",
      icon: <FaHeadset className="text-2xl text-primary mr-3" />,
      items: ["SharePoint", "Documentation Workflows", "Asset Management", "Lifecycle Management"],
      color: "primary"
    },
    {
      category: "Programming Languages",
      icon: <FaCode className="text-2xl text-secondary mr-3" />,
      items: ["JavaScript", "Python", "HTML/CSS", "SQL"],
      color: "secondary"
    }
  ];

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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 section-enter">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              className="bg-card text-card-foreground p-6 rounded-xl shadow-lg skill-card hoverable-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }} /* Subtle scale animation on hover */
            >
              <div className="flex items-center mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center">
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
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
