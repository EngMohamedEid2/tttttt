<template>
    <div class="social-link"
        v-if="data?.footer?.facebook || data?.footer?.twitter || data?.footer?.instagram || data?.footer?.pinterest">
        <h6 class="text-content">Stay connected :</h6>
        <ul>
            <li v-if="data?.footer?.facebook">
                <NuxtLink :to="data.footer.facebook" target="_blank" class="text-content">
                    <Icon name="ri:facebook-fill" size="13"></Icon>
                </NuxtLink>

            </li>
            <li v-if="data?.footer?.twitter">
                <NuxtLink :to="data.footer.twitter" target="_blank" class="text-content">
                    <Icon name="ri:twitter-fill" size="13"></Icon>
                </NuxtLink>

            </li>
            <li v-if="data?.footer?.instagram">
                <NuxtLink :to="data.footer.instagram" target="_blank" class="text-content">
                    <Icon name="ri:instagram-fill" size="13"></Icon>
                </NuxtLink>

            </li>
            <li v-if="data?.footer?.pinterest">
                <NuxtLink :to="data.footer.pinterest" target="_blank" class="text-content">
                    <Icon name="ri:pinterest-fill" size="13"></Icon>
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
let props = defineProps({
    data: Object
})
</script>

<style lang="scss" scoped></style>