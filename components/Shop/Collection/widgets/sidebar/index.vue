<template>
  <div class="shop-left-sidebar">
    <div class="leftbox-overlay" @click="closeCanvasMenu()"></div>
    <div class="back-button" @click="closeCanvasMenu()">
      <h3>
        <a class="text-title">
          <Icon name="ri-close-fill"></Icon>
          <span>{{ $t("Back") }}</span>
        </a>
      </h3>
    </div>
    <slot></slot>

    <ShopCollectionWidgetsFilter />

    <!-- <app-skeleton-collection-sidebar v-if="!attributeService.skeletonLoader" /> -->
    <div class="accordion custome-accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="`#category-dropdown`"
          >
            <span>{{ $t("Categories") }}</span>
          </button>
        </h2>

        <div :id="`category-dropdown`" class="accordion-collapse collapse show">
          <div class="accordion-body">
            <ShopCollectionWidgetsFilterCategory />
          </div>
        </div>
      </div>

      <!-- <div class="accordion-item">
                <ShopCollectionWidgetsFilterAttribute />
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header" >
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        :data-bs-target="`#price-dropdown`">
                        <span>{{ $t("Price") }}</span>
                    </button>
                </h2>

                <div :id="`price-dropdown`" class="accordion-collapse collapse show">
                    <div class="accordion-body">
                        <ShopCollectionWidgetsFilterPrice :filter="filter" />
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header" >
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        :data-bs-target="`#rating-dropdown`">
                        <span>{{ $t("Rating") }}</span>
                    </button>
                </h2>

                <div :id="`rating-dropdown`" class="accordion-collapse collapse show">
                    <div class="accordion-body">
                        <ShopCollectionWidgetsFilterRating :filter="filter" />
                    </div>
                </div>
            </div> -->
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useDataStore } from "~/store/data";
let { offCanvasMenu } = storeToRefs(useDataStore());

let props = defineProps({
  filter: Object,
  opensidebar: Boolean,
});
function closeCanvasMenu() {
  offCanvasMenu.value = false;
}
</script>
