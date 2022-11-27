import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaFlag, RiZhihuFill, ViFileTypeVue, ViFileTypeAngular, ViFileTypeReactjs, ViFileTypeStencil, IoLogoJavascript, ViFileTypeTypescriptOfficial, ViFileTypeHtml, 
    ViFileTypeCss, ViFileTypeEslint, SiCypress, SiI18Next, ViFileTypeYarn, CoWebcomponentsOrg, CoBootstrap, SiJson, ViFileTypeSass,
    BiLinkedin, BiGithub} from "oh-vue-icons/icons";

import "./assets/main.css";



const app = createApp(App);

addIcons(FaFlag, RiZhihuFill, ViFileTypeVue, ViFileTypeAngular, ViFileTypeReactjs, ViFileTypeStencil, IoLogoJavascript, ViFileTypeTypescriptOfficial, ViFileTypeHtml, 
    ViFileTypeCss, ViFileTypeEslint, SiCypress, SiI18Next, ViFileTypeYarn, CoWebcomponentsOrg, CoBootstrap, SiJson, ViFileTypeSass, BiLinkedin, BiGithub);
app.component("v-icon", OhVueIcon);

app.use(router);

app.mount("#app");
