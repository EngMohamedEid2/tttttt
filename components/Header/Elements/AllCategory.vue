<template>
<div>
    <!-- Category Classic Vertical -->
    <div class="shop-left-sidebar" v-if="style == 'classic_vertical'">
        <ul class="nav nav-pills mb-3 custom-nav-tab">
            <li class="nav-item" v-for="category of categories" :key="category">
                <button class="nav-link" @click="redirectToCollection(category.slug)"
                    :class="{ active: selectedCategorySlug.length && selectedCategorySlug.includes(category.slug) }">
                    {{ category?.name }}
                    <img :src="category?.category_icon ? category?.category_icon?.original_url : '/images/category.png'"
                        :alt="category?.name">
                </button>
            </li>
        </ul>
    </div>

    <!-- Category dropdown Vertical -->
    <ul class="category-list" v-if="categories?.length && style == 'dropdown'">
        <li class="onhover-category-list" v-for="category of categories" :key="category">
            <a href="javascript:void(0)" @click="redirectToCollection(category.slug)" class="category-name">
                <img :src="category?.category_icon ? category?.category_icon?.original_url : '/images/category.png'"
                    :alt="category?.name">
                <h6>{{ category?.name }}</h6>
            </a>
        </li>
    </ul>

    <!-- Category input_dropdown Vertical -->
    <button class="btn location-button" v-if="categories?.length && style == 'input_dropdown'">
        <select class="form-select locat-name">
            <option>All Category</option>
            <option v-for="category of categories" :key="category">
                {{ category.name }}
            </option>
        </select>
    </button>
</div>
</template>

<script setup>
import { useCollectionStore } from '~/store/collection';
let store = useCollectionStore();
const props = defineProps({
    categories: Object,
    style: [String,Object],
})



let selectedCategorySlug = ref([]);

function redirectToCollection(slug) {
    let index = selectedCategorySlug.value.indexOf(slug);
    if (index === -1)
        selectedCategorySlug.value.push(slug);
    else
        selectedCategorySlug.value.splice(index, 1);

    const queryParams = selectedCategorySlug.value.length
        ? { category: selectedCategorySlug.value.join(',') }
        : null;

    useRouter().push({ path: '/collections', query: queryParams });
    store.getParams();
}
</script>
<style lang="scss" scoped></style>