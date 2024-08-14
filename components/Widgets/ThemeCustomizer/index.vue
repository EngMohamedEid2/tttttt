<template>
  <OnClickOutside
    @trigger="
      () => {
        open = false;
      }
    "
    class="setting-box"
  >
    <WidgetsButton
      :classes="'btn setting-button'"
      :id="'toggle_btn'"
      :type="'button'"
      @onClick="toggle()"
    >
      <Icon
        :class="open ? 'ri-close-fill' : 'ri-settings-3-fill'"
        name="ri:settings-4-fill"
      ></Icon>
    </WidgetsButton>

    <div class="theme-setting-2" :class="[{ active: open }]">
      <div class="theme-box">
        <ul>
          <li>
            <div class="setting-name">
              <h4>{{ $t("Color") }}</h4>
            </div>
            <div class="theme-setting-button color-picker">
              <form class="form-control">
                <label for="colorPick" class="form-label mb-0"
                  >{{ $t("Theme Colo") }}r</label
                >
                <input
                  type="color"
                  class="form-control form-control-color"
                  id="colorPick"
                  value="#0da487"
                  title="Choose your color"
                />
              </form>
            </div>
          </li>

          <li>
            <div class="setting-name">
              <h4>{{ $t("Dark") }}</h4>
            </div>
            <div class="theme-setting-button">
              <WidgetsButton
                :classes="mode === 'dark' ? 'btn btn-2 active' : 'btn btn-2'"
                :id="'dark_btn'"
                :type="'button'"
                @onClick="layoutMode('dark')"
              >
                {{ $t("Dark") }}
              </WidgetsButton>
              <WidgetsButton
                :classes="mode === 'light' ? 'btn btn-2 active' : 'btn btn-2'"
                :id="'light_btn'"
                :type="'button'"
                @onClick="layoutMode('light')"
              >
                {{ $t("Light") }}
              </WidgetsButton>
            </div>
          </li>

          <!-- <li>
            <div class="setting-name">
              <h4>{{ $t("RTL") }}</h4>
            </div>
            <div class="theme-setting-button rtl">
              <WidgetsButton :classes="values === 'ltr' ? 'btn btn-2 active' : 'btn btn-2'
                " :id="'ltr_btn'" :type="'button'" @onClick="layout('ltr')">
                {{ $t("LTR") }}
              </WidgetsButton>
              <WidgetsButton :classes="values === 'rtl' ? 'btn btn-2 active' : 'btn btn-2'
                " :id="'rtl_btn'" :type="'button'" @onClick="layout('rtl')">
                {{ $t("RTL") }}
              </WidgetsButton>
            </div>
          </li> -->
        </ul>
      </div>
    </div>
  </OnClickOutside>
</template>

<script setup>
import { OnClickOutside } from "@vueuse/components";
import { storeToRefs } from "pinia";
import { useDataStore } from "@/store/data";

let open = ref(false);
let show = ref(false);
let mode = ref("");
let values = ref("");
let primary_color = ref();

useDataStore().GetThemeoption();
let { ThemeOptions } = storeToRefs(useDataStore());

const toggle = () => {
  open.value = !open.value;
};

function layout(value) {
  values.value = value;
  if (value === "rtl") {
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

const layoutMode = (value) => {
  mode.value = value;
  if (mode.value === "dark") {
    document.getElementsByTagName("html")[0].classList.add("dark");
  } else {
    document.getElementsByTagName("html")[0].classList.remove("dark");
  }
};

const customizeThemeColor = (event) => {
  document.documentElement.style.setProperty(
    "--theme-color",
    event.target.value
  );
};

const closeDropdown = () => {
  open.value = false;
};

onMounted(() => {
  let option = ThemeOptions.options;
  mode.value = option?.general ? option?.general?.mode : "light";
  values.value = option?.general ? option?.general?.language_direction : "ltr";
});

onBeforeUnmount(() => {
  document.documentElement.style.removeProperty("--theme-color");
});
</script>

<style lang="scss" scoped></style>
