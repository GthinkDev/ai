"use client";

import { FC, useRef } from "react";
import React, { memo } from "react";
import { motion, useInView } from "framer-motion";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const variants = {
  initial: {
    opacity: 0,
    y: 500,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, staggerChildren: 0.1 },
  },
};

const Contact: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-10px" });

  return (
    <motion.div
      ref={ref}
      className={"container flex gap-12 justify-center items-center "}
      initial={"initial"}
      variants={variants}
      whileInView={"animate"}
    >
      <motion.div
        className={
          "flex-1 items-start justify-center h-full gap-20 flex flex-col "
        }
        variants={variants}
      >
        <motion.div className={"text-start w-full"} variants={variants}>
          <motion.h1
            className={"text-7xl font-bold opacity-70 "}
            variants={variants}
          >
            联系我们，一起合作吧！
          </motion.h1>
        </motion.div>
        <motion.div className={"flex flex-col gap-10"} variants={variants}>
          <motion.div className={"flex flex-col gap-1"}>
            <h1 className={"text-2xl font-bold"}>联系电话</h1>
            <p className={"text-xl"}>189-0867-9191</p>
          </motion.div>
          <motion.div className={"flex flex-col gap-1"} variants={variants}>
            <h1 className={"text-2xl font-bold"}>联系地址</h1>
            <p className={"text-xl"}>湖北省襄阳市襄城区卧龙大道 188 号</p>
          </motion.div>
          <motion.div className={"flex flex-col gap-1"} variants={variants}>
            <h1 className={"text-2xl font-bold"}>电子邮箱</h1>
            <p className={"text-xl"}>gthinkdesign520@gmail.com</p>
          </motion.div>
        </motion.div>
      </motion.div>
      <div className={"flex-1 justify-end items-end relative"}>
        <motion.div
          className={
            "text-blue-500 dark:text-yellow-400 z-0 w-full h-full absolute m-auto "
          }
          initial={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          whileInView={{ opacity: 0 }}
        >
          <svg className="w-full h-full m-auto" fill="none" viewBox="0 0 24 24">
            <motion.path
              animate={isInView && { pathLength: 1 }}
              d="M14.5 6.5C15.2372 6.64382 15.9689 6.96892 16.5 7.5C17.0311 8.03108 17.3562 8.76284 17.5 9.5M15 3C16.5315 3.17014 17.9097 3.91107 19 5C20.0903 6.08893 20.8279 7.46869 21 9M20.9995 16.4767V19.1864C21.0037 20.2223 20.0723 21.0873 19.0265 20.9929C10.0001 21 3.00006 13.935 3.00713 4.96919C2.91294 3.92895 3.77364 3.00106 4.80817 3.00009H7.52331C7.96253 2.99577 8.38835 3.151 8.72138 3.43684C9.66819 4.24949 10.2772 7.00777 10.0429 8.10428C9.85994 8.96036 8.99696 9.55929 8.41026 10.1448C9.69864 12.4062 11.5747 14.2785 13.8405 15.5644C14.4272 14.9788 15.0274 14.1176 15.8851 13.935C16.9855 13.7008 19.7615 14.3106 20.5709 15.264C20.858 15.6021 21.0105 16.0337 20.9995 16.4767Z"
              initial={{ pathLength: 0 }}
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0.5"
              transition={{ duration: 2 }}
            />
          </svg>
        </motion.div>
        <div className="relative  w-full">
          <motion.div
            className={
              "text-blue-500 dark:text-yellow-400 z-0 w-full h-full absolute m-auto "
            }
            initial={{ opacity: 1 }}
            transition={{ delay: 1, duration: 3 }}
            whileInView={{ opacity: 0 }}
          >
            <svg
              className="w-full h-full m-auto z-10"
              fill="none"
              viewBox="0 0 24 24"
            >
              <motion.path
                animate={isInView && { pathLength: 1 }}
                d="M14.5 6.5C15.2372 6.64382 15.9689 6.96892 16.5 7.5C17.0311 8.03108 17.3562 8.76284 17.5 9.5M15 3C16.5315 3.17014 17.9097 3.91107 19 5C20.0903 6.08893 20.8279 7.46869 21 9M20.9995 16.4767V19.1864C21.0037 20.2223 20.0723 21.0873 19.0265 20.9929C10.0001 21 3.00006 13.935 3.00713 4.96919C2.91294 3.92895 3.77364 3.00106 4.80817 3.00009H7.52331C7.96253 2.99577 8.38835 3.151 8.72138 3.43684C9.66819 4.24949 10.2772 7.00777 10.0429 8.10428C9.85994 8.96036 8.99696 9.55929 8.41026 10.1448C9.69864 12.4062 11.5747 14.2785 13.8405 15.5644C14.4272 14.9788 15.0274 14.1176 15.8851 13.935C16.9855 13.7008 19.7615 14.3106 20.5709 15.264C20.858 15.6021 21.0105 16.0337 20.9995 16.4767Z"
                initial={{ pathLength: 0 }}
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0.5"
                transition={{ duration: 2 }}
              />
            </svg>
          </motion.div>
          <motion.form
            action="/contact"
            className={"flex flex-col gap-6 z-50 "}
            initial={{ opacity: 0 }}
            transition={{ delay: 3, duration: 1 }}
            whileInView={{ opacity: 1 }}
          >
            <Input
              className={" h-16 rounded-none"}
              placeholder={"姓名"}
              type={"text"}
            />
            <Input
              className={" h-16 rounded-none"}
              placeholder={"联系方式"}
              type={"textarea"}
            />
            <Textarea
              className={"h-40 rounded-none"}
              placeholder="备注一下方便我们联系"
            />
            <motion.button
              animate={{ visibility: "visible" }}
              className={"px-12 py-4 buttonBg w-full text-background"}
              initial={{ visibility: "hidden" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.5 }}
            >
              发送信息
            </motion.button>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
};

export default memo(Contact);
