import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        navblack: "#181414",
        navsearch: "#302c2c",
        ragered: "#d8343c",
        ragewhite: "#e8e4e4",
        bgblack: "#201c1c",
        divblack: "#0a0a0a",
        titlegray: "#dbd9d6",
        wheat: "#F2D6AA",
        buff: "#EDB87C",
        burntsienna: "#D58B71",
        bole: "#7A5043",
        wwhite: "#EFF1F3",
        auburn: "#96272A",
        wine: "#65292A",
        vandyke: "#3A2929",
        licorice: "#26191D",
      },
      spacing: {
        navheight: "80px",
      },
      fontFamily: {
        ffmark: ["FF Mark Pro"],
      },
      boxShadow: {
        heroBtn:
          "0 10px 45px -10px rgba(11, 196, 226, .15), 0 0 20px -10px rgba(11, 196, 226, .35), 0 10px 30px -10px rgba(11, 196, 226, .25);",
      },
    },
  },
  plugins: [],
};
export default config;
