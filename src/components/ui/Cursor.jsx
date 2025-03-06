import { useState, useEffect } from "react"; 
import { useCursorAnimation } from "../../hooks/useAnimations";

export default function Cursor() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const { cursorRef, svgRef } = useCursorAnimation();

  // Handle cursor movement
  const handleMouseMove = (e) => {
    setCursor({ x: e.clientX, y: e.clientY });
  };

  // Add event listener for mouse movement
  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="cursor pointer-events-none fixed left-1/2 top-1/2 z-[999] hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#EBB309] sm:flex will-change-transform"
      style={{ left: `${cursor.x}px`, top: `${cursor.y}px` }}
    >
      <svg
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        className="scale-50 opacity-0"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M6 19L19 6m0 0v12.48M19 6H6.52"
        />
      </svg>
    </div>
  );
}
