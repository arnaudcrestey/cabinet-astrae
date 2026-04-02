import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sage: "#A8BFA3",
        pine: "#4F6F52",
        sand: "#F4F1EA",
        ivory: "#FAF9F6",
        terracotta: "#D6A77A",
        umber: "#7A5C4D"
      },
      boxShadow: {
        soft: "0 8px 30px rgba(79,111,82,0.08)"
      },
      maxWidth: {
        prosewide: "72rem"
      }
    }
  },
  plugins: []
};

export default config;
