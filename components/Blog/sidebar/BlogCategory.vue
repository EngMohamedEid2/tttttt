<template>
  <div>
  <div>
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
        data-bs-target="#panelsStayOpen-collapseTwo">
        {{ $t("Category") }}
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse collapse show">
      <div class="accordion-body p-0">
        <div class="category-list-box">
          <ul>
            <li v-for="category in category?.data" :key="category">
              <nuxt-link class="dropdown-item" :to="{ path: '/blog', query: { category: category?.slug } }">
                <div class="category-name">
                  <h5>{{ category?.name }}</h5>
                  <span v-if="category?.blogs_count">({{
                    category?.blogs_count
                  }})</span>
                </div>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <WidgetsNoData :classes="'no-data-added bg-light'" :text="'No Category Found'" v-if="!category?.data?.length">
  </WidgetsNoData>
</div>
</template>
  
<script setup>
import { HandleRequest } from "~~/composables/HandleRequest";
let { data: category } = HandleRequest(`category`, {
  key: `GetBrownsByCategory`, params: { type: 'post' }
});
</script>
  
<style lang="scss" scoped></style>