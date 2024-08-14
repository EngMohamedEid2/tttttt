<template>
    <footer class="section-t-space" :class="footer?.footer_class">
        <div class="container-fluid-lg">
            <div class="main-footer section-b-space">
                <div class="row g-md-4 g-3">
                    <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="footer-logo">
                            <FooterLogo :data="ThemeOptions?.options" :footer="footer" />
                            <FooterAbout :data="ThemeOptions?.options" />
                        </div>
                    </div>

                    <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6"
                        v-if="ThemeOptions?.options?.footer?.footer_categories?.length" @click="toggle('categories')">
                        <div class="footer-title" :class="{ show: active['categories'] }">
                            <h4>{{ $t("Categories") }}</h4>
                        </div>
                        <div class="footer-contain">
                            <FooterCategory :data="CategoryInitial" />
                            <WidgetsNoData :class="'no-data-footer'" :text="'No Category Found'"
                                v-if="!ThemeOptions?.options?.footer?.footer_categories?.length"></WidgetsNoData>
                        </div>
                    </div>

                    <div class="col-xl col-lg-2 col-sm-3" v-if="ThemeOptions?.options?.footer?.useful_link?.length"
                        @click="toggle('useful_link')">
                        <div class="footer-title" :class="{ show: active['useful_link'] }">
                            <h4>{{ $t("Useful Links") }}</h4>
                        </div>
                        <div class="footer-contain">
                            <FooterLinks :links="ThemeOptions?.options?.footer?.useful_link" />
                            <WidgetsNoData :class="'no-data-footer'" :text="'No Link Found'"
                                v-if="!ThemeOptions?.options?.footer?.useful_link?.length"></WidgetsNoData>
                        </div>
                    </div>
                    
                    <div class="col-xl-2 col-sm-3" v-if="ThemeOptions?.options?.footer?.help_center?.length"
                        @click="toggle('help_center')">
                        <div class="footer-title" :class="{ show: active['help_center'] }">
                            <h4>{{ $t("Help Center") }}</h4>
                        </div>
                        <div class="footer-contain">
                            <FooterLinks :links="ThemeOptions?.options?.footer?.help_center" />
                            <WidgetsNoData :class="'no-data-footer'" :text="'No Link Found'"
                                v-if="!ThemeOptions?.options?.footer?.help_center?.length"></WidgetsNoData>
                        </div>
                    </div>

                    <div class="col-xl-3 col-lg-4 col-sm-6"
                        v-if="ThemeOptions?.options?.footer?.support_email || ThemeOptions?.options?.footer?.support_number || ThemeOptions?.options?.footer?.play_store_url || ThemeOptions?.options?.footer?.app_store_url">
                        <div class="footer-title contact-title">
                            <h4>{{ $t("Contact Us") }}</h4>
                        </div>
                        <FooterCantact :data="ThemeOptions.options" />
                    </div>
                </div>
            </div>
            <div class="sub-footer section-small-space">
                <div class="reserve" v-if="ThemeOptions?.options?.footer?.footer_copyright">
                    <h6 class="text-content" v-if="ThemeOptions?.options?.footer?.copyright_content">{{
                        ThemeOptions?.options?.footer?.copyright_content }}</h6>
                </div>

                <div class="payment">
                    <img src="/images/payment/1.png" class="img-fluid" alt="">
                </div>
                <FooterSocial :data="ThemeOptions.options" v-if="ThemeOptions?.options?.footer?.social_media_enable" />
            </div>
        </div>
    </footer>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useDataStore } from '@/store/data';

let props = defineProps({
    footer: Object
})

let active = ref({
    categories: false,
    useful_link: false,
    quick_pages: false,
});
let CategoryInitial = ref([]);
let { ThemeOptions } = storeToRefs(useDataStore())

ThemeOptions?.value?.options?.footer?.footer_categories.map((id) => {
    let { data: categories } = HandleRequest(`category/${id}`, { key: `GetFooterCategory${id}`, type: 'product' });
    CategoryInitial.value.push(categories)
})

function toggle(value) {
    active.value[value] = !active.value[value];
}
</script>