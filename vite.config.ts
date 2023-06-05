import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import eslint from "vite-plugin-eslint";

import type { UserConfig as VitestUserConfigInterface } from "vitest/config";

const vitestConfig: VitestUserConfigInterface = {
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./setupVitest.js"],
    mockReset: true
  }
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  test: vitestConfig.test
});
