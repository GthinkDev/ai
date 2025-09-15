"use client";

import type { FC } from "react";

import React, { memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MouseIcon } from "lucide-react";

import HeroImage from "@/assets/HeroRightImg.svg";
import { mouseIconVariants } from "@/components/ui/Hero/animate";
import { Button } from "@/components/ui/button";

export const MotionImage = motion(Image);
const MotionButton = motion(Button);

const HeroPage: FC = () => {
  // @ts-ignore
  return (
    <div className={" container w-full relative flex  h-[1080px] "}>
      {/*左边内容*/}
      <section className={"flex-1 flex flex-col justify-center gap-12"}>
        <motion.div className={"flex flex-col gap-4"}>
          <motion.h2
            animate={{ opacity: 1, scale: 1 }}
            className={
              "text-3xl font-medium opacity-10 text-blue-500 dark:text-yellow-400"
            }
            initial={{ opacity: 0, scale: 0.5 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            DeMaster
            <br /> NextJS + Frame motion +TailwindCSS Project
          </motion.h2>
          <motion.h1
            animate={{ opacity: 1, scale: 1 }}
            className="text-8xl font-black"
            initial={{ opacity: 0, scale: 0.5 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            UI Designer & Web developer
          </motion.h1>
        </motion.div>
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className={"flex gap-8"}
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <motion.button
            className={"px-12 py-4 border-2 text-lg"}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
          >
            最近的产品
          </motion.button>
          <motion.button
            className={
              "px-12 py-4 border-2  text-lg text-black dark:bg-yellow-400"
            }
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
          >
            联系我们
          </motion.button>
        </motion.div>
        {/*小鼠标*/}
        <motion.div
          animate={["visible", "animate"]}
          className="mt-24 "
          initial="hidden"
          variants={mouseIconVariants}
        >
          <MouseIcon className="h-8 w-8 sm:h-10 sm:w-10 text-blue-500 dark:text-yellow-400" />
        </motion.div>
      </section>
      {/*右边内容*/}
      <section className={"flex-1 w-1/2 z-0 "}>
        <MotionImage
          alt="Hero image description"
          animate={{ opacity: 1, scale: 1 }}
          className={"object-fill absolute right-0 top-0"}
          initial={{ opacity: 0, scale: 0.5 }}
          src={HeroImage}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        />
      </section>
    </div>
  );
};

export default memo(HeroPage);
