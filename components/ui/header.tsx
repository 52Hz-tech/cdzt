import Link from "next/link";
import MobileMenu from "./mobile-menu";

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
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

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/"
                  className="font-medium hover:text-purple-600 text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  19181999818
                </Link>
              </li>
              {/* <li>
                <Link href="/signup" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
                  Sign up
                </Link>
              </li>  */}
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
