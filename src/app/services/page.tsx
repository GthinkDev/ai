"use client";

import type { FC } from "react";

import React, { memo } from "react";

import Parallax from "../../components/ui/parallax";

import HeroPage from "@/components/ui/Hero/HeroPage";

const ServicesPage: FC = () => {
  return (
    <div className={" flex flex-col  "}>
      <HeroPage />
      <div id={"services"}>
        <Parallax type={"services"} />
      </div>
      <div id={"services"}>
        <Parallax type={"services"} />
      </div>
      <div id={"portfolio"}>
        <Parallax type={"portfolio"} />
      </div>
    </div>
  );
};

export default memo(ServicesPage);
