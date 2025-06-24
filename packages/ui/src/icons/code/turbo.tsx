import type { SVGProps } from "react";
export const Turbo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 32 32"
    {...props}
  >
    <defs>
      <linearGradient
        id="linear-gradient"
        x1="-209.59"
        y1="167.02"
        x2="-223.36"
        y2="153.25"
        gradientTransform="matrix(1, 0, 0, -1, 234, 178)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#0096ff" />
        <stop offset="1" stopColor="#ff1e56" />
      </linearGradient>
    </defs>
    <title>file_type_turbo</title>
    <path
      d="M16.1,6.9A9.1,9.1,0,1,0,25.2,16,9.11,9.11,0,0,0,16.1,6.9Zm0,13.81A4.71,4.71,0,1,1,20.81,16,4.71,4.71,0,0,1,16.1,20.71Z"
      fill="#f5f5f5"
    />
    <path
      d="M16.86,5.41V2a14,14,0,0,1,0,28v-3.4a10.62,10.62,0,0,0,0-21.18ZM8.08,23a10.61,10.61,0,0,1-2.57-6.19H2.11a13.93,13.93,0,0,0,3.56,8.59L8.07,23Zm7.26,7v-3.4A10.6,10.6,0,0,1,9.15,24l-2.4,2.4A13.93,13.93,0,0,0,15.34,30Z"
      fill="url(#linear-gradient)"
      fillRule="evenodd"
    />
  </svg>
);
