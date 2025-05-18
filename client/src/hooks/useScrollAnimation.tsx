import { useEffect } from 'react';

/**
 * Enhanced Page Scroll Animation Hook
 * 
 * This hook applies smooth transitions when scrolling between sections
 * 
 * Customization options:
 * - smoothScrollDuration: Duration of smooth scroll (in ms)
 * - animationClass: The class to add to elements for animation
 * - intersectionThreshold: How much of element must be visible (0-1)
 * - intersectionMargin: Margin around the root when intersecting
 * 
 * Usage:
 * Just call this hook in a component (usually App.tsx) that's rendered on every page
 * Animation classes are defined in CSS (section-enter, section-enter.active)
 */
export function useScrollAnimation({
  smoothScrollDuration = 800,
  animationClass = 'section-enter',
  intersectionThreshold = 0.1,
  intersectionMargin = '-100px',
}: {
  smoothScrollDuration?: number;
  animationClass?: string;
  intersectionThreshold?: number;
  intersectionMargin?: string;
} = {}) {
  useEffect(() => {
    // 1. Set up smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const element = this as HTMLAnchorElement;
        const targetId = element.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        
        // Customize scroll behavior here
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for fixed header height
          behavior: 'smooth',
        });
        
        // Update URL hash without causing a jump
        window.history.pushState(null, '', `#${targetId}`);
      });
    });
    
    // 2. Add click handlers to buttons that scroll to sections
    document.querySelectorAll('[data-scroll-to]').forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        const element = this as HTMLElement;
        const targetId = element.getAttribute('data-scroll-to');
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth',
        });
      });
    });
    
    // 3. Set up scroll-triggered animations
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { 
        threshold: intersectionThreshold,
        rootMargin: intersectionMargin
      }
    );

    document.querySelectorAll(`.${animationClass}`).forEach((section) => {
      sectionObserver.observe(section);
    });

    return () => {
      sectionObserver.disconnect();
    };
  }, [smoothScrollDuration, animationClass, intersectionThreshold, intersectionMargin]);
}