"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const EffectCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isClicking, setIsClicking] = useState(false);

  const scale = useTransform(cursorX, [0, window.innerWidth], [0.8, 1.2]);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 20);
      cursorY.set(e.clientY - 20);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      animate={{
        backgroundColor: isClicking ? "rgba(59, 130, 246, 0.5)" : "transparent",
      }}
      className="fixed top-0 left-0 w-10 h-10 rounded-full border-2 border-blue-500 pointer-events-none z-50"
      style={{
        x: cursorX,
        y: cursorY,
        scale: isClicking ? 0.8 : scale,
      }}
      transition={{ duration: 0.1 }}
    />
  );
};

export default EffectCursor;
