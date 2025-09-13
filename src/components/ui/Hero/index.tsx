"use client";

import type { FC } from "react";

import { motion } from "framer-motion";
import React, { memo } from "react";
import { MouseIcon } from "lucide-react";

import {
  bgTextVariants,
  containerVariants,
  mouseIconVariants,
  textVariants,
} from "@/components/ui/Hero/animate";
import { buttonVariants } from "@/components/ui/button";

const Hero: FC = () => {
  return (
    <div className=" flex h-screen w-full ">
      {/* 左侧内容区域 */}
      <div className="container relative mx-auto flex h-full items-center">
        <motion.div
          animate="animate"
          className="z-10 flex w-full flex-col gap-6 sm:gap-8"
          initial="initial"
          variants={containerVariants}
        >
          <motion.h1
            animate="animate"
            className="text-blue-500 dark:text-yellow-300 text-xl font-bold
            tracking-[10px] sm:text-2xl md:text-3xl lg:text-4xl"
            initial="initial"
            variants={textVariants}
          >
            HARVEY TYLER
          </motion.h1>

          <motion.h1
            animate="animate"
            className="text-3xl font-black sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            initial="initial"
            variants={textVariants}
          >
            Web developer & UI designer
          </motion.h1>

          <motion.div
            animate="animate"
            className="mt-3 flex flex-col gap-4 sm:flex-row sm:gap-5 sm:mt-5"
            initial="initial"
            variants={containerVariants}
          >
            <motion.button
              animate="animate"
              className="w-fit rounded-full border border-foreground px-6 py-2 text-sm
              sm:px-8 sm:py-3 sm:text-base"
              initial="initial"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              查看产品
            </motion.button>
            <motion.button
              animate="animate"
              className="w-fit rounded-full bg-blue-500 px-6 py-2 text-background text-sm
              dark:bg-yellow-400 sm:px-8 sm:py-3 sm:text-base"
              initial="initial"
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
        className="absolute bottom-20 left-0 right-0   text-9xl font-black text-blue-500/10
         dark:text-yellow-300/5 sm:text-[150px] md:text-[200px] lg:text-[300px] xl:text-[400px]"
        initial="hidden"
        variants={bgTextVariants}
      >
        DeMaster
      </motion.div>
      s
    </div>
  );
};

export default memo(Hero);
