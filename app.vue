<script :src="code.jquery.com / jquery - x.x.x.min.js"></script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <WidgetsModalsProductModal
      :Data="modals.quickView"
      @close="
        () => {
          useCartStore().ToggleModal({ value: false });
        }
      "
    />
  </div>
</template>
<script setup>
import { storeToRefs } from "pinia";
import { useCartStore } from "./store/cart";
import { useUserStore } from "./store/user";
import { useSiteStore } from "./store/site";
import { useDataStore } from "./store/data";
let { modals, cart } = storeToRefs(useCartStore());
let { Settings, ThemeOptions } = storeToRefs(useDataStore());
let { data, error, pending } = await HandleRequest("settings", {
  key: "getSettingsInApp",
});
// console.log(modals.value);
// let meta = useMeta()

const favIcon = ref(null);
const isTabInFocus = ref(true);
const timeoutId = ref(null);
const currentMessageIndex = ref(0);
const messages = ref(["⚡ Come Back !!", "🎉 Offers for you..."]);
const currentMessage = ref("");
const delay = ref(1000); // Delay between messages in milliseconds

watch(
  () => ThemeOptions.value.options,
  (theme) => {
    if (theme?.general?.mode === "dark") {
      if (process.client) {
        document.documentElement.classList.add(
          theme?.general && theme?.general?.mode
        );
      }
    } else {
      if (process.client) {
        document.documentElement.classList.remove("dark");
      }
    }

    // Set Direction
    if (theme?.general?.language_direction === "rtl") {
      if (process.client) {
        document.documentElement.setAttribute("dir", "rtl");
        document.body.classList.add("rtl");
      }
    } else {
      if (process.client) {
        document.documentElement.removeAttribute("dir");
        document.body.classList.remove("rtl");
      }
    }

    if (process.client) {
      favIcon.value = document.querySelector("#appIcon");
      if (favIcon.value) {
        favIcon.value.href = theme?.logo?.favicon_icon?.original_url;
      }
    }
  }
);

useHead({
  link: [
    {
      rel: "icon",
      id: "appIcon",
      type: "image/png",
      href: ThemeOptions?.value?.options?.logo?.favicon_icon?.original_url,
    },
  ],
  meta: [
    {
      property: "og:title",
      content: ThemeOptions?.value?.options?.seo?.og_title,
    },
  ],
  meta: [
    {
      property: "og:description",
      content: ThemeOptions?.value.options?.seo?.og_description,
    },
  ],
  meta: [
    {
      property: "og:image",
      content: ThemeOptions?.value?.options?.seo?.og_image?.original_url,
    },
  ],
  meta: [
    {
      property: "og:title",
      content: ThemeOptions?.value?.options?.seo?.og_title,
    },
  ],
  meta: [
    {
      property: "description",
      content: ThemeOptions?.value?.options?.seo?.meta_description,
    },
  ],
  meta: [
    {
      property: "keywords",
      content: ThemeOptions?.value?.options?.seo?.meta_tags,
    },
  ],
});

function updateTitle(theme) {
  const title =
    theme?.general?.site_title && theme?.general?.site_tagline
      ? `${theme.general.site_title} | ${theme.general.site_tagline}`
      : "FastKart Marketplace: Where Vendors Shine Together";
  document.title = title;
}

function updateMessage() {
  clearTimeout(timeoutId.value);

  currentMessage.value = messages.value[currentMessageIndex.value];
  document.title = currentMessage.value;

  currentMessageIndex.value =
    (currentMessageIndex.value + 1) % messages.value.length;

  timeoutId.value = setTimeout(updateMessage, delay.value);
}

onMounted(async () => {
  document.addEventListener("visibilitychange", () => {
    isTabInFocus.value = !document.hidden;
    if (isTabInFocus.value) {
      clearTimeout(timeoutId.value);
      updateTitle(ThemeOptions.value.options);
    } else {
      updateMessage();
    }
  });

  window.addEventListener("beforeunload", (event) => {
    localStorage.setItem("cart", JSON.stringify(cart.value));
  });
  let localCart = JSON.parse(localStorage.getItem("cart"));
  if (localCart?.length) {
    useCartStore().SetCart({ Cart: localCart });
  }
});

onUnmounted(() => {
  clearTimeout(timeoutId.value);
});

if (!error.value) {
  useSiteStore().SetSiteSettings({ settings: data.value });
}
</script>
<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.2s;
}

.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
</style>
