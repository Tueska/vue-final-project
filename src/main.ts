import { createApp } from "vue";
import App from "./App.vue";
// "Fremdcode" Statt "Vanilla JS" Eventlistener zu verwenden hiervon windowWidth Property genutzt
import { VueWindowSizePlugin } from "vue-window-size/option-api";

const app = createApp(App);
app.use(VueWindowSizePlugin);
app.mount("#app");
