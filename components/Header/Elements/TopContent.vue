<template>
  <div>
    <div class="mainSlider">
      <div>
        <div class="middle-header">
          <div class="middle-content">
            <p>
              <span v-html="topContent.content" v-for="(topContent, index) in themeOptions.header.top_bar_content"
                :key="index">
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  themeOptions: Object,
});
</script>
