"use client";

import type { FC } from "react";

import React, { memo } from "react";

import HeroPage from "@/components/ui/Hero/HeroPage";
import Parallax from "@/components/ui/parallax";
import Services from "@/components/ui/services";
import Portfolio from "@/components/ui/portfolio";
import Contact from "@/components/ui/Contact";

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
      <div id={"services"}>
        <Parallax type={"portfolio"} />
      </div>
      <div className={""} id={"portfolio"}>
        <Portfolio />
      </div>
      <div className={""} id={"contact"}>
        <Contact />
      </div>
    </div>
  );
};

export default memo(Home);
