/**
 * ロゴ
 */
const AppLogo = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="40" height="40" rx="6" fill="url(#paint0_linear)" />
    <path
        d="M10 10
        v20
        a10 10 0 0 0 10 10
        h10
        a10 10 0 0 1 0 -20
        h-10
        a10 10 0 0 0 -10 10
        Z"
      fill="white"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="0"
        y1="20"
        x2="40"
        y2="20"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2E7D32" />
        <stop offset="1" stopColor="#388E3C" />
      </linearGradient>
    </defs>
  </svg>
)

export default AppLogo
