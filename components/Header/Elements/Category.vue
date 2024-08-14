<template>
<div>
    <!-- All Categories -->
    <WidgetsButton :classes="'dropdown-category'" :id="'all_categories_btn'">
        <Icon name="ri-apps-line" class="f-w-600 me-2"></Icon>
        <span>{{ $t("All Categories") }} </span>
    </WidgetsButton>
    <div class="category-dropdown">
        <div class="category-title">
            <h5> {{ $t("Categories") }} </h5>
            <WidgetsButton  :classes="'btn p-0 close-button text-content'" :id="'categories_btn'">
                <Icon name="ri-close-line"></Icon>
            </WidgetsButton>
        </div>
        <ThemesWidgetsCategories :style="'dropdown'" :categoryIds="data?.header?.category_ids" />
    </div>
</div>
</template>

<script setup>
let props = defineProps({
    data: Object
})
</script>
<style lang="scss" scoped></style>