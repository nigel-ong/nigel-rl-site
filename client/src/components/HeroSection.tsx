import { motion } from "framer-motion";

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
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden border-4 border-primary">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800" 
                alt="Nigel Ong" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-primary to-secondary opacity-20"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
