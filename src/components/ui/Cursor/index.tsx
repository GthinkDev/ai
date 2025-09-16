"use client";

import { motion } from "framer-motion";
import { FC, memo, useEffect, useState } from "react";
import React from "react";

const Cursor: FC = () => {
  const [positon, setPositon] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPositon({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      animate={{ x: positon.x - 20, y: positon.y }}
      className={
        "w-16 h-16 border-2 rounded-full bg-foreground/10 border-blue-500 dark:border-yellow-400 fixed z-[999]"
      }
    />
  );
};

export default memo(Cursor);
