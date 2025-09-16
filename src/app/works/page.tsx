import { FC, memo } from "react";
import React from "react";

import Parallax from "@/components/ui/portfolio/demo/demo";
import HeroPage from "@/components/ui/Hero/HeroPage";

const index: FC = () => {
  return (
    <div>
      <HeroPage />
      <Parallax />
    </div>
  );
};

export default memo(index);
