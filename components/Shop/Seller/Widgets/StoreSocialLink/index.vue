<template>
    <div class="vendor-share">
        <h5>{{ 'Follow Us' }} :</h5>
        <ul>
            <li v-if="store.facebook">
                <nuxtLink :to="store.facebook" target="_blank">
                    <Icon name="ri:facebook-fill"></Icon>
                </nuxtLink>
            </li>
            <li v-if="store?.twitter">
                <nuxtLink :to="store.twitter" target="_blank">
                    <Icon name="ri:twitter-fill"></Icon>
                </nuxtLink>
            </li>
            <li v-if="store?.instagram">
                <nuxtLink :to="store.instagram" target="_blank">
                    <Icon name="ri:instagram-fill"></Icon>
                </nuxtLink>
            </li>
            <li v-if="store?.youtube">
                <nuxtLink :to="store.youtube" target="_blank">
                    <Icon name="ri:youtube-fill"></Icon>
                </nuxtLink>
            </li>
            <li v-if="store?.pinterest">
                <nuxtLink :to="store.pinterest" target="_blank">
                    <Icon name="ri:pinterest-fill"></Icon>
                </nuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
let props = defineProps({
    store: Object
})
</script>

<style lang="scss" scoped></style>