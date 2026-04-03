import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaInfo, FaVideo } from "react-icons/fa";
import { useVideoModal } from "@/hooks/useVideoModal";

const ProjectsSection = () => {
  const { openVideoModal } = useVideoModal();

  const handlePlayVideo = (videoId: string) => {
    openVideoModal(videoId);
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-16 text-center section-enter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Featured <span className="text-primary">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 section-enter">
          {/* Project 1: MemoRizz */}
          {/* Project card with hover effects - Add hoverable-card class for consistent styling */}
          <motion.div
            className="bg-card text-card-foreground rounded-xl shadow-lg overflow-hidden hoverable-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ 
              scale: 1.03, // Adjust scale factor to change hover size
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              // Dark mode glow effect is applied via .dark .hoverable-card:hover in CSS
            }}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=350"
                alt="MemoRizz App Screenshot"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                Web App
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Memo Rizz</h3>
              <p className="text-muted-foreground mb-4">
                A memo-taking web app developed during BCIT in a group of five. Interactive and deployed on Render.com. App instance may take time to spin up. Note: Account data is temporary.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-muted px-3 py-1 rounded-full text-xs">JavaScript</span>
                <span className="bg-muted px-3 py-1 rounded-full text-xs">Node.js</span>
                <span className="bg-muted px-3 py-1 rounded-full text-xs">Express</span>
                <span className="bg-muted px-3 py-1 rounded-full text-xs">BCrypt</span>
              </div>
              <div className="flex space-x-3">
                <a
                  href="https://memorizz-z18i.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <FaExternalLinkAlt className="mr-2" /> Live Demo
                </a>
                <a
                  href="https://github.com/nigel-ong"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-current font-medium rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <FaGithub className="mr-2" /> GitHub
                </a>
              </div>
            </div>
          </motion.div>

          {/* Project 2: Pose IT */}
          {/* Project card with hover effects and consistent styling */}
          <motion.div
            className="bg-card text-card-foreground rounded-xl shadow-lg overflow-hidden hoverable-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ 
              scale: 1.03, // Adjust scale factor to change hover size
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              // Dark mode glow effect is applied via .dark .hoverable-card:hover in CSS
            }}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1617802690992-15d93263d3a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=350"
                alt="Pose IT XR App"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                XR Application
              </div>
              <button
                className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity"
                onClick={() => handlePlayVideo("-vS5hrA8dEI")}
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <FaVideo className="text-2xl" />
                </div>
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Pose IT</h3>
              <p className="text-muted-foreground mb-4">
                An interactive XR app for the BCIT Tech Collider Wall. Players mimic avatar poses and receive a percentage-based score.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-muted px-3 py-1 rounded-full text-xs">XR</span>
                <span className="bg-muted px-3 py-1 rounded-full text-xs">JavaScript</span>
                <span className="bg-muted px-3 py-1 rounded-full text-xs">HTML</span>
                <span className="bg-muted px-3 py-1 rounded-full text-xs">ReachXR</span>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={() => handlePlayVideo("-vS5hrA8dEI")}
                  className="inline-flex items-center px-4 py-2 bg-secondary text-secondary-foreground font-medium rounded-lg hover:bg-secondary/90 transition-colors"
                >
                  <FaVideo className="mr-2" /> Watch Demo
                </button>
                <a
                  href="https://reachxr.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-current font-medium rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <FaInfo className="mr-2" /> ReachXR Info
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
