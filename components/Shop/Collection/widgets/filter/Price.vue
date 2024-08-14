<template>
    <ul class="category-list custom-padding custom-height">
        <li v-for="(price,index) of prices" :key="index">
            <div class="form-check ps-0 m-0 category-list-box">
                <input class="checkbox_animated" type="checkbox" :id="'price-filter'+index"
                    v-model="store.filterObject.selectedPrice"  :value="price.value" />
                <label class="form-check-label" :for="'price-filter'+index">
                    <span class="name" v-if="price.price">{{ price.text }} - $ {{ price.price }}</span>
                    <template v-else>
                        <span class="name">$ {{ price.minPrice }} - $ {{ price.maxPrice }}</span>
                    </template>
                </label>
            </div>
        </li>
    </ul>
</template>

<script setup>
import { useCollectionStore } from '~/store/collection';
import { useDataStore } from '~/store/data';
let props = defineProps({
    filter:Object
})
let store = useCollectionStore();
let prices = ref([
    {
        id: 1,
        price: 100,
        text: 'Below',
        value: '100'
    },
    {
        id: 2,
        minPrice: 100,
        maxPrice: 200,
        value: '0-200'
    },
    {
        id: 3,
        minPrice: 200,
        maxPrice: 400,
        value: '200-400'
    },
    {
        id: 4,
        minPrice: 400,
        maxPrice: 600,
        value: '400-600'
    },
    {
        id: 5,
        minPrice: 600,
        maxPrice: 800,
        value: '600-800'
    },
    {
        id: 6,
        minPrice: 800,
        maxPrice: 1000,
        value: '800-1000'
    },
    {
        id: 7,
        price: 1000,
        text: 'Above',
        value: '1000'
    }
]
)
</script>

<style lang="scss" scoped></style>