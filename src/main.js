import { createApp } from "vue";
import App from "./App.vue";
import install from './install.js'

const app = createApp(App);

app.use(install)
app.mount("#app")