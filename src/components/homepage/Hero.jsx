import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const component = useRef(null);
  const textRefs = useRef([]);

  // Initialize text refs
  const addTextRef = (el, index) => {
    if (el) textRefs.current[index] = el;
  };

  // Simple animation that ensures visibility
  useEffect(() => {
    const textElements = textRefs.current.filter(Boolean);
    if (!textElements.length) return;

    // Set initial opacity to 0
    gsap.set(textElements, { opacity: 0, y: 50 });

    // Create animation
    const tl = gsap.timeline();
    tl.to(textElements, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    });

    // Create floating animation
    textElements.forEach((el, index) => {
      gsap.to(el, {
        y: "10px",
        duration: 1.5 + index * 0.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1
      });
    });
  }, []);

  return (
    <section
      ref={component}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#9a9a83] via-[#c5c5b8] to-white"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-grid-pattern"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center">
        {/* Text Container */}
        <div className="flex flex-col items-center gap-4 px-4">
          {[
            { text: "Hi, I'm Njuguna", className: "text-[#777764]" },
            { text: "Hi, I'm Njuguna", className: "font-outline-3 text-transparent" },
            { text: "Hi, I'm Njuguna", className: "text-secondary-700" }
          ].map((item, index) => (
            <div 
              key={index} 
              className="title overflow-hidden py-2 2xl:py-4"
            >
              <h1 
                ref={el => addTextRef(el, index)}
                className={`font-grotesk text-[clamp(3rem,8vw,6rem)] font-bold uppercase tracking-tighter ${item.className} will-change-transform`}
              >
                {item.text}
              </h1>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 flex flex-col items-center gap-2">
          <span className="text-sm text-[#777764] font-medium">Scroll Down</span>
          <div className="relative h-14 w-[2px] overflow-hidden bg-[#777764]/20">
            <div className="absolute h-1/2 w-full bg-[#777764] animate-scrollDown"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
