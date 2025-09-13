"use client";

import type { FC } from "react";

import { motion } from "framer-motion";
import React, { memo } from "react";

import HeroImg from "@/assets/HeroRightImg.svg";

const textVariants = {
  initial: { opacity: 0, x: -500 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, staggerChildren: 0.1 },
  },
  scrollButton: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.1, transition: { duration: 0.3 } },
  tap: { scale: 0.9, transition: { duration: 0.1 } },
};

const Hero: FC = () => {
  return (
    <div className="flex justify-between items-center  w-full h-screen ">
      <motion.div variants={textVariants}>tEXT</motion.div>
      <div>
        <motion.img alt="Hero Image" className="w-fit" src={HeroImg} />
      </div>
    </div>
  );
};

export default memo(Hero);
