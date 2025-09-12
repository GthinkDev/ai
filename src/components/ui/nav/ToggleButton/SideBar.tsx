"use client";

import type { FC } from "react";

import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import React, { memo } from "react";
import { useState } from "react";

import ToggleButton from "./ToggleButton";

const SideBar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1200px at calc(100% - 40px) 40px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.div animate={isOpen ? "open" : "closed"} className="sidebar">
      <motion.div className="bg" variants={variants as any}>
        <Menu />
      </motion.div>
      <ToggleButton onClick={setIsOpen} />
    </motion.div>
  );
};

export default memo(SideBar);
