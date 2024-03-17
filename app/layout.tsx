import "./css/style.css";

import { Inter, Architects_Daughter } from "next/font/google";

import Header from "@/components/ui/header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const architects_daughter = Architects_Daughter({
  subsets: ["latin"],
  variable: "--font-architects-daughter",
  weight: "400",
  display: "swap",
});

export const metadata = {
  title:
    "成都市私家侦探-成都调查取证-成都婚外恋调查-成都小三调查-成都精锐鑫诚商务信息咨询有限公司",
  description:
    "侦探公司, 出轨调查, 婚姻调查, 隐私调查, 婚前调查, 婚后调查, 家庭调查, 爱情调查, 知情调查, 业务调查, 调查服务, 隐私保护, 网上取证, 数字取证, 个人背景调查, 搜寻失踪人口, 信任建设, 婚姻危机, 家庭纠纷解决, 法律支持",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}
      >
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          {children}
          {/* <Banner /> */}
        </div>
      </body>
    </html>
  );
}
