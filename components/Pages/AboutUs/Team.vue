<template>
  <section class="team-section section-lg-space">
    <div class="container-fluid-lg">
      <div class="about-us-title text-center">
        <h4 class="text-content">{{ aboutTeam.sub_title }}</h4>
        <h2 class="center">{{ aboutTeam.title }}</h2>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="slider-dots">
            <swiper :autoplay="{ delay: 2500, disableOnInteraction: true }" :modules="modules" :loop="true"
              :slidesPerView="4" :spaceBetween="50">
              <swiper-slide v-for="(team, index) in aboutTeam.members" :key="index">
                <div class="team-box">
                  <div class="team-iamge">
                    <img :src="team.profile_image_url" class="img-fluid" :alt="team.name" />
                  </div>
                  <div class="team-name">
                    <h3>{{ team.name }}</h3>
                    <h5>{{ team.designation }}</h5>
                    <p>{{ team.description }}</p>
                    <ul class="team-media">
                      <li>
                        <a href="https://www.facebook.com/" class="fb-bg">
                          <Icon name="ri:facebook-fill" size="16" />
                        </a>
                      </li>
                      <li>
                        <a href="https://in.pinterest.com/" class="pint-bg">
                          <Icon name="ri:pinterest-fill" size="16" />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/" class="twitter-bg">
                          <Icon name="ri:twitter-fill" size="16" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/" class="insta-bg">
                          <Icon name="ri:instagram-fill" size="16" />
                        </a>
                      </li>
                    </ul>
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
let aboutTeam = ref(ThemeOptions.value.options.about_us.team);
</script>
<style lang="scss" scoped></style>
