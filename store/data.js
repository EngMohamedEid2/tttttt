import { defineStore } from "pinia";
import { useCollectionStore } from "./collection";
import axios from "axios";
import { HandleRequest } from "~~/composables/HandleRequest";
export const useDataStore = defineStore("data-store", () => {
  let ThemeOptions = ref([]),
    Products = ref([]),
    Blogs = ref([]),
    searchProducts = ref([]),
    Categories = ref([]),
    Currencies = ref([]),
    SingleProducts = ref([]),
    Settings = ref([]),
    Notification = ref([]),
    offCanvasMenu = ref(false),
    queAns = ref(false),
    SearchProductParams = ref({ search: "", page: 1, paginate: 12, status: 1 }),
    ProductParams = {
      page: 1, // Current page number
      paginate: 40, // Display per page,
      status: 1,
      field: "created_at",
      price: "",
      category: "",
      tag: "",
      sort: "", // ASC, DSC
      sortBy: "asc",
      rating: "",
      attribute: "",
    };
  // let selectedCategory = ref({});
  let selectedCategoryProducts = ref([]);
  // const fetchProducts = async (id) => {
  //   await HandleRequest(
  //     `https://zezo.anevex.com/app/shop-api/products?category_id=${id}`,
  //     {
  //       onResponse: ({ response }) => {
  //         selectedCategory.value = Categories.find((cat) => cat.id === id);
  //         selectedCategoryProducts.value = response.data;
  //         console.log("done");
  //       },
  //     }
  //   );
  // };

  let preferedcats = useCollectionStore().filterObject.selectedCategories;

  const GetAllThemeOptions = async () => {
    HandleRequest("themeOptions", {
      key: "getAllThemeOptionInStore",
      onResponse({ response }) {
        ThemeOptions.value = response._data;
      },
    });
  };

  const GetAllProduct = async () => {
    HandleRequest("product", {
      key: "getAllProductsInStore",
      onResponse({ response }) {
        Products.value = response._data;
      },
    });
  };

  const GetAllSingleProduct = async () => {
    HandleRequest(`product/slug/${useRoute().params.slug}`, {
      key: "getSingleProductsInStore",
      onResponse({ response }) {
        SingleProducts.value = response._data;
      },
    });
  };

  // const GetAllSearchProduct = async () => {
  //   HandleRequest("product", {
  //     key: "getAllProductsForSearchInStore",
  //     params: SearchProductParams.value,
  //     onResponse({ response }) {
  //       searchProducts.value = response._data;
  //     },
  //   });
  // };

  const GetAllBlogs = async () => {
    HandleRequest("blog", {
      key: "getAllBlogsInStore",
      onResponse({ response }) {
        Blogs.value = response._data;
      },
    });
  };

  // const GetAllCategory = async () => {
  //   HandleRequest('category', {
  //     key: 'getAllCategoryInStore',
  //     onResponse({ response }) {
  //       Categories.value = response._data;
  //     }
  //   })
  // };

  const GetAllCategory = async () => {
    HandleRequest("https://alsouq.anevex.com/app/shop-api/categories", {
      // key: "getAllCategoryInStore",
      onResponse({ response }) {
        Categories.value = response._data.data;
        // console.log("cat", Categories.value);
      },
    });
  };
  GetAllCategory();

  const GetAllCurrency = async () => {
    HandleRequest("currency", {
      key: "getAllCurrencyStore",
      onResponse({ response }) {
        Currencies.value = response._data;
        // console.log(response);
        // console.log("curr", Currencies.value);
      },
    });
  };

  GetAllCurrency();

  const GetAllNotification = async () => {
    HandleRequest("notifications", {
      key: "getAllNotificationsStore",
      onResponse({ response }) {
        Notification.value = response._data;
      },
    });
  };

  const GetAllSettings = async () => {
    HandleRequest("settings", {
      key: "getAllSettingStore",
      onResponse({ response }) {
        Settings.value = response._data;
      },
    });
  };
  const GetAllQustionAnswer = async (value) => {
    await HandleRequest("question-and-answer", {
      key: "getQuestionAnswer",
      params: { product_id: value },
      onResponse({ response }) {
        queAns.value = response._data;
      },
    });
  };
  const GetThemeoption = async () => {
    await GetAllThemeOptions();
  };

  const GetProduct = async () => {
    await GetAllProduct();
  };

  const GetCategory = async () => {
    await GetAllCategory();
  };

  const GetBlog = async () => {
    await GetAllBlogs();
  };

  const GetCurrency = async () => {
    await GetAllCurrency();
  };

  const GetSingleProduct = async () => {
    await GetAllSingleProduct();
  };

  const GetSettings = async () => {
    await GetAllSettings();
  };
  const GetSearch = async () => {
    await GetAllSearchProduct();
  };

  const GetNotifications = async () => {
    await GetAllNotification();
  };

  function setInitialParams(searchParams) {
    SearchProductParams.value.search = searchParams;
    GetAllSearchProduct();
  }
  return {
    // selectedCategory,
    selectedCategoryProducts,
    offCanvasMenu,
    ThemeOptions,
    GetThemeoption,
    Products,
    GetProduct,
    Categories,
    GetCategory,
    Currencies,
    GetCurrency,
    Blogs,
    GetBlog,
    SingleProducts,
    GetAllSingleProduct,
    GetSingleProduct,
    ProductParams,
    setInitialParams,
    SearchProductParams,
    GetSearch,
    searchProducts,
    Settings,
    GetSettings,
    GetNotifications,
    Notification,
    queAns,
    GetAllQustionAnswer,
  };
});
