"use client";
import { useEffect, useState } from "react";

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[10]"
      style={{ mixBlendMode: "screen" }}
    >
      <div
        className="absolute w-[600px] h-[600px] bg-[#26527c] opacity-20 rounded-full blur-3xl"
        style={{
          transform: `translate(${position.x - 300}px, ${position.y - 300}px)`,
        }}
      />
    </div>
  );
};

export default CursorGlow;
