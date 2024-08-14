<template>
  <section class="breadscrumb-section pt-0">
    <div class="container-fluid-lg">
      <div class="row">
        <div class="col-12">
          <div class="breadscrumb-contain">
            <h2 v-if="breadcrumbs?.page">{{ breadcrumbs?.page  }}</h2>
            <h2 v-else>{{'Current Page Name Here'}}</h2>
            <nav>
              <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item">
                  <nuxt-link to="/theme/paris">
                    <Icon name="ri:home-3-fill"></Icon>
                  </nuxt-link>
                </li>
                <li class="breadcrumb-item active" v-for="(item, index) in breadcrumbs?.links"
                  :key="`breadcrumbs${index}`">
                  {{ shortenText(item.name, 25) }}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
let props = defineProps({
  breadcrumbs: Object,
});

function shortenText(text, maxLength) {
  if (text?.length <= maxLength) {
    return text;
  } else {
    return text?.slice(0, maxLength - 3) + '...';
  }
}

</script>

<style lang="scss" scoped></style>
