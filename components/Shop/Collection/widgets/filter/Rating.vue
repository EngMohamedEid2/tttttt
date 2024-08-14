<template>
    <ul class="category-list custom-padding custom-height">
        <li v-for="(rate, index) of ratiing" :key="index">
            <div class="form-check ps-0 m-0 category-list-box">
                <input class="checkbox_animated" type="checkbox" :id="'rating-' + index"
                    v-model="store.filterObject.selectedRating" :value="rate.display" />
                <label class="form-check-label" :for="'rating-' + index">
                    <span class="name">
                        <NuxtRating :read-only="true" :ratingValue="rate?.display || 0" :rating-size="'25px'" />
                    </span>
                    <span class="number">({{ rate.display }} Star)</span>
                </label>
            </div>
        </li>
    </ul>
</template>

<script setup>
import { useCollectionStore } from '~/store/collection';
let props = defineProps({
    filter: Object
})
let store = useCollectionStore();
let ratiing = ref([
    { display: 5 },
    { display: 4 },
    { display: 3 },
    { display: 2 },
    { display: 1 },
]
)
</script>
<style lang="scss" scoped></style>