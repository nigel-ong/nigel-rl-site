import { motion } from "framer-motion";

const JourneySection = () => {
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
            <div className="md:grid md:grid-cols-[150px_1fr] gap-8">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-semibold">IT Support Technician</h3>
                <p className="text-primary font-medium">Stratford Hall</p>
                <p className="text-sm text-muted-foreground">JAN 2024 - AUG 2024</p>
              </div>
              <div className="p-6 bg-primary/5 rounded-lg">
                <ul className="space-y-2 list-disc ml-5 text-sm md:text-base">
                  <li>Delivered Tier 1 technical support to 120+ staff and students across workstations, laptops, printers, mobile devices, and AV systems.</li>
                  <li>Troubleshot and resolved 90% of software, network, and hardware issues on first contact for local and remote users.</li>
                  <li>Resolved basic connectivity and VPN access issues for staff, including Wi-Fi troubleshooting and remote access setup across Windows/macOS devices.</li>
                  <li>Performed imaging, deployment, and upgrading of Windows and macOS devices, including VoIP phones, printers, and iPads.</li>
                  <li>Conducted preventative maintenance and routine diagnostics on shared classroom tech and workstation setups.</li>
                  <li>Administered onboarding/offboarding processes using Google Workspace, Microsoft 365, MDM tools (Mosyle) and VoIP 3CX Phone System.</li>
                </ul>
              </div>
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
            <div className="md:grid md:grid-cols-[150px_1fr] gap-8">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-semibold">Computer Information Technology Diploma</h3>
                <p className="text-primary font-medium">British Columbia Institute of Technology</p>
                <p className="text-sm text-muted-foreground">2022 - 2024</p>
                <p className="font-medium">GPA: 90%</p>
              </div>
              <div className="p-6 bg-primary/5 rounded-lg">
                <img
                  src="https://pixabay.com/get/gef52cd873e4315992c735f4269b5550b92aa15ffeeb4d6f5a2d5a4212d986772bcc2f348e0b548023e763f18d926fc6c4042b2b57bf3d94654781823019c078b_1280.jpg"
                  alt="BCIT Campus"
                  className="w-full h-auto rounded-lg shadow-md"
                  loading="lazy"
                />
                <p className="mt-4">Completed comprehensive training in system administration, networking, security, and software development with a focus on practical applications.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
