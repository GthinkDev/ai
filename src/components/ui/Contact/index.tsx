"use client";

import { FC, useRef, useState } from "react";
import React, { memo } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import { RefreshCcw } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

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
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const formRef = useRef(null);

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    emailjs
      .sendForm("service_yzug9o9", "template_zomdg4z", formRef.current as any, {
        publicKey: "PfoD6AQO6f6kwubSC",
      })
      .then(
        () => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        },
      );
  };

  return (
    <motion.div
      ref={ref}
      className={"container flex gap-16 justify-center items-center "}
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
            className={"text-5xl font-bold opacity-70 "}
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
      <div className={"flex-1 justify-end relative items-end top-4"}>
        <motion.div
          className={
            "text-blue-500 dark:text-yellow-400 z-0 w-full h-full absolute m-auto "
          }
          initial={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
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
        {/* 表单容器 */}
        <motion.form
          ref={formRef}
          action=""
          className={"flex flex-col gap-6 relative z-50  w-full "}
          initial={{ opacity: 0 }}
          transition={{ delay: 2, duration: 1 }}
          whileInView={{ opacity: 1 }}
          onSubmit={sendEmail}
        >
          <Input
            required
            className={" h-16 rounded-none  p-4"}
            name={"name"}
            placeholder={"姓名"}
            type={"text"}
          />
          <Input
            required
            className={" h-16 rounded-none  p-4"}
            name={"email"}
            placeholder={"联系方式"}
            type={"textarea"}
          />
          <Textarea
            className={"h-40 rounded-none p-4"}
            name={"message"}
            placeholder="备注一下方便我们联系"
          />
          <div className={"flex gap-4 "}>
            <motion.button
              animate={{ visibility: "visible" }}
              className={
                " py-5 buttonBg w-full text-background disabled:bg-yellow-800"
              }
              disabled={isSubmitting}
              initial={{ visibility: "hidden" }}
              type="submit"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.5 }}
            >
              {isSubmitting ? "发送中..." : "信息已发送"}
            </motion.button>
            <Button
              className={
                "buttonBg w-16 h-16  flex justify-center items-center text-2xl rounded-none text-foreground "
              }
              size={"icon"}
              type="button"
              variant={"outline"}
              onClick={() => {
                if (success) {
                  window.location.reload();
                }
              }}
            >
              <RefreshCcw className={"w-6 h-6"} />
            </Button>
          </div>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default memo(Contact);
