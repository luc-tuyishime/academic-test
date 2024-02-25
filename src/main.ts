import { createApp } from "vue"
import Vue3Toastify, { type ToastContainerOptions } from "vue3-toastify"
import i18n from "./i18n"
import { createPinia } from "pinia"
import router from "./router"
import "./style.css"
import App from "./App.vue"

const pinia = createPinia()
createApp(App)
  .use(pinia)
  .use(router)
  .use(i18n)
  .use(Vue3Toastify, {
    autoClose: 3000,
  } as ToastContainerOptions)
  .mount("#app")
