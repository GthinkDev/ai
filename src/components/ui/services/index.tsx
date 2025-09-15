import type { FC } from "react";

import React, { memo } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

import ListItem from "@/components/ui/services/list";

const Lists = [
  {
    title: "创建一个 Next.js 应用",
    description:
      "要创建 Next.js 应用，请打开你的终端窗口，cd 进入您要在其中创建应用程序的目录，然后运行以下命令：",
  },
  {
    title: "运行开发服务器",
    description:
      "现在，您有了一个名为 nextjs-blog 的新目录。让我们 cd 进入此目录：这将在 3000 端口上启动 Next.js 应用程序的“开发服务器”（稍后将对此进行详细介绍）。",
  },
  {
    title: "欢迎进入 Next.js",
    description:
      "访问 http://localhost:3000 地址时，你应该会看到类似下面的页面。这是 starter template 页面所显示的一些有关 Next.js 的有用信息。",
  },
  {
    title: "编辑页面",
    description:
      "让我们尝试编辑这个初始页面。\n" +
      "\n" +
      "确保 Next.js 开发服务器仍在运行。\n" +
      "用你的文本编辑器打开 pages/index.js 文件。\n" +
      "在 <h1> 标签下找到 “Welcome to” 字样并将其修改为 “Learn”。\n" +
      "保存文件。\n" +
      "保存文件后，浏览器会自动重新加载并使用新的文本更新页面：",
  },
];

const Services: FC = () => {
  return (
    <div
      className={"  mx-auto flex flex-col gap-4 justify-between items-center"}
    >
      <motion.div
        className={"flex justify-end gap-4 py-12 items-center w-full"}
      >
        <motion.div className={"w-full flex flex-col items-end  opacity-70"}>
          <motion.p>我们的使命是赋能品牌进化，</motion.p>
          <motion.p> 以清晰的愿景和周密的计划，引领其迈向卓越。</motion.p>
        </motion.div>
        <motion.div className={"w-1/3 bg-foreground/50 h-[1px]"} />
      </motion.div>

      <motion.div className={"  flex flex-col py-16 "}>
        <motion.div className={clsx("flex gap-4 items-center  justify-end")}>
          <img
            alt={"Missing"}
            className={"  w-72 h-28 rounded-full mr-8 object-cover"}
            src={"/people.webp"}
          />
          <motion.p className={"font-black text-8xl title"}>独特的</motion.p>
          <motion.p className={"font-thin  text-8xl"}>解决方案</motion.p>
        </motion.div>
        <motion.div className={clsx("flex gap-8 items-center justify-center")}>
          <motion.p className={"font-black text-8xl title"}>For Your</motion.p>
          <motion.p className={"font-thin text-8xl"}>Business.</motion.p>
          <motion.button
            className={
              "px-14 py-9 border-2 rounded-full text-2xl  text-black dark:bg-yellow-500"
            }
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
          >
            我们能做什么？
          </motion.button>
          {/*<SparkleButton onClick={() => console.log("Clicked!")}>*/}
          {/*  我们能做什么?*/}
          {/*</SparkleButton>*/}
        </motion.div>
      </motion.div>
      <div>
        <ul className={"flex mx-auto max-w-[1440px] "}>
          {Lists.map((item, index) => {
            return (
              <ListItem
                key={index}
                description={item.description}
                title={item.title}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default memo(Services);
