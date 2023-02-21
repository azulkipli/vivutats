/* node_module */
import { createApp } from "vue"
import { createPinia } from "pinia"
import { createHead, useHead } from "@vueuse/head"

/* components */
import App from "./App.vue"
import router from "./router"
import("preline")

/* styles */
import "./assets/tailwind.css"

const head = createHead()
const app = createApp(App)

useHead({
  title: "ViVuTaTS",
  meta: [
    {
      name: "description",
      content: "Vite VueJS TailwindCSS TypeScript starter template",
      // keywords: "vite, vue, tailwind, starter, template",
    },
  ],
})

app.use(createPinia())
app.use(router)
app.use(head)

app.mount("#app")
