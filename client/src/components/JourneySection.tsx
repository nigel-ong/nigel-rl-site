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
  const [nucleusFavicon, setNucleusFavicon] = useState<string | null>(null);
  const [equinoxFavicon, setEquinoxFavicon] = useState<string | null>(null);
  const [cactusFavicon, setCactusFavicon] = useState<string | null>(null);
  const [tritonFavicon, setTritonFavicon] = useState<string | null>(null);
  
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
    fetchFavicon("https://yournucleus.ca", setNucleusFavicon);
    fetchFavicon("https://www.equinoxgold.com/", setEquinoxFavicon);
    fetchFavicon("https://www.cactusclubcafe.com/", setCactusFavicon);
    fetchFavicon("https://www.triton-env.com/", setTritonFavicon);
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
            className="timeline-item mt-16 first:mt-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="timeline-dot"></div>
            <div className="md:grid md:grid-cols-[200px_1fr] gap-8 md:pl-16">
              <div className="mb-4 md:mb-0 flex flex-col">
                <h3 className="text-xl font-semibold">IT Support Specialist</h3>
                <div className="flex items-center gap-2 mt-1">
                  {tritonFavicon && (
                    <img 
                      src={tritonFavicon} 
                      alt="Triton logo" 
                      className="w-4 h-4 object-contain"
                    />
                  )}
                  <a 
                    href="https://www.triton-env.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary font-medium hover:underline"
                  >
                    Triton Environmental Consultants
                  </a>
                </div>
                <p className="text-sm text-muted-foreground mt-1">MAR 2026 - Present</p>
              </div>
              {/* Journey content card with hover animation and dark mode glow effect */}
              <motion.div 
                className="p-6 bg-primary/5 rounded-lg hoverable-content"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <ul className="space-y-2 list-disc ml-5 text-sm md:text-base">
                  <li>Provided remote technical support through Pulseway, resolving user issues efficiently</li>
                  <li>Managed and prioritized ticket queue using Freshdesk to meet SLA targets</li>
                  <li>Facilitated user onboarding and account provisioning via JumpCloud Admin</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>


          <motion.div
            className="timeline-item mt-16 first:mt-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="timeline-dot"></div>
            <div className="md:grid md:grid-cols-[200px_1fr] gap-8 md:pl-16">
              <div className="mb-4 md:mb-0 flex flex-col">
                <h3 className="text-xl font-semibold">Support Specialist</h3>
                <div className="flex items-center gap-2 mt-1">
                  {stratfordFavicon && (
                    <img 
                      src={nucleusFavicon} 
                      alt="Nucleus logo" 
                      className="w-4 h-4 object-contain"
                    />
                  )}
                  <a 
                    href="https://yournucleus.ca/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary font-medium hover:underline"
                  >
                    Nucleus Networks
                  </a>
                </div>
                <p className="text-sm text-muted-foreground mt-1">JUN 2025 - MAR 2026</p>
              </div>
              {/* Journey content card with hover animation and dark mode glow effect */}
              <motion.div 
                className="p-6 bg-primary/5 rounded-lg hoverable-content"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <ul className="space-y-2 list-disc ml-5 text-sm md:text-base">
                  <li>Performed workstation provisioning and lifecycle management, including imaging, configuration, patching of Windows and macOS devices.</li>
                  <li>Executed user onboarding and offboarding across multiple tenants, managing account access, device assignment, and decommissioning.</li>
                  <li>Managed service requests through ConnectWise Manage, prioritizing tickets based on SLA and client impact</li>
                  <li>Provided remote technical support using ScreenConnect, troubleshooting endpoint, application, access, and connectivity issues across clients.</li>
                  <li>Maintained and updated IT Glue documentation, including standard operating procedures, onboarding workflows, and tenant-specific configurations.</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>


          <motion.div
            className="timeline-item mt-16 first:mt-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="timeline-dot"></div>
            <div className="md:grid md:grid-cols-[200px_1fr] gap-8 md:pl-16">
              <div className="mb-4 md:mb-0 flex flex-col">
                <h3 className="text-xl font-semibold">IT Support Specialist</h3>
                <div className="flex items-center gap-2 mt-1">
                  {equinoxFavicon && (
                    <img 
                      src={equinoxFavicon} 
                      alt="Equinox Gold logo" 
                      className="w-4 h-4 object-contain"
                    />
                  )}
                  <a 
                    href="https://www.equinoxgold.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary font-medium hover:underline"
                  >
                    Equinox Gold
                  </a>
                </div>
                <p className="text-sm text-muted-foreground mt-1">via Nucleus Networks</p>
                <p className="text-sm text-muted-foreground mt-1">JUL 2025 - MAR 2026</p>
              </div>
              {/* Journey content card with hover animation and dark mode glow effect */}
              <motion.div 
                className="p-6 bg-primary/5 rounded-lg hoverable-content"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <ul className="space-y-2 list-disc ml-5 text-sm md:text-base">
                  <li>Managed ticket queue using ServiceNow, ensuring timely resolution and escalation of incidents, maintaining SLA compliance and detailed documentation.</li>
                  <li>Supported Microsoft 365 applications including Teams, Outlook, SharePoint, and OneDrive.</li>
                  <li>Provided remote support via ScreenConnect and Datto, diagnosing and resolving hardware, software, and connectivity issues for users.</li>
                  <li>Created and maintained user accounts in Active Directory, ensuring proper group memberships, and compliance with organizational procedures.</li>
                  <li>Administered folder access permissions within shared drives, managing security groups and access control across teams.</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>


          <motion.div
            className="timeline-item mt-16 first:mt-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="timeline-dot"></div>
            <div className="md:grid md:grid-cols-[200px_1fr] gap-8 md:pl-16">
              <div className="mb-4 md:mb-0 flex flex-col">
                <h3 className="text-xl font-semibold">IT Support Specialist</h3>
                <div className="flex items-center gap-2 mt-1">
                  {cactusFavicon && (
                    <img 
                      src={cactusFavicon} 
                      alt="Cactus Club Cafe logo" 
                      className="w-4 h-4 object-contain"
                    />
                  )}
                  <a 
                    href="https://www.cactusclubcafe.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary font-medium hover:underline"
                  >
                    Cactus Club Cafe
                  </a>
                </div>
                <p className="text-sm text-muted-foreground mt-1">via Nucleus Networks</p>
                <p className="text-sm text-muted-foreground mt-1">OCT 2025 - NOV 2025</p>
              </div>
              {/* Journey content card with hover animation and dark mode glow effect */}
              <motion.div 
                className="p-6 bg-primary/5 rounded-lg hoverable-content"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <ul className="space-y-2 list-disc ml-5 text-sm md:text-base">
                  <li>Onboarded new users through Google Admin Console and Active Directory, ensuring accurate account provisioning and access controls.</li>
                  <li>Managed service requests in Zendesk, ensuring timely resolution and detailed ticket documentation.</li>
                  <li>Coordinated with AppleCare Enterprise to arrange hardware replacements and manage warranty service cases.</li>
                  <li>Managed Apple Business Manager tasks, including releasing devices and removing them from organizational management during offboarding.</li>
                  <li>Provided remote technical support using RealVNC, troubleshooting end-user issues across hardware, software, and access requests.</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>

          
          <motion.div
            className="timeline-item mt-16 first:mt-0"
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
            className="timeline-item mt-16 first:mt-0"
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
                {/* to have it 1 large string */}
                {/* <div className="grid gap-4 items-start"> */}

                {/* to have it 2 columns (image + text)  */}
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