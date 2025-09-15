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
        "flex flex-col justify-between items-start gap-10 flex-1 p-12 border border-gray-500"
      }
      whileHover={{
        backgroundColor: "#eaeaea",
        backgroundImage: "none",
        backgroundRepeat: "repeat",
        backgroundPosition: "0% 0%",
        backgroundSize: "auto",
        color: "#000000",
        scale: 1.1,
      }}
    >
      <h1 className={"font-bold text-2xl"}>{title}</h1>
      <p className={"h-full"}>{description}</p>
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
