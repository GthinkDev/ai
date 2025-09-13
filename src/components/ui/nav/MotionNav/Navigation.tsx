"use client";

import type { FC } from "react";

import { motion } from "framer-motion";
import React, { memo } from "react";
import clsx from "clsx";

import { NavMenuItem } from "./DeNavBar";
import MenuItem from "./MenuItem";

const navVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

interface IProps {
  isOpen: boolean;
}
const Navigation: FC<IProps> = (props) => {
  const { isOpen } = props;

  return (
    <motion.ul
      className={clsx("absolute top-20 w-1/3 z-50 right-0 -translate-x-1/2")}
      variants={navVariants}
    >
      {NavMenuItem.map((item) => (
        <MenuItem key={item.href} item={item} />
      ))}
    </motion.ul>
  );
};

export default memo(Navigation);
