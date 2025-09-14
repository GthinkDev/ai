"use client";

import { FC, memo, useRef } from "react";
import React from "react";
import clsx from "clsx";
import { motion, useTransform } from "framer-motion";
import { useScroll } from "motion/react";

interface IProps {
  type: string;
}

const Parallax: FC<IProps> = (props) => {
  const { type } = props;
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const xBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={ref}
      className={clsx(
        " flex flex-col flex-grow min-h-screen items-center justify-center overflow-hidden relative",
        type === "services"
          ? "bg-gradient-to-b from-gray-900 to-red-950/50"
          : "bg-gradient-to-b from-gray-900 to-yellow-950/50",
      )}
    >
      <motion.h1
        className={"font-black text-yellow-400 text-7xl max-sm:text-5xl "}
        style={{ y: yText }}
      >
        {type === "services" ? "我们能做什么?" : "我们做了什么?"}
      </motion.h1>

      <motion.div className="parallaxMountains z-[3]" />
      <motion.div
        className="parallax z-[2] absolute lg:right-0 sm:-right-[10px] md:-right-[10px] "
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
        }}
      />
      <motion.div
        className="parallaxStars z-[1] bg-repeat-x "
        style={{ x: xBg }}
      />
    </div>
  );
};

export default memo(Parallax);
