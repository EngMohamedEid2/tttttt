<template>
  <section class="review-section section-lg-space">
    <div class="container-fluid">
      <div class="about-us-title text-center">
        <h4 class="text-content">{{ aboutTestimonial.sub_title }}</h4>
        <h2 class="center">{{ aboutTestimonial.title }}</h2>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="slider-dots">
            <swiper :modules="modules" :loop="true" :spaceBetween="30" :centeredSlides="true" :breakpoints="reviewSlider"
              slidesPerView="auto">
              <swiper-slide v-for="(testi, index) in aboutTestimonial.reviews" :key="index">
                <div class="reviewer-box">
                  <Icon name="ri:double-quotes-r" class="quotes" />
                  <h3>{{ testi.title }}</h3>
                  <p class="truncate-line">{{ testi.review }}</p>
                  <div class="reviewer-profile">
                    <div class="reviewer-image">
                      <img :src="testi.profile_image_url" class="" alt="" />
                    </div>
                    <div class="reviewer-name">
                      <h4>{{ testi.name }}</h4>
                      <h6>{{ testi.designation }}</h6>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useDataStore } from "~/store/data";
import { Autoplay } from "swiper";

let modules = [Autoplay];
let reviewSlider = {
  0: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  650: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  975: {
    slidesPerView: 3,
    spaceBetween: 15,
  },
  1375: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
};

let { ThemeOptions } = storeToRefs(useDataStore());
let aboutTestimonial = ref(ThemeOptions.value.options.about_us.testimonial);
</script>

<style lang="scss" scoped></style>
