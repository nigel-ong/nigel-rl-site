import { motion } from "framer-motion";
import headshot from "@/assets/headshot.jpg"; // ✅ Correct image import

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6 }
  })
};

const HeroSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 section-enter"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={0}
            >
              Hi, I'm <span className="text-primary">Nigel Ong</span>
            </motion.h1>
            <motion.h2 
              className="text-xl md:text-2xl mb-8 text-muted-foreground section-enter"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={1}
            >
              IT Support Technician & Developer
            </motion.h2>
            <motion.div 
              className="prose prose-lg dark:prose-invert max-w-none section-enter"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={2}
            >
              <p className="mb-4">
                Through my experience and training at BCIT in the Computer Information Technology program, I've developed a problem-solving mindset rooted in structure and speed.
              </p>
              <p className="mb-4">
                I thrive in environments where I can keep learning, contribute meaningfully, and work alongside people who care about doing things right. I've supported environments with 600+ users, managed everything from user management to delivering tech events and live streams.
              </p>
              <p>
                Whether I'm resolving a technical issue or helping someone feel more confident using their tools, my focus is always on providing thoughtful, reliable support — the kind of support I'd want to receive. I'm looking to grow with a team that values curiosity, communication, and the power of well-run systems.
              </p>
            </motion.div>
            <motion.div 
              className="mt-8 flex flex-wrap gap-4 section-enter"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={3}
            >
              <button
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-block px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Get in Touch
              </button>
              <button
                onClick={() => {
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-block px-6 py-3 border border-current font-medium rounded-lg hover:bg-primary hover:bg-opacity-10 transition-colors"
              >
                View Projects
              </button>
            </motion.div>
          </div>
          <motion.div 
            className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center section-enter"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={0}
          >
            {/* Profile photo with hover animation - adjust the scale value, transitionDuration, or shadow intensity as needed */}
            <motion.div 
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-md overflow-hidden border-2 border-primary/60 shadow-lg"
              whileHover={{ 
                scale: 1.03, // Adjust scale factor here (1.03 = 3% larger)
                boxShadow: "0 0 20px rgba(183, 211, 233, 0.5)" // Adjust glow color and intensity here
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 15 
                // Adjust stiffness/damping for different animation feel
                // Higher stiffness = faster, Higher damping = less bouncy
              }}
            >
              <img 
                src={headshot}
                alt="Nigel Ong" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <motion.div 
                className="absolute inset-0 rounded-md bg-gradient-to-tr from-primary/20 to-secondary/20"
                whileHover={{ opacity: 0.7 }} // Increase gradient opacity on hover
                transition={{ duration: 0.3 }}
              ></motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
