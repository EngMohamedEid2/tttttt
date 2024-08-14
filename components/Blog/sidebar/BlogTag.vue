<template>
  <div>
  <div>
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
        data-bs-target="#panelsStayOpen-collapseThree">
        {{ $t("Product Tags") }}
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse collapse show">
      <div class="accordion-body pt-0">
        <div class="product-tags-box">
          <ul>
            <li v-for="tag in tags?.data" :key="tag">
              <nuxt-link :to="{ path: '/blog', query: { tag: tag?.slug } }">
                <span>{{ tag?.name }}</span>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <WidgetsNoData :classes="'no-data-added bg-light'" :text="'No Tag Found'" v-if="!tags?.data?.length">
  </WidgetsNoData>
</div>
</template>
  
<script setup>
import { HandleRequest } from "~~/composables/HandleRequest";
let { data: tags } = HandleRequest(`tag`, {
  key: `GetBlogTag`,
  params: { type: "post" },
});
</script>
  
<style lang="scss" scoped></style>
  