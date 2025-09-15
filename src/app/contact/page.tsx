"use client";

import { FC, memo } from "react";
import React from "react";
import { motion } from "framer-motion";

import Reordering from "../../components/ui/reordering";

import { Button } from "@/components/ui/button";

const MotionButton = motion(Button);

const Contact: FC = () => {
  return (
    <div className={"h-screen flex flex-col justify-start gap-6 items-center"}>
      <Reordering />
      <MotionButton
        style={box}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
      >
        <p>Hover me</p>
      </MotionButton>
    </div>
  );
};

export default memo(Contact);

const box = {
  width: 100,
  height: 100,
  backgroundColor: "#9911ff",
  borderRadius: 5,
};
