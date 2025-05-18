import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import JourneySection from "@/components/JourneySection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import VideoModal from "@/components/VideoModal";
import CursorSpotlight from "@/components/CursorSpotlight";
import ScrollProgress from "@/components/ScrollProgress";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Main App Component
 * 
 * Features:
 * - Smooth scrolling between sections with animations
 * - Dark/light mode support
 * - Cursor spotlight effect
 * - Interactive sections with hover effects
 * - Easter egg with a fun fact (triple-click anywhere on page)
 * 
 * To customize:
 * - Modify the Easter egg message in the showEasterEgg state handler
 * - Adjust scroll animation parameters in useScrollAnimation()
 * - Add or remove sections as needed
 */
function App() {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  
  // Use the enhanced scroll animation hook for smooth transitions
  useScrollAnimation({
    smoothScrollDuration: 800, // Adjust scroll speed (ms)
    intersectionThreshold: 0.1, // Percentage of element that must be visible
    intersectionMargin: '-100px' // Margin around viewport for triggering animations
  });

  // Easter egg implementation - triple click to show a fun fact
  useEffect(() => {
    let clickCount = 0;
    let lastClickTime = 0;
    
    const handleClick = () => {
      const currentTime = new Date().getTime();
      
      // Reset counter if clicks are more than 500ms apart
      if (currentTime - lastClickTime > 500) {
        clickCount = 0;
      }
      
      clickCount++;
      lastClickTime = currentTime;
      
      // Show easter egg on triple click
      if (clickCount === 3) {
        setShowEasterEgg(true);
        // Hide after 5 seconds
        setTimeout(() => setShowEasterEgg(false), 5000);
        clickCount = 0;
      }
    };
    
    document.addEventListener('click', handleClick);
    
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <CursorSpotlight />
      <ScrollProgress />
      <Navbar />
      <main className="pt-20">
        <HeroSection />
        <JourneySection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
      <VideoModal />
      
      {/* Easter Egg - Fun Fact (triggered by triple-click anywhere) */}
      <AnimatePresence>
        {showEasterEgg && (
          <motion.div 
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 p-4 bg-card border shadow-lg rounded-lg max-w-md text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <p className="font-medium">✨ Fun Fact: My favorite Pokemon is Dragonite! ✨</p>
            <p className="text-xs text-muted-foreground mt-1">Triple-click anywhere to reveal more fun facts</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;