import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        iceblue: {
          50: "#ECFAFF",
          100: "#D6EFFF",
          200: "#B3E0FF",
          300: "#80CCFF",
          400: "#4DB7FF",
          500: "#1AA3FF",
          600: "#0082D1",
          700: "#00639E",
          800: "#004C7A",
          900: "#003457",
        },
        charcoal: {
          50: "#EAEAEA",
          100: "#D5D5D5",
          200: "#ABABAB",
          300: "#818181",
          400: "#575757",
          500: "#2D2D2D",
          600: "#1C1C1C",
          700: "#121212",
          800: "#0A0A0A",
          900: "#050505",
        },
        platinum: {
          50: "#FFFFFF",
          100: "#F5FAFA",
          200: "#E2F3F4",
          300: "#C2E5E7",
          400: "#9ED1D4",
          500: "#77BDC1",
          600: "#51A7AC",
          700: "#3D8A8F",
          800: "#2A6366",
          900: "#173B3D",
        },
        gold: {
          50: "#FDF7E2",
          100: "#FCF0C5",
          200: "#F9E08B",
          300: "#F7D152",
          400: "#F4C118",
          500: "#F59E0B",
          600: "#C47D09",
          700: "#935E07",
          800: "#623E04",
          900: "#311F02",
        },
        navy: {
          50: "#EEF1F7",
          100: "#DDE4EF",
          200: "#BBC9DF",
          300: "#99AECF",
          400: "#7792BF",
          500: "#5577AF",
          600: "#445F8C",
          700: "#334769",
          800: "#223046",
          900: "#0F172A",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-out": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(10px)" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "text-reveal": {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        spinner: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "bounce-gentle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "blur-in": {
          "0%": { filter: "blur(8px)", opacity: "0" },
          "100%": { filter: "blur(0)", opacity: "1" },
        },
        "rotate-center": {
          "0%": { transform: "rotate(0)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "grid-flow": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "fade-out": "fade-out 0.5s ease-out forwards",
        "slide-in-right": "slide-in-right 0.5s ease-out forwards",
        "text-reveal": "text-reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        spinner: "spinner 1.5s linear infinite",
        "pulse-slow": "pulse-slow 2s ease-in-out infinite",
        "bounce-gentle": "bounce-gentle 2s ease-in-out infinite",
        "scale-in": "scale-in 0.5s ease-out forwards",
        "blur-in": "blur-in 0.5s ease-out forwards",
        "rotate-center": "rotate-center 20s linear infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
        "grid-flow": "grid-flow 3s linear infinite alternate",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
