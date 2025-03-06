import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins once
gsap.registerPlugin(ScrollTrigger);

// Centralized animation configuration for better performance
const animationDefaults = {
  fadeIn: {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power4.out"
  },
  fadeOut: {
    opacity: 0,
    y: 50,
    duration: 0.5
  },
  scale: {
    scale: 1,
    duration: 0.8,
    ease: "power3.out"
  }
};

// Debounce function to limit ScrollTrigger refreshes
function debounce(func, wait = 100) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Hook for fade-in animations on scroll
export function useFadeInAnimation(triggerOptions = {}) {
  const element = useRef(null);
  
  useEffect(() => {
    const el = element.current;
    if (!el) return;
    
    // Create timeline once
    const tl = gsap.timeline({ paused: true });
    tl.fromTo(
      el, 
      { opacity: 0, y: 50 }, 
      animationDefaults.fadeIn
    );
    
    // Create ScrollTrigger
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: triggerOptions.start || "top 80%",
      onEnter: () => tl.play(),
      onLeaveBack: triggerOptions.reverseOnLeave ? () => tl.reverse() : undefined,
      once: triggerOptions.once !== false
    });
    
    return () => {
      tl.kill();
      trigger.kill();
    };
  }, [triggerOptions]);
  
  return element;
}

// Hook for section heading animations
export function useSectionHeadingAnimation() {
  const container = useRef(null);
  
  useEffect(() => {
    const element = container.current;
    if (!element) return;
    
    const headings = element.querySelectorAll(".heading");
    if (!headings.length) return;
    
    // Create animations for each heading with a single ScrollTrigger
    const tl = gsap.timeline({ paused: true });
    
    headings.forEach((heading, index) => {
      tl.to(heading, {
        opacity: 1,
        y: 0,
        ease: "power4.out",
        duration: 1
      }, index * 0.1); // Staggered timing
    });
    
    const trigger = ScrollTrigger.create({
      trigger: element,
      start: "top 550px",
      onEnter: () => tl.play(),
      once: true
    });
    
    return () => {
      tl.kill();
      trigger.kill();
    };
  }, []);
  
  return container;
}

// Hook for Hero animations (optimized)
export function useHeroAnimation() {
  const component = useRef(null);
  const textLinesRef = useRef([]);
  
  useEffect(() => {
    const container = component.current;
    if (!container) return;
    
    const textLines = textLinesRef.current.filter(Boolean);
    if (!textLines.length) return;
    
    // Use a single timeline for all animations
    const tl = gsap.timeline({
      defaults: {
        ease: "power3.inOut",
        duration: 1
      }
    });
    
    // Animate text lines once
    tl.from(textLines, {
      opacity: 0,
      x: (index) => [100, -100, 100][index % 3],
      duration: 1.5,
      stagger: 0.2,
      ease: "power4.out"
    });
    
    // Optional floating animation (lighter version)
    const floatingAnimations = [];
    textLines.forEach((line, index) => {
      // Create and store animation references
      const anim = gsap.to(line, {
        y: "10px",
        duration: 1.5 + index * 0.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        overwrite: true
      });
      floatingAnimations.push(anim);
    });
    
    return () => {
      tl.kill();
      floatingAnimations.forEach(anim => anim.kill());
    };
  }, []);
  
  const addTextLineRef = (el, index) => {
    textLinesRef.current[index] = el;
  };
  
  return { component, addTextLineRef };
}

// Hook for cursor animation (optimized)
export function useCursorAnimation() {
  const cursorRef = useRef(null);
  const svgRef = useRef(null);
  
  useEffect(() => {
    const cursor = cursorRef.current;
    const svg = svgRef.current;
    if (!cursor || !svg) return;
    
    // Create timeline once
    const tl = gsap.timeline({ paused: true });
    
    tl.to(cursor, { 
      height: "112px", 
      width: "112px", 
      backgroundColor: "#EBB309", 
      ease: "expo.inOut" 
    }).to(svg, { 
      opacity: 1, 
      width: "96px", 
      height: "96px" 
    }, 0);
    
    // Use event delegation for better performance
    const handleMouseEnter = (e) => {
      if (e.target.closest('.img')) {
        tl.play();
      }
    };
    
    const handleMouseLeave = (e) => {
      if (e.target.closest('.img')) {
        tl.reverse();
      }
    };
    
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);
    
    return () => {
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
      tl.kill();
    };
  }, []);
  
  return { cursorRef, svgRef };
}

// Optimize ScrollTrigger refreshes
export function useScrollTriggerRefresh() {
  useEffect(() => {
    // Debounced refresh function
    const debouncedRefresh = debounce(() => {
      ScrollTrigger.refresh();
    }, 100);
    
    // Refresh on window resize
    window.addEventListener('resize', debouncedRefresh);
    
    return () => {
      window.removeEventListener('resize', debouncedRefresh);
    };
  }, []);
}

// Optimized section animation with batch updates
export function useSectionAnimation(options = {}) {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    
    // Get all animatable elements
    const elements = section.querySelectorAll('.animate-on-scroll');
    if (!elements.length) return;
    
    // Batch animations
    gsap.set(elements, { opacity: 0, y: 50 });
    
    const tl = gsap.timeline({ paused: true });
    
    tl.to(elements, {
      opacity: 1,
      y: 0,
      stagger: options.stagger || 0.1,
      duration: options.duration || 1,
      ease: options.ease || "power3.out"
    });
    
    const trigger = ScrollTrigger.create({
      trigger: section,
      start: options.start || "top 70%",
      onEnter: () => tl.play(),
      once: options.once !== false
    });
    
    return () => {
      tl.kill();
      trigger.kill();
    };
  }, [options]);
  
  return sectionRef;
}
