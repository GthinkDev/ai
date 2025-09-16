"use client";

import { motion, useScroll, useSpring } from "motion/react";
import React, { useRef } from "react";

import { PortfolioItem } from "@/lib/DATA";
import PortfolioImage from "@/components/ui/portfolio/PortfolioItems";

export default function Parallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end start", "start end"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.01,
  });

  return (
    <div className="py-12 ">
      <div ref={ref}>
        <div
          className={
            "flex  flex-col justify-center items-center  sticky top-20"
          }
        >
          <h1 className={"title text-6xl font-black"}>往期项目</h1>
          <motion.div
            className="h-2 buttonBg sticky top-24 left-0 right-0 w-full"
            style={{ scaleX }}
          />
        </div>

        {PortfolioItem.map((item) => (
          <PortfolioImage
            key={item.id}
            description={item.description}
            image={item.image}
            title={item.title}
          />
        ))}
      </div>{" "}
    </div>
  );
}
