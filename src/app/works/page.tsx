"use client";

import { FC, memo, useEffect } from "react";
import React from "react";
import axios from "axios";
import error from "eslint-plugin-react/lib/util/error";

const About: FC = () => {
  useEffect(() => {
    // 定义并立即调用异步函数
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8088/list");

        console.log(response);
      } catch {
        console.error("请求失败:", error);
        // setTodos([]); // 错误时也设置为数组
      }
    };

    fetchData(); // 调用函数
  }, []);

  return <div className={"h-screen"}>{/*<Loading />*/}</div>;
};

export default memo(About);
