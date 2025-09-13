"use client";

import type { FC } from "react";

import { motion } from "framer-motion";
import React, { memo } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import { Button } from "../../button";

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

interface IProps {
  item: { name: string; href: string };
}
const MenuItem: FC<IProps> = (props) => {
  const { item } = props;
  const pathName = usePathname();

  return (
    <motion.li
      key={item.href}
      className="flex justify-center items-start p-0 m-0 list-none mb-5 cursor-pointer"
      variants={itemVariants} // 定义动画变体
      whileHover={{ scale: 1.1 }} // 悬停时的缩放效果
      whileTap={{ scale: 0.95 }} // 点击时的缩放效果
    >
      <Button
        asChild
        className={clsx(
          pathName === item.href &&
            " text-blue-500  pointer-events-none dark:text-yellow-300",

          "  hover:text-blue-500 hover:dark:text-yellow-300 text-base ",
        )}
        size={"lg"}
        variant={null}
      >
        <motion.a href={item.href}>{item.name}</motion.a>
      </Button>
    </motion.li>
  );
};

export default memo(MenuItem);
