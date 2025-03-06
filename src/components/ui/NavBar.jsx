import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function NavBar({ sectionRefs }) {
  const navBar = useRef(null);
  const cta = useRef(null);
  const [isHeroSection, setIsHeroSection] = useState(true);
  const tl = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  useEffect(() => {
    // Initial animation
    tl.to(navBar.current, {
      y: 0,
      duration: 1,
      delay: 0.3,
      ease: "power3.out",
    });

    // Create scroll trigger for hero section
    ScrollTrigger.create({
      trigger: "#hero",
      start: "top top",
      end: "bottom top",
      onEnter: () => setIsHeroSection(true),
      onLeave: () => setIsHeroSection(false),
      onEnterBack: () => setIsHeroSection(true),
      onLeaveBack: () => setIsHeroSection(false),
    });

    // Setup gravity effect for CTA button
    const ctaElement = cta.current;
    let gravityStopped = true;
    let bounceTimeline;

    const startGravity = () => {
      if (gravityStopped) {
        gravityStopped = false;
        if (bounceTimeline) bounceTimeline.kill();
        
        bounceTimeline = gsap.timeline({
          onComplete: () => {
            if (!gravityStopped) {
              bounceTimeline.restart();
            }
          }
        });

        bounceTimeline
          .to(ctaElement, {
            y: 20,
            duration: 0.4,
            ease: "power2.in"
          })
          .to(ctaElement, {
            y: -5,
            duration: 0.3,
            ease: "power2.out"
          })
          .to(ctaElement, {
            y: 10,
            duration: 0.3,
            ease: "power2.in"
          })
          .to(ctaElement, {
            y: 0,
            duration: 0.2,
            ease: "power2.out"
          });
      }
    };

    const stopGravity = () => {
      gravityStopped = true;
      if (bounceTimeline) {
        bounceTimeline.kill();
        gsap.to(ctaElement, {
          y: 0,
          duration: 0.2,
          ease: "power2.out"
        });
      }
    };

    ctaElement.addEventListener("mouseenter", startGravity);
    ctaElement.addEventListener("mouseleave", stopGravity);

    return () => {
      ctaElement.removeEventListener("mouseenter", startGravity);
      ctaElement.removeEventListener("mouseleave", stopGravity);
    };
  }, []);

  useEffect(() => {
    sectionRefs.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 375px",
        end: "bottom 300px",
        animation: gsap
          .timeline()
          .to(navBar.current, { color: "#EBB309" })
          .to(cta.current, { backgroundColor: "#D1D1C7", color: "#0E0E0C" }, 0)
          .to(".bg-secondary-100", { backgroundColor: "#0E0E0C" }, 0),
        toggleActions: "restart reverse restart reverse",
      });
    });
  });

  return (
    <header
      ref={navBar}
      className={`fixed top-0 z-50 flex w-full -translate-y-full items-center justify-between px-5 py-3 transition-all duration-300 backdrop-blur-[3px] bg-transparent{
        isHeroSection 
          ? '' 
          : 'shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]'
      }`}
    >
      <a 
        href="#hero" 
        aria-label="Logo" 
        className="z-50 text-xl font-bold text-[#777764]"
      >
        &copy; JesseNjuguna
      </a>
      <nav className="space-x-7 font-grotesk text-body-3 sm:block text-bold">
        {[ 
          { href: "#about", label: "about" },
          { href: "#services", label: "services" },
          { href: "#works", label: "projects" },
        ].map(({ href, label }) => (
          <a 
            key={href} 
            href={href} 
            className="group relative hidden md:inline-block overflow-hidden text-secondary-700/80"
          >
            <span className="block relative transition-transform duration-100 ease-in-out group-hover:-translate-y-full">
              {label}
            </span>
            <span className="absolute top-full left-0 block w-full text-secondary-700/80 transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
              {label}
            </span>
          </a>
        ))}
        <a
          ref={cta}
          className="button group relative inline-block hover:bg-transparent text-secondary-700/80"
          href="#contact"
        >
          <span className="relative w-fit text-secondary-700/80">
            Let's Talk.
          </span>
        </a>
      </nav>
    </header>
  );
}
