import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",

  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#FAFAF8",
          dim: "#F0EEE7",
        },

        ink: {
          DEFAULT: "#0E1310",
          soft: "#171D1A",
          muted: "#3A423E",
        },

        teal: {
          50: "#EAF6F6",
          100: "#CFEBEA",
          300: "#6FD1CF",
          400: "#2FA9AC",
          500: "#0E7C86",
          600: "#0B646C",
          700: "#094E54",
          900: "#052A2D",
        },
      },

      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jbmono)", "monospace"],
      },

      letterSpacing: {
        tightest: "-0.045em",
      },

      maxWidth: {
        prose: "68ch",
      },

      keyframes: {
        /* Existing animations */
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(14px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        "line-grow": {
          "0%": {
            transform: "scaleX(0)",
          },
          "100%": {
            transform: "scaleX(1)",
          },
        },

        /* Glowing dots movement */
        float: {
          "0%, 100%": {
            transform: "translate(0px, 0px)",
          },

          "50%": {
            transform: "translate(var(--tx), var(--ty))",
          },
        },

        /* Glowing dots twinkle */
        twinkle: {
          "0%, 100%": {
            opacity: "0.2",
            transform: "scale(0.8)",
          },

          "50%": {
            opacity: "1",
            transform: "scale(1.4)",
          },
        },
      },

      animation: {
        "fade-up":
          "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",

        "line-grow":
          "line-grow 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards",

        "pulse-slow":
          "pulse 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite",

        /* Glowing dots */
        float: "float 12s ease-in-out infinite",

        twinkle: "twinkle 3.5s ease-in-out infinite",
      },
    },
  },

  plugins: [],
};

export default config;