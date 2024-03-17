export const metadata = {
  title: "成都市私家侦探-成都调查取证-成都婚外恋调查-成都小三调查",
  description:
    "侦探公司, 出轨调查, 婚姻调查, 隐私调查, 婚前调查, 婚后调查, 家庭调查, 爱情调查, 知情调查, 业务调查, 调查服务, 隐私保护, 网上取证, 数字取证, 个人背景调查, 搜寻失踪人口, 信任建设, 婚姻危机, 家庭纠纷解决, 法律支持",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import Newsletter from "@/components/newsletter";
import Zigzag from "@/components/zigzag";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Testimonials />
      <Newsletter />
    </>
  );
}
