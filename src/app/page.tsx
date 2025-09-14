"use client";

import type { FC } from "react";

import React, { memo } from "react";

import HeroPage from "@/components/ui/Hero/HeroPage";
import Parallax from "@/components/ui/parallax";
import Services from "@/components/ui/services";

const Home: FC = () => {
  return (
    <div className={" flex flex-col  "}>
      <HeroPage />
      <div id={"services"}>
        <Parallax type={"services"} />
      </div>
      <div id={"services"}>
        <Services />
      </div>
      <div id={"portfolio"}>
        <Parallax type={"portfolio"} />
      </div>
    </div>
  );
};

export default memo(Home);
