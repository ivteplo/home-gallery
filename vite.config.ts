import { defineConfig } from "vite"
import solidPlugin from "vite-plugin-solid"

export default defineConfig(({ mode }) => ({
  root: "./app",
  plugins: [solidPlugin()],
  server:
    mode !== "development"
      ? {}
      : {
          proxy: {
            "/api": "http://localhost:8080",
          },
        },
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
}))
