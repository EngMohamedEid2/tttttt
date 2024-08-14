<template>
    <section class="section-b-space shop-section" id="filtered_products">
        <div class="container-fluid-lg">
            <div class="row">
                <div class="col-xxl-3 col-lg-4">
                    <div class="left-box">
                        <ShopCollectionWidgetsSidebar :filter="filter">
                            <div class="vendor-detail-box">
                                <div class="vendor-name vendor-bottom">
                                    <div class="vendor-logo">
                                        <ShopSellerWidgetsStoreLogo :store="store" />
                                        <div>
                                            <ShopSellerWidgetsStoreName :store="store" />
                                            <div class="product-rating vendor-rating">
                                                <ShopSellerWidgetsStoreRating :store="store" />
                                            </div>
                                        </div>
                                    </div>
                                    <ShopSellerWidgetsStoreDescription :store="store" />
                                </div>
                                <ShopSellerWidgetsStoreSocialLink :store="store" />
                            </div>
                        </ShopCollectionWidgetsSidebar>
                    </div>
                </div>
                <div class="col-xxl-9 col-lg-8">
                    <ShopCollectionWidgetsCollectionProduct @changeProductPage="changePages" :filter="filter" />
                </div>
            </div>
        </div>
    </section>
</template>
    
<script setup>
import { useCollectionStore } from '~/store/collection';
let props = defineProps({
    store: Object,
    layout: String
})
let stores = useCollectionStore();
let changePage = ref(1)
stores.filterObject.store_slug.value =  props.store.slug


function changePages(toPage) {
    changePage.value = toPage
    // setRoute();
    setTimeout(async () => {
    }, 1000);
}

function setRoute() {
    useRouter().push({
        path: useRoute().path,
        query: {
            layout: props.layout,
            sortBy: stores.filterObject.sort.value,
            field: stores.filterObject.field,
            category: stores.filterObject.selectedCategories.join(','),
            attribute: stores.filterObject.selectedAttributes.join(','),
            price: stores.filterObject.selectedPrice.join(','),
            rating: stores.filterObject.selectedRating.join(','),
            page: changePage.value,
            store_slug:stores.filterObject.store_slug.value
        }
    })
}
stores.getParams()
watch(() => stores.filterObject, () => {
    setRoute()
}, { deep: true });
</script>
    
<style lang="scss" scoped></style>