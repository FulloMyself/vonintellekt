import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Replace 'vonintellekt' with your GitHub repo name
export default defineConfig({
  base: "/vonintellekt/",
  plugins: [react()],
});
