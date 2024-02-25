import { defineConfig } from "cypress"

export default defineConfig({
  component: {
    defaultCommandTimeout: 10000,
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
