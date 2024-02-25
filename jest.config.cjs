/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.vue$": "@vue/vue3-jest",
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    ".(css|less)$": "<rootDir>/__mocks__/styleMock.ts",
  },
  moduleFileExtensions: ["json", "js", "jsx", "ts", "tsx", "vue"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  globals: { "ts-jest": { diagnostics: false } },
  transformIgnorePatterns: ["/node_modules/(?!vue3-toastify|vue-i18n)"],
}
