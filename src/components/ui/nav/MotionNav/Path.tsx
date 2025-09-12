"use client";

import type { FC } from "react";

import { motion, Variants } from "framer-motion";
import React, { memo } from "react";

interface IProps {
  d?: string;
  variants: Variants;
  transition?: { duration: number };
}
const Path: FC<IProps> = (props) => {
  return (
    <motion.path
      fill="transparent"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="3"
      {...props}
    />
  );
};

export default memo(Path);
