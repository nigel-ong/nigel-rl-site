import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface Organization {
  name: string;
  url: string;
  favicon?: string;
}

const JourneySection = () => {
  const [bcitFavicon, setBcitFavicon] = useState<string | null>(null);
  const [stratfordFavicon, setStratfordFavicon] = useState<string | null>(null);
  
  useEffect(() => {
    // Attempt to fetch favicons
    const fetchFavicon = async (url: string, setter: (url: string | null) => void) => {
      try {
        // Use Google's favicon service as a fallback
        const faviconUrl = `https://www.google.com/s2/favicons?domain=${url}&sz=32`;
        setter(faviconUrl);
      } catch (error) {
        console.error("Error fetching favicon:", error);
        setter(null);
      }
    };
    
    fetchFavicon("https://www.bcit.ca", setBcitFavicon);
    fetchFavicon("https://www.stratfordhall.ca", setStratfordFavicon);
  }, []);

  return (
    <section id="journey" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-16 text-center section-enter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Professional <span className="text-primary">Journey</span>
        </motion.h2>

        <div className="timeline-container pb-12 section-enter">
          {/* Work Experience */}
          <motion.div
            className="timeline-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="timeline-dot"></div>
            <div className="md:grid md:grid-cols-[200px_1fr] gap-8 md:pl-16">
              <div className="mb-4 md:mb-0 flex flex-col">
                <h3 className="text-xl font-semibold">IT Support Technician</h3>
                <div className="flex items-center gap-2 mt-1">
                  {stratfordFavicon && (
                    <img 
                      src={stratfordFavicon} 
                      alt="Stratford Hall logo" 
                      className="w-4 h-4 object-contain"
                    />
                  )}
                  <a 
                    href="https://www.stratfordhall.ca/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary font-medium hover:underline"
                  >
                    Stratford Hall
                  </a>
                </div>
                <p className="text-sm text-muted-foreground mt-1">JAN 2024 - AUG 2024</p>
              </div>
              {/* Journey content card with hover animation and dark mode glow effect */}
              <motion.div 
                className="p-6 bg-primary/5 rounded-lg hoverable-content"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <ul className="space-y-2 list-disc ml-5 text-sm md:text-base">
                  <li>Delivered Tier 1 technical support to 120+ staff and students across workstations, laptops, printers, mobile devices, and AV systems.</li>
                  <li>Troubleshot and resolved 90% of software, network, and hardware issues on first contact for local and remote users.</li>
                  <li>Resolved basic connectivity and VPN access issues for staff, including Wi-Fi troubleshooting and remote access setup across Windows/macOS devices.</li>
                  <li>Performed imaging, deployment, and upgrading of Windows and macOS devices, including VoIP phones, printers, and iPads.</li>
                  <li>Conducted preventative maintenance and routine diagnostics on shared classroom tech and workstation setups.</li>
                  <li>Administered onboarding/offboarding processes using Google Workspace, Microsoft 365, MDM tools (Mosyle) and VoIP 3CX Phone System.</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            className="timeline-item mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="timeline-dot"></div>
            <div className="md:grid md:grid-cols-[200px_1fr] gap-8 md:pl-16">
              <div className="mb-4 md:mb-0 flex flex-col">
                <h3 className="text-xl font-semibold">Computer Information Technology Diploma</h3>
                <div className="flex items-center gap-2 mt-1">
                  {bcitFavicon && (
                    <img 
                      src={bcitFavicon} 
                      alt="BCIT logo" 
                      className="w-4 h-4 object-contain"
                    />
                  )}
                  <a 
                    href="https://www.bcit.ca/programs/computer-information-technology-diploma-full-time-5540dipma/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary font-medium hover:underline"
                  >
                    British Columbia Institute of Technology
                  </a>
                </div>
                <p className="text-sm text-muted-foreground mt-1">2022 - 2024</p>
                <p className="font-medium mt-1">GPA: 90%</p>
              </div>
              {/* Journey content card with hover animation and dark mode glow effect */}
              <motion.div 
                className="p-6 bg-primary/5 rounded-lg hoverable-content"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="grid md:grid-cols-2 gap-4 items-start">
                  <img
                    src="https://www.bcit.ca/wp-content/uploads/2020/07/BCIT-DT-18-scaled.jpg"
                    alt="BCIT Campus"
                    className="w-full h-auto rounded-lg shadow-md"
                    loading="lazy"
                  />
                  <div>
                    <p>Completed comprehensive training in system administration, networking, security, and software development with a focus on practical applications.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;