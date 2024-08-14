import AOS from "aos";
import 'aos/dist/aos.css'; 


AOS.init();
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(AOS);
})