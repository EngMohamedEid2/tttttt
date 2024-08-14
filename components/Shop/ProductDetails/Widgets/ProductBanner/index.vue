<template>
    <div class="ratio_156 pt-25">
        <div class="home-contain">
            <WidgetsImageLink :image="banner" :bgImage="false" />
        </div>
    </div>
</template>

<script setup>
let props = defineProps({
    image: String,
})

let banner = ref({
    redirect_link: {
        link_type: 'collection',
        link: 'vegetables-fruits'
    },
    image_url: props.image
});

watch(props.image, (newValue) => {
    banner.value.image_url = newValue;
});
</script>

<style lang="scss" scoped></style>