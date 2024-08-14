<template>
  <div>
    <!-- <div class="title title-flex-2" :class="classes" v-if="style === 'simple'">
      <h2>{{ title }}</h2>
      <slot />
    </div> -->
    <div
      class="title d-flex align-items-center"
      :class="classes"
      v-if="style === 'basic'"
    >
      <div style="flex: 1">
        <h2>{{ title }}</h2>
        <span class="title-leaf">
          <svg class="icon-width">
            <use :xlink:href="`/svg/leaf.svg#${svg}`"></use>
          </svg>
        </span>
        <p v-if="description">{{ description }}</p>
      </div>
      <div>
        <NuxtLink :to="`/collections`"> More </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
let props = defineProps({
  classes: String,
  title: String,
  description: String,
  catId: Number,
  svg: { type: String, default: "leaf" },
  style: { type: [String, Object], default: "basic" },
});
let categoryId = props.catId.toString();

// const goToCollection = () => {
//   router.push({
//     path: "/collections",
//     query: { layout: "collection_left_sidebar" },
//   });
// };
</script>

<style lang="scss" scoped></style>
