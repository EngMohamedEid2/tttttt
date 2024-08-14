<template>
  <section class="client-section section-lg-space">
    <div class="container-fluid-lg">
      <div class="row">
        <div class="col-12">
          <div class="about-us-title text-center">
            <h4>{{ aboutClient.sub_title }}</h4>
            <h2 class="center">{{ aboutClient.title }}</h2>
          </div>
          <div class="slider-dots">
            <swiper :autoplay="{ delay: 2500, disableOnInteraction: true }" :modules="modules" :loop="true"
              :slidesPerView="3" :spaceBetween="20">
              <swiper-slide v-for="(client, index) in aboutClient.content" :key="index">
                <div class="slider-3_1 product-wrapper">
                  <div>
                    <div class="clint-contain">
                      <div class="client-icon">
                        <img :src="client.icon" :alt="client.title" />
                      </div>
                      <h2>{{ client.count }}</h2>
                      <h4>{{ client.title }}</h4>
                      <p>{{ client.description }}</p>
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
let { ThemeOptions } = storeToRefs(useDataStore());
let aboutClient = ref(ThemeOptions.value.options.about_us.clients);
</script>

<style lang="scss" scoped></style>
