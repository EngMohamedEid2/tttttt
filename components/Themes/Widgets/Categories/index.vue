<template>
  <WidgetsCategory
 :categoryIds="categoryIds"
 :style="style"
 :image="image"
 :theme="theme"
 :title="title"
 :slidesPerView="slidesPerView"
 :Category="Category"
 :selectedCategoryId="selectedCategoryId"
 @selectedCategory="selectCategory($event)" />
</template>

<script setup>
let props = defineProps({
  categoryIds:Array,
  style: { type: [String,Object],default:"vertical"},
  title : String,
  image :String,
  theme:String,
  selectedCategoryId :Number,
  Category:Array,
  slidesPerView:{type:Number,default:7}
})

const emit = defineEmits(['selectCategory'])

function selectCategory(id) {
  emit('selectCategory', id)
}
</script>

<style lang="scss" scoped>

</style>