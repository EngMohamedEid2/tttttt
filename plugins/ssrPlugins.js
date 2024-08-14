import { defineNuxtPlugin } from "#app";
import Slider from "@vueform/slider";
import { Swiper, SwiperSlide } from "swiper/vue";
import { VueImageZoomer } from 'vue-image-zoomer'
import "swiper/css";
import "swiper/css/bundle";

import mitt from "mitt";
import 'vue-image-zoomer/dist/style.css';
import Vue3Toastify, { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import "animate.css";
const customAnimation = {
  enter: "animate__animated animate__bounceInUp",
  exit: "animate__animated animate__bounceOutUp",
};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("Swiper", Swiper);
  nuxtApp.vueApp.component("SwiperSlide", SwiperSlide);
  nuxtApp.vueApp.component("RangeSlider", Slider);  
  if (process.client) {
  nuxtApp.vueApp.component("vue-image-zoomer",VueImageZoomer)
  }
  nuxtApp.provide("emitter", mitt());

  nuxtApp.provide( "useToaster", async ({ type = "success", msg = "Your Message Here", time = 3000, position = "top-right", }) => await toast[type](msg, { autoClose: time, position: position, transition: position || customAnimation, theme: "colored", }) );
});
