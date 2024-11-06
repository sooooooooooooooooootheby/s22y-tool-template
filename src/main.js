import "./assets/style/base.scss";
import "element-plus/dist/index.css";

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

// element plus
import ElementPlus from "element-plus";
app.use(ElementPlus);
import { Icon } from "@iconify/vue";
app.component("Icon", Icon);

// router
import router from "./router";
app.use(router);

// pinia
import { createPinia } from "pinia";
app.use(createPinia());

app.mount("#app");
