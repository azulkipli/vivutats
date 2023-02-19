/* node_module */
import { createApp } from "vue"
import { createPinia } from "pinia"

/* components */
import App from "./App.vue"
import router from "./router"

/* styles */
import "./assets/tailwind.css"

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount("#app")
