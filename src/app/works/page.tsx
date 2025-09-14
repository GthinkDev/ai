import { FC, memo } from "react";
import React from "react";

import Star from "@/components/ui/Star";
import AnimateButton from "@/components/ui/button/AnimateButton";

const About: FC = () => {
  return (
    <div>
      <Star />
      <AnimateButton>Works1111</AnimateButton>
    </div>
  );
};

export default memo(About);
