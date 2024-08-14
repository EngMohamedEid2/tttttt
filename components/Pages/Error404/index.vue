<template>
    <section class="section-404 section-lg-space">
        <div class="container-fluid-lg">
            <div class="row">
                <div class="col-12">
                    <div class="image-404">
                        <img src="/images/inner-page/404.png" class="img-fluid" alt="">
                    </div>
                </div>
                <div class="col-12" v-if="ThemeOptions.options?.error_page?.error_page_content">
                    <div class="contain-404">
                        <h3 class="text-content">
                            {{ ThemeOptions.options?.error_page?.error_page_content }}
                        </h3>
                        <WidgetsButton :classes="'btn btn-md text-white theme-bg-color mt-4 mx-auto'" :id="'back_button'"
                            v-if="ThemeOptions.options?.error_page?.back_button_enable" @onClick="back()">{{
                                ThemeOptions.options?.error_page?.back_button_text }}</WidgetsButton>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useDataStore } from "~/store/data";
let { ThemeOptions } = storeToRefs(useDataStore())

function back() {
    useRouter().go(-1)
}
</script>

<style lang="scss" scoped></style>