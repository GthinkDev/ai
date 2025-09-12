/* eslint-disable prettier/prettier */
"use client";

import type { FC } from "react";

import React, { memo, useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

import { ModeToggle } from "../ModeToggle";
import { Button } from "../button";

import Variants from "./MotionNav/Variants";

import LogoDark from "@/assets/logo-dark.svg";
import LogoLight from "@/assets/logo-light.svg";

export const NavMenuItem = [
  {
    name: "    公司首页    ",
    href: "/",
  },
  {
    name: "产品服务",
    href: "/services",
  },
  {
    name: "关于我们",
    href: "/works",
  },
  {
    name: "联系我们",
    href: "/contact",
  },
];
const DeNavBar: FC = () => {
  const pathName = usePathname();
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const { theme, resolvedTheme, setTheme } = useTheme();
  // 使用 resolvedTheme 确保服务端和客户端一致
  // 添加一个状态来跟踪客户端是否已加载
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 标记客户端已加载
    setMounted(true);

    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      setTheme(systemPrefersDark ? "dark" : "light");
    }
  }, [setTheme]);

  // 只有在客户端加载完成后才渲染 logo
  const logoSrc = mounted
    ? (resolvedTheme || theme) === "dark"
      ? LogoDark
      : LogoLight
    : LogoLight; // 服务端默认使用亮模式

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      // 如果没有存储的主题，使用系统偏好或默认为 light
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      setTheme(systemPrefersDark ? "dark" : "light");
    }
  }, [setTheme]);

  // 当主题变化时保存到 localStorage
  useEffect(() => {
    if (theme) {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return (
    <div
      className="flex  justify-start bg-background w-full items-center gap-6 px-4 sm:px-12 lg:px-24 xl:px-40 py-2  sticky top-0 z-40 backdrop-blur-xl font-medium "
      suppressHydrationWarning={true}
    >
      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-start justify-start  gap-2  w-fit cursor-pointer"
        initial={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {mounted && (
          <Image
            alt="DeMaster.Ai Logo"
            decoding="async"
            height={28}
            src={logoSrc}
            width={28}
          />
        )}
        <div className="flex font-black text-xl">
          <p>DeMaster</p>
          <p className="text-blue-600 dark:text-yellow-300">.Ai</p>
        </div>
      </motion.div>
      <motion.div className="text-gray-700 flex justify-between gap-2 dark:text-white items-center text-sm max-sm:hidden sm:hidden md:flex lg:flex xl:flex transition-all">
        {NavMenuItem.map((item) => (
          <motion.div
            key={item.name}
            // className="sm:hover:border-b py-2  max-sm:w-full text-center max-sm:py-2 max-sm:px-8 flex gap-6"
          >
            <Button
              asChild
              className={clsx(
                pathName === item.href &&
                  " text-blue-500  pointer-events-none dark:text-yellow-300",

                "  hover:text-blue-500 hover:dark:text-yellow-300 text-base "
              )}
              size={"lg"}
              variant={null}
              onClick={() => setSideBarOpen(false)}
            >
              <motion.a href={item.href}>{item.name}</motion.a>
            </Button>
          </motion.div>
        ))}

        {/* <DeNavMenu /> */}
      </motion.div>
      <span className="  fixed sm:top-2 max-sm:right-14 sm:right-14 lg:right-24 md:right-14">
        <ModeToggle />
      </span>
      <Variants />
    </div>
  );
};

export default memo(DeNavBar);
