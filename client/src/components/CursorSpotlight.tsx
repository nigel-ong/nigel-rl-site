import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/useMobile";

const CursorSpotlight = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Only enable on desktop
    if (isMobile) {
      setIsVisible(false);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMobile, isVisible]);

  if (isMobile) return null;

  return (
    <motion.div
      className="cursor-spotlight"
      animate={{
        opacity: isVisible ? 1 : 0,
        x: mousePosition.x,
        y: mousePosition.y,
      }}
      transition={{
        type: "spring",
        mass: 0.1,
        stiffness: 200,
        damping: 20,
      }}
    />
  );
};

export default CursorSpotlight;
