<template>
  <div>
    <!-- Language Basic Style -->
    <OnClickOutside
      class="modal-content"
      @trigger="active = false"
      v-if="style == 'basic'"
    >
      <WidgetsButton
        :classes="'btn dropdown-toggle'"
        :type="'button'"
        :id="'open_dropdown_basic_btn'"
        @onClick="openDropDown()"
      >
        <div class="iti-flag" :class="selectedLanguage.icon"></div>
        <span> {{ selectedLanguage.language }}</span>
      </WidgetsButton>
      <ul
        class="dropdown-menu dropdown-menu-end language-dropdown"
        :class="{ show: active }"
      >
        <li v-for="language in languages" :key="language">
          <button class="dropdown-item" @click="selectLanguage(language)">
            <div class="iti-flag" :class="language.icon"></div>
            <span>{{ language.language }}</span>
          </button>
        </li>
      </ul>
    </OnClickOutside>

    <!-- Language Standard Style -->
    <OnClickOutside
      class="modal-content"
      @trigger="active = false"
      v-if="style == 'standard'"
    >
      <WidgetsButton
        :classes="'btn dropdown-toggle'"
        :type="'button'"
        :id="'open_dropdown_standard_btn'"
        @onClick="openDropDown()"
      >
        <div class="iti-flag {{ selectedLanguage.icon }}"></div>
        <span>
          {{ selectedLanguage.language }}
        </span>
        <Icon name="ri-arrow-{{ active ? 'up' : 'down' }}-s-line"></Icon>
      </WidgetsButton>
      <ul class="dropdown-menu" :class="{ show: active }">
        <li v-for="language in languages" :key="language">
          <a
            class="dropdown-item"
            href="javascript:void(0)"
            @click="selectLanguage(language)"
          >
            <div class="iti-flag" :class="language.icon"></div>
            <span>{{ language.language }}</span>
          </a>
        </li>
      </ul>
    </OnClickOutside>
  </div>
</template>
<script setup>
import { OnClickOutside } from "@vueuse/components";
import { useI18n } from "vue-i18n";
const i18n = useI18n();
let props = defineProps({
  style: { type: [String, Object], default: "basic" },
});

let active = ref(false);
let languages = ref([
  {
    language: "English",
    code: "en",
    icon: "us",
  },
  {
    language: "French",
    code: "fr",
    icon: "fr",
  },
]);

let selectedLanguage = ref({
  language: "English",
  code: "en",
  icon: "us",
});

function updateLang(language) {
  i18n.locale.value = language.code;
  selectedLanguage.value = language;
  if (language.code === "fr") {
    if (process.client) {
      document.body.classList.add("rtl");
      document.documentElement.dir = "rtl";
    }
  } else {
    if (process.client) {
      document.body.classList.remove("rtl");
      document.documentElement.dir = "ltr";
    }
  }
}

function selectLanguage(language) {
  active.value = false;
  localStorage.setItem("lang", JSON.stringify(language));
  updateLang(language);
}

function openDropDown() {
  active.value = !active.value;
}

onMounted(() => {
  if (localStorage.getItem("lang")) {
    updateLang(JSON.parse(localStorage.getItem("lang")));
  }
});
</script>
<style lang="scss" scoped></style>
