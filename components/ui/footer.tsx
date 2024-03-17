import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">
            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                {/* Logo */}
                <Link href="/" className="inline-block" aria-label="Cruip">
                  <svg width="108" height="24" viewBox="0 0 300 70">
                    <defs id="SvgjsDefs2172">
                      <linearGradient id="SvgjsLinearGradient2177">
                        <stop
                          id="SvgjsStop2178"
                          stopColor="#616161"
                          offset="0"
                        ></stop>
                        <stop
                          id="SvgjsStop2179"
                          stopColor="#e6e7e8"
                          offset="0.5"
                        ></stop>
                        <stop
                          id="SvgjsStop2180"
                          stopColor="#616161"
                          offset="1"
                        ></stop>
                      </linearGradient>
                      <linearGradient id="SvgjsLinearGradient2181">
                        <stop
                          id="SvgjsStop2182"
                          stopColor="#616161"
                          offset="0"
                        ></stop>
                        <stop
                          id="SvgjsStop2183"
                          stopColor="#e6e7e8"
                          offset="0.5"
                        ></stop>
                        <stop
                          id="SvgjsStop2184"
                          stopColor="#616161"
                          offset="1"
                        ></stop>
                      </linearGradient>
                    </defs>
                    <g
                      id="SvgjsG2173"
                      // featurekey="symbolFeature-0"
                      transform="matrix(0.07442291466279956,0,0,0.07442291466279956,-0.003721142184378865,0)"
                      fill="url(#SvgjsLinearGradient2177)"
                    >
                      <g xmlns="http://www.w3.org/2000/svg">
                        <path d="M537.5,12.5l-10.9-6.2L1.7,925c-2.2,3.9-2.2,8.6,0,12.5c2.2,3.9,6.3,6.2,10.8,6.2h1050c4.5,0,8.6-2.4,10.8-6.2   s2.3-8.6,0-12.5L548.4,6.3C546.1,2.4,542,0,537.5,0c-4.5,0-8.6,2.4-10.9,6.3L537.5,12.5l-10.9,6.2l514.3,900H34l514.3-900   L537.5,12.5l-10.9,6.2L537.5,12.5z"></path>
                        <path d="M537.5,177.9l-10.9-6.2L143,843c-2.2,3.9-2.2,8.6,0,12.5c2.2,3.9,6.3,6.2,10.8,6.2h767.3c4.5,0,8.6-2.4,10.8-6.2   c2.2-3.9,2.3-8.6,0-12.5L548.4,171.7c-2.2-3.9-6.4-6.3-10.9-6.3s-8.6,2.4-10.9,6.3L537.5,177.9l-10.9,6.2l373,652.7H175.4   l373-652.7L537.5,177.9l-10.9,6.2L537.5,177.9z M537.5,343.2l-10.9,6.2l231.6,405.3H316.8l231.6-405.3L537.5,343.2l-10.9,6.2   L537.5,343.2l-10.9-6.2L284.4,761c-2.2,3.9-2.2,8.6,0,12.5s6.3,6.2,10.8,6.2h484.6c4.5,0,8.6-2.4,10.8-6.2s2.3-8.6,0-12.5   L548.4,337c-2.2-3.9-6.4-6.3-10.9-6.3c-4.5,0-8.6,2.4-10.9,6.3L537.5,343.2z"></path>
                        <path d="M436.6,685.2l10.9,6.2l90.1-157.7l79.4,139l-180.3,0V685.2l10.9,6.2L436.6,685.2v12.5h201.9c4.5,0,8.6-2.4,10.8-6.2   c2.2-3.9,2.3-8.6,0-12.5L548.4,502.3c-2.2-3.9-6.4-6.3-10.9-6.3s-8.6,2.4-10.9,6.3L425.7,679c-2.2,3.9-2.2,8.6,0,12.5   c2.2,3.9,6.3,6.2,10.8,6.2V685.2z"></path>
                      </g>
                    </g>
                    <g
                      id="SvgjsG2174"
                      // featurekey="nameFeature-0"
                      transform="matrix(1.5242043256181963,0,0,1.5242043256181963,100.00000290718904,-4.229472163781264)"
                      fill="url(#SvgjsLinearGradient2181)"
                    >
                      <path d="M30.6 11.96 l0 9.4 l-17.2 0 c-2.36 0.2 -4.16 2.24 -4.16 4.64 s1.8 4.36 4.16 4.64 l10.96 0 l0 3.12 l-10.96 0 c-4.04 -0.32 -7.24 -3.64 -7.24 -7.8 c0 -4 3.08 -7.4 7.08 -7.72 l14.24 0 l0 -3.16 l-14.08 0 l0 0.04 c-5.72 0.32 -10.28 5.04 -10.28 10.88 c0 5.8 4.56 10.56 10.28 10.88 l14.08 0 l0 -6.24 l3.12 0 l0 9.36 l-17.2 0 c-7.48 -0.32 -13.4 -6.48 -13.4 -14 c0 -7.56 5.92 -13.68 13.4 -14 z M34.032000000000004 11.96 l17.2 0 c7.48 0.32 13.4 6.48 13.4 14 c0 7.56 -5.92 13.72 -13.4 14.04 l-17.2 0 l0 -21.8 l17.2 0 c4.04 0.32 7.24 3.64 7.24 7.8 c0 4 -3.08 7.44 -7.08 7.76 l-11.12 0 l0 -9.84 l3.12 0 l0 6.72 l7.84 -0.04 c2.36 -0.2 4.16 -2.24 4.16 -4.6 c0 -2.04 -1.28 -3.72 -3.08 -4.4 c-0.68 -0.28 -1.08 -0.28 -2.16 -0.28 l-13 0 l0 15.56 l14.08 0 c5.72 -0.32 10.28 -5.04 10.28 -10.92 c0 -5.8 -4.56 -10.56 -10.28 -10.88 l-17.2 0 l0 -3.12 z M66.464 11.96 l30.72 0 l-12.88 18.68 l12.76 0 l0 9.36 l-30.6 0 l15.04 -21.84 l3.84 0 l-12.92 18.72 l21.52 0 l0 -3.08 l-15.6 -0.04 l12.88 -18.68 l-21.64 0 l0 3.12 l8.08 0 l-2.16 3.12 l-9.04 0 l0 -9.36 z M100.616 21.32 l0 -9.36 l30.6 0 l0 9.36 l-7.52 0 l0 -3.12 l4.4 0 l0 -3.12 l-24.36 0 l0 3.12 l10.64 0 l-0.04 18.68 l3.12 0 l0 -18.68 l3.12 0 l0 21.8 l-9.36 0 l0 -18.68 l-10.6 0 z"></path>
                    </g>
                  </svg>
                </Link>
              </div>
              <div className="text-gray-400">
                我们是一家侦探公司, 提供出轨调查, 婚姻调查, 隐私调查, 婚前调查,
                婚后调查, 家庭调查, 爱情调查, 知情调查, 业务调查, 调查服务,
                隐私保护, 网上取证, 数字取证, 个人背景调查, 搜寻失踪人口,
                信任建设, 婚姻危机, 家庭纠纷解决, 法律支持等服务
              </div>
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">
              {/* 2nd block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">业务范围</h6>
                <ul>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      出轨调查
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      婚姻调查
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      隐私调查
                    </Link>
                  </li>
                </ul>
              </div>

              {/* 3rd block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">婚姻业务</h6>
                <ul>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      婚前调查
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      婚后调查
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      家庭调查
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      爱情调查
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      婚姻危机
                    </Link>
                  </li>
                </ul>
              </div>

              {/* 4th block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">其他</h6>
                <ul>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      个人背景调查
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      搜寻失踪人口
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      家庭纠纷解决
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="md:flex md:items-center md:justify-center">
            {/* Social links */}
            {/* <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              <li>
                <Link
                  href="/"
                  className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link
                  href="/"
                  className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                  aria-label="Github"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link
                  href="/"
                  className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link
                  href="/"
                  className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="20.145" cy="11.892" r="1" />
                    <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                    <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link
                  href="/"
                  className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                  aria-label="Linkedin"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                  </svg>
                </Link>
              </li>
            </ul> */}

            <div className="text-gray-400 text-sm mr-4">
              &copy; 2024 蜀ICP备2024047553号
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
