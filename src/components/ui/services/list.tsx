"use client";

import { FC, memo } from "react";
import React from "react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

interface IProps {
  title: string;
  description: string;
}

const ListItem: FC<IProps> = (props) => {
  const { title, description } = props;

  return (
    <motion.li
      className={
        "flex flex-col justify-between items-start gap-10 flex-1  p-12  border-1 border-gray-500"
      }
      whileHover={{
        backgroundColor: "lightgray",
        color: "black",
        scale: 1.2,
        transition: {
          duration: 0.3,
          ease: "easeInOut",
        },
      }}
    >
      <div className={"flex flex-col gap-10 hover:text-background "}>
        <h1 className={"font-bold text-foreground text-2xl"}>{title}</h1>
        <p className={"h-full text-foreground "}>{description}</p>
      </div>

      <Button
        className={"w-full buttonBg text-background rounded-none py-6"}
        size={"lg"}
        variant={"ghost"}
      >
        立即查看
      </Button>
    </motion.li>
  );
};

export default memo(ListItem);
