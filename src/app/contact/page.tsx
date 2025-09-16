"use client";

import { FC, memo } from "react";
import React from "react";
import { motion } from "framer-motion";

import Reordering from "../../components/ui/reordering";

import { Button } from "@/components/ui/button";

const MotionButton = motion(Button);

const Contact: FC = () => {
  return (
    <div className={"container"}>
      <Reordering />
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
