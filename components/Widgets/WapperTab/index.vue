<template>
  <div class="product-section-box mt-0">
    <ul class="nav nav-tabs custom-nav" id="pills-tab">
      <li class="nav-item" role="presentation" v-for="(tab, index) in tabs" :key="'a' + index">
        <button class="nav-link" :ref="`tabButton${index}`"
          :class="[{ 'tab-error': tab.errors }, { active: index == activeTab }]" :id="`${tab.id}-tab`"
          @click="handleClickOnTab({ tab, index })" type="button">
          <!-- <Icon :name="tab.icon" /> -->
          {{ $t(tab.title) }}
        </button>
      </li>
    </ul>
    <div class="tab-content custom-tab" id="pills-tabContent">
      <div :class="[{ 'active show': index == activeTab }]" class="tab-pane fade" v-for="(tab, index) in tabs"
        :key="'a' + index" :id="tab.id" role="tabpanel">
        <slot :name="tab.id" />
      </div>
      <slot name="bottom" />
    </div>
  </div>
</template>

<script setup>
let props = defineProps({
  tabs: Array,
  activeTab: Object,
});
let activeTab = ref(0);
let emit = defineEmits(["handleActive"]);

function handleClickOnTab({ tab, index }) {
  activeTab.value = index;
  emit("handleActive", tab);
}
</script>
<style lang="scss" scoped></style>
