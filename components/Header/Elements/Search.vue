<template>
  <div class="search-container">
    <div class="input-group" v-if="style === 'basic'">
      <input
        type="search"
        class="form-control"
        placeholder="Search here..."
        v-model="term"
        @input="debouncedSearch"
      />
      <button class="btn" type="button" id="button-addon2" style="cursor: auto">
        <Icon name="ri:search-line"></Icon>
      </button>
    </div>
    <ul
      v-if="searchResults.length > 0 && showResults"
      class="search-results"
      ref="target"
    >
      <li
        v-for="result in searchResults"
        :key="result.id"
        @click="selectResult(result)"
        class="d-block"
      >
        <nuxt-link :to="`/product/${result.id}?layout=product_thumbnail`">
          <div class="result-item">
            <img
              v-if="result.image"
              :src="result.image"
              alt="Product Image"
              class="result-image"
            />
            <div class="result-details">
              <span class="result-name">{{ result.name }}</span>
            </div>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
// import { ref, onUnmounted } from "vue";
// import { useRouter, useRoute } from "vue-router";
import axios from "axios";

const props = defineProps({
  style: { type: String, default: "basic" },
});

const term = ref("");
const searchResults = ref([]);
const router = useRouter();
const route = useRoute();
const showResults = ref(false);
const target = ref(null);

let debounceTimeout = null;

const debouncedSearch = () => {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(searching, 200);
};

const searching = async () => {
  // console.log("Searching for:", term.value);
  if (term.value.length > 0) {
    try {
      const response = await axios.get(
        `https://alsouq.anevex.com/app/shop-api/products?search=${term.value}`
      );
      // console.log("API Response:", response.data);
      if (response.data) {
        searchResults.value = response.data.data;
        showResults.value = true;
        console.log(response.data);
      } else {
        searchResults.value = [];
        // console.log("No results found or unexpected data structure");
      }
    } catch (error) {
      // console.error("Error during search:", error);
      searchResults.value = [];
    }
  } else {
    searchResults.value = [];
    showResults.value = false;
  }
};

const handleClickOutside = (event) => {
  const searchContainer = document.querySelector(".search-container");
  if (searchContainer && !searchContainer.contains(event.target)) {
    showResults.value = false;
  }
};

const selectResult = (result) => {
  // console.log("Selected result:", result);
  term.value = result.name;
  showResults.value = false;
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
  clearTimeout(debounceTimeout);
});

// const redirectToSearch = () => {
//   const queryParams = {};
//   if (term.value) {
//     queryParams.search = term.value;
//   }

//   router.push({
//     path: "/search",
//     query: {
//       ...queryParams,
//     },
//   });
//   term.value = "";
// };
</script>

<style scoped>
.search-container {
  position: relative;
  width: 100%;
}

.search-results {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 1000;
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: white;
  border: 1px solid #ddd;
  border-top: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-height: 300px;
  overflow-y: auto;
}

.search-results li {
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.search-results li:hover {
  background-color: #f5f5f5;
}

.result-item {
  display: flex;
  align-items: center;
}

.result-image {
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 10px;
  margin-left: 10px;
  border-radius: 4px;
}

.result-details {
  display: flex;
  flex-direction: column;
}

.result-name {
  font-weight: bold;
  margin-bottom: 4px;
}

.result-price {
  font-size: 0.9em;
  color: #666;
}
</style>
