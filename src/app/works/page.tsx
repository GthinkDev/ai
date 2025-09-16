import { FC, memo } from "react";
import React from "react";

import HeroPage from "@/components/ui/Hero/HeroPage";

const index: FC = () => {
  return (
    <div>
      <HeroPage />
    </div>
  );
};

export default memo(index);
