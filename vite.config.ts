import { defineConfig } from "vite"
import EnvironmentPlugin from "vite-plugin-environment"
import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), EnvironmentPlugin("all")],
})
