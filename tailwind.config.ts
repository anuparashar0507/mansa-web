import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...fontFamily.sans],
      },
      colors: {
        brand: "#0F508D",
        // 'red': '#BE1E2D',
        // 'purple': '#7e5bef',
        // 'pink': '#ff49db',
        // 'orange': '#ff7849',
        // 'green': '#009444',
        // 'yellow': '#FFCD03',
        // 'gray-dark': '#273444',
        // 'gray': '#8492a6',
        // 'gray-light': '#d3dce6',
      },
    },
  },
  plugins: [require("daisyui"), require("@headlessui/tailwindcss")],
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light", // name of one of the included themes for dark mode
    // base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
} satisfies Config;
