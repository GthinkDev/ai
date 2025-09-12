"use client";

import type { FC } from "react";
import type { Variants } from "framer-motion";

import { motion } from "framer-motion";
import React, { memo, useRef, useState } from "react";

import Navigation from "./Navigation";
import MenuToggle from "./MenuToggle";

import useDimensions from "@/utils/hooks/useDimensions";

const sidebarVariants: Variants = {
  open: (height = 1200) => ({
    clipPath: `circle(${height * 2 + 200}px at 100% 0)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 100% 0 )",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Variants: FC = () => {
  // 使用 useState 管理菜单的打开/关闭状态
  const [isOpen, setIsOpen] = useState(false);
  // 使用 useRef 创建一个对容器元素的引用
  const containerRef = useRef<HTMLDivElement>(null);
  // 使用自定义 hook 获取容器的高度
  const { height } = useDimensions(containerRef);

  return (
    <div className="w-full">
      {/* 外层容器，应用基础样式 */}
      <motion.div>
        {/* 导航菜单容器，使用 Framer Motion 实现动画效果 */}
        <motion.nav
          ref={containerRef} // 绑定容器引用
          animate={isOpen ? "open" : "closed"} // 根据状态设置动画
          className="w-60" // 应用导航菜单样式
          custom={height} // 传递自定义高度值给动画
          initial={false} // 不设置初始动画状态
        >
          {/* 背景动画元素 */}
          <motion.div
            className="bg-background  absolute top-0 right-0 bottom-0 w-2/3 z-50"
            variants={sidebarVariants}
          />
          {/* 导航菜单内容 */}
          <Navigation />
          {/* 菜单切换按钮 */}
          <MenuToggle toggle={() => setIsOpen(!isOpen)} />
        </motion.nav>
      </motion.div>
    </div>
  );
};

export default memo(Variants);
