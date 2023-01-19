import { createApp } from "vue";
import { createPinia } from "pinia";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faMagnifyingGlass,
  faUser,
  faMessage,
  faStar,
  faChartSimple,
  faGear,
  faCheckDouble,
  faHome,
  faBars,
  faLayerGroup,
  faArrowUp,
  faCheck,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";

import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
/* add icons to the library */
library.add(
  faUser,
  faArrowUp,
  faCheckDouble,
  faCheck,
  faEllipsisVertical,
  faBars,
  faLayerGroup,
  faHome,
  faMessage,
  faStar,
  faGear,
  faChartSimple,
  faMagnifyingGlass,
  faLinkedin,
  faGithub
);
import "./assets/main.css";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(createPinia());
app.use(router);

app.mount("#app");
