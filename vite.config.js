import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
    tailwindcss(),
    react(),
  ],
  server: {
    host: "0.0.0.0", // Allows access from other devices
    port: 5173, // You can change this if needed
    strictPort: true, // Ensures the port is not randomly changed
  },
});
