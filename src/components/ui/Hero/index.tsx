"use client";

import type { FC } from "react";

import { motion } from "framer-motion";
import React, { memo } from "react";
import { MouseIcon } from "lucide-react";
import Image from "next/image";

import HeroImg from "@/assets/HeroRightImg.svg";
import {
  bgTextVariants,
  containerVariants,
  imageVariants,
  mouseIconVariants,
  textVariants,
} from "@/components/ui/Hero/animate";
import { buttonVariants } from "@/components/ui/button";

const Hero: FC = () => {
  return (
    <div className="relative flex h-screen w-full ">
      {/* 左侧内容区域 */}
      <div className="container relative mx-auto flex h-full items-center">
        <motion.div
          animate="visible"
          className="z-10 flex w-full flex-col gap-6 sm:gap-8 md:w-1/2"
          initial="hidden"
          variants={containerVariants}
        >
          <motion.h1
            className="text-blue-500 dark:text-yellow-300 text-xl font-bold tracking-[10px] sm:text-2xl md:text-3xl lg:text-4xl"
            variants={textVariants}
          >
            HARVEY TYLER
          </motion.h1>

          <motion.h1
            className="text-3xl font-black sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            variants={textVariants}
          >
            Web developer & UI designer
          </motion.h1>

          <motion.div
            className="mt-3 flex flex-col gap-4 sm:flex-row sm:gap-5 sm:mt-5"
            variants={containerVariants}
          >
            <motion.button
              className="w-fit rounded-full border border-foreground px-6 py-2 text-sm sm:px-8 sm:py-3 sm:text-base"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              查看产品
            </motion.button>
            <motion.button
              className="w-fit rounded-full bg-blue-500 px-6 py-2 text-background text-sm dark:bg-yellow-400 sm:px-8 sm:py-3 sm:text-base"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              联系我们
            </motion.button>
          </motion.div>

          <motion.div
            animate={["visible", "animate"]}
            className="mt-6 "
            initial="hidden"
            variants={mouseIconVariants}
          >
            <MouseIcon className="h-8 w-8 sm:h-10 sm:w-10" />
          </motion.div>
        </motion.div>
      </div>

      {/* 背景文字装饰 */}
      <motion.div
        animate="visible"
        className="absolute bottom-0 left-0 right-0 whitespace-nowrap text-[100px] font-black text-blue-500/10 dark:text-yellow-300/5 sm:text-[150px] md:text-[200px] lg:text-[300px] xl:text-[400px]"
        initial="hidden"
        variants={bgTextVariants}
      >
        Writer Content Creator Influence
      </motion.div>

      {/* 右侧图片 */}
      <motion.div
        animate="visible"
        className="absolute right-0 top-0 z-0 h-full w-1/2 md:w-2/5"
        initial="hidden"
        variants={imageVariants}
      >
        <Image
          fill
          priority
          alt="Hero Image"
          className="object-contain"
          sizes="(max-width: 768px) 50vw, 40vw"
          src={HeroImg}
        />
      </motion.div>
    </div>
  );
};

export default memo(Hero);
