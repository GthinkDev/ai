"use client";

import { FC, memo, useRef } from "react";
import React from "react";
import { motion, useSpring } from "framer-motion";
import { useScroll } from "motion/react";

import PortfolioImage1 from "@/assets/Hero header/PortfolioImage01.png";
import PortfolioImage2 from "@/assets/Hero header/PortfolioImage02.png";
import PortfolioImage3 from "@/assets/Hero header/PortfolioImage03.png";
import PortfolioImage4 from "@/assets/Hero header/PortfolioImage04.png";
import PortfolioImage5 from "@/assets/Hero header/PortfolioImage05.png";
import Items from "@/components/ui/portfolio/PortfolioItems";

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: any; // 或者使用更具体的类型，如 string | undefined
}

const PortfolioItem: PortfolioItem[] = [
  {
    id: "1",
    title: "阿里巴巴 - 淘宝",
    description:
      "产品介绍：淘宝\n" +
      "淘宝是一个典型的C2C（个人对个人）在线购物平台，以其丰富的商品种类、活跃的社交属性和强大的个性化推荐而闻名。\n" +
      "\n" +
      "核心功能：\n" +
      "\n" +
      "万能的商品市场：从全新商品到特色手工艺品、闲置二手物品，几乎可以找到任何你想购买的东西。\n" +
      "\n" +
      "互动式购物体验：集成“微淘”（内容种草）、直播带货（淘宝直播）、买家秀社区等功能，将购物与内容、社交深度融合。\n" +
      "\n" +
      "个性化推荐：利用大数据分析用户行为，精准推荐可能感兴趣的商品和店铺。\n" +
      "\n" +
      "阿里巴巴生态支持：与支付宝（担保交易）、菜鸟网络（智慧物流）无缝集成，为用户提供安全、便捷的一站式购物体验。\n" +
      "\n" +
      "产品愿景：成为一家消费主义和快乐主义的公司。\n" +
      "\n" +
      "定位：中国领先的线上零售与生活社区平台。",
    image: PortfolioImage1.src,
  },
  {
    id: "2",
    title: "字节跳动 - TikTok",
    description:
      "产品介绍：TikTok（抖音国际版）\n" +
      "TikTok 是一款风靡全球的短视频社交平台，允许用户创建、分享和发现时长为15秒到10分钟的创意短视频。\n" +
      "\n" +
      "核心功能：\n" +
      "\n" +
      "沉浸式“For You”流：基于先进AI算法的推荐系统，为用户提供高度个性化的无限内容流，让用户不断发现感兴趣的新内容。\n" +
      "\n" +
      "丰富的创作工具：提供海量的滤镜、美颜效果、贴纸、AR特效以及庞大的版权音乐库，极大降低了视频创作的门槛。\n" +
      "\n" +
      "病毒式挑战与趋势：通过“标签挑战”等形式，快速引爆全球性的文化潮流和 meme（模因），促进社区互动。\n" +
      "\n" +
      "直播与电商融合：创作者可以通过直播获得打赏，并通过“TikTok Shop”功能直接向粉丝销售商品，实现内容变现。\n" +
      "\n" +
      "产品愿景：激发创造，带来欢乐（Inspire Creativity and Bring Joy）。\n" +
      "\n" +
      "定位：面向Z世代及年轻群体的全球性短视频娱乐社区。",
    image: PortfolioImage2.src,
  },
  {
    id: "3",
    title: "腾讯 - 微信 (WeChat)",
    description:
      "产品介绍：微信 (WeChat)\n" +
      "微信最初是一款即时通讯应用，现已发展成为一个集社交、支付、内容、生活服务于一体的“超级应用”（Super App），是中国用户日常生活中不可或缺的工具。\n" +
      "\n" +
      "核心功能：\n" +
      "\n" +
      "综合通信：支持文字、语音、视频通话、群聊等多种通信方式。\n" +
      "\n" +
      "朋友圈：用户分享生活点滴的社交空间，强化了熟人社交链。\n" +
      "\n" +
      "微信支付：深度融合的移动支付功能，支持线上线下消费、转账、收款，重塑了中国人的支付习惯。\n" +
      "\n" +
      "小程序：无需下载安装即可使用的“轻应用”，让用户能在微信生态内直接使用各种服务（如点餐、打车、购物），是“应用中的应用”。\n" +
      "\n" +
      "公众号：为企业和内容创作者提供信息发布和用户互动的平台。\n" +
      "\n" +
      "产品愿景：微信是一个生活方式。\n" +
      "\n" +
      "定位：连接一切的超级生态平台与数字生活助手。",
    image: PortfolioImage3.src,
  },
  {
    id: "4",
    title: "网易 - 网易云音乐",
    description:
      "产品介绍：网易云音乐\n" +
      "网易云音乐是一款以“歌单”为核心、注重音乐发现与分享、并拥有浓厚社区氛围的音乐流媒体平台。\n" +
      "\n" +
      "核心功能：\n" +
      "\n" +
      "UGC歌单系统：用户可以根据自己的喜好创建和分享歌单，其他用户可以通过收藏、分享歌单来发现音乐，这是其最核心的差异化功能。\n" +
      "\n" +
      "精准的“每日推荐”：基于算法和用户行为，每天为用户生成一份高度个性化的歌曲推荐列表，广受好评。\n" +
      "\n" +
      "“评论区”社区文化：歌曲下方的评论区形成了独特的社区文化，用户在此分享故事、情感和感悟，成为产品的灵魂所在。\n" +
      "\n" +
      "独立音乐人扶持：提供“云村”等平台，帮助独立音乐人发布作品、与粉丝互动，构建了良好的音乐人生态。\n" +
      "\n" +
      "产品愿景：点亮音乐美好，打造专业音乐氛围，助推中国音乐发展。\n" +
      "\n" +
      "定位：专注于音乐发现与分享的社区化音乐平台。",
    image: PortfolioImage4.src,
  },
  {
    id: "5",
    title: "Notion Labs - Notion",
    description:
      "产品介绍：Notion\n" +
      "Notion 是一款将笔记、知识库、任务管理、数据库、日程表等功能无缝整合于一体的协作工作平台。其核心是高度灵活的“模块化”编辑器。\n" +
      "\n" +
      "核心功能：\n" +
      "\n" +
      "模块化编辑器（Blocks）：所有内容（文本、列表、图片、表格、看板、数据库等）都以“块”的形式存在，可以像乐高一样自由拖拽、组合和嵌套，构建任何需要的页面结构。\n" +
      "\n" +
      "一体化工作空间：取代了多个独立工具（如Word、Excel、Trello、Confluence），在一个地方管理个人和团队的所有工作和知识。\n" +
      "\n" +
      "强大的数据库：可以创建多种视图（看板、日历、列表、画廊等）的数据库，来灵活地管理项目、任务、文档等。\n" +
      "\n" +
      "强大的模板生态：拥有由官方和社区创建的庞大模板库，用户可以快速套用，用于做笔记、项目管理、制定计划等。\n" +
      "\n" +
      "无缝协作：支持实时协作、评论和权限管理，非常适合远程团队。\n" +
      "\n" +
      "产品愿景：打造一个将笔记、任务、数据库整合于一体的终极工作空间。\n" +
      "\n" +
      "定位：面向个人和团队的一体化生产力与协作平台。",
    image: PortfolioImage5.src,
  },
];

const Portfolio: FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <motion.div
      ref={ref}
      className={
        " flex flex-col gap-8  justify-start pt-20 pb-[400px] relative"
      }
    >
      <div
        className={
          "sticky h-full top-14 dark:bg-gray-900/90 bg-gray-100/90 z-[50] glass"
        }
      >
        <h1 className={"text-7xl w-full text-center title font-black "}>
          已完成的产品
        </h1>
        <motion.div
          className={"h-2  sticky top-20 z-20 buttonBg"}
          style={{ scaleX }}
        />
      </div>
      <motion.ul
        className={
          "w-full flex flex-col  z-10 gap-12 justify-start items-center overflow-hidden"
        }
      >
        {PortfolioItem.map((item) => {
          return (
            <Items
              key={item.id}
              description={item.description}
              image={item.image}
              title={item.title}
            />
          );
        })}
      </motion.ul>
    </motion.div>
  );
};

export default memo(Portfolio);
