import { g as defineStore, h as useFetch, B as BaseUrl, G as GetHeaders, q as useNuxtApp, c as navigateTo } from './server.mjs';
import { ref } from 'vue';

const useWishlistStore = defineStore("wishlist-store", () => {
  var wishlist = ref([]);
  const AddToWishlist = async ({ product }) => {
    let userData = JSON.parse(localStorage.getItem("usersAccount"));
    if (userData) {
      await useFetch("wishlist", {
        baseURL: BaseUrl,
        method: "post",
        headers: GetHeaders(),
        key: "AddItemToWishlist",
        body: { product_id: product.id },
        onResponse({ response, error }) {
          if (error) {
            useNuxtApp().$useToaster({ msg: error.message, type: "error" });
          } else {
            useNuxtApp().$useToaster({ msg: "Item Added To Wishlist" });
          }
        }
      }, "$SrYahboRrQ");
      await GetWishlistItems();
    } else {
      navigateTo("/auth/login");
    }
  };
  const GetWishlistItems = async () => {
    var _a;
    let { data, error } = await useFetch("wishlist", {
      baseURL: BaseUrl,
      headers: GetHeaders(),
      method: "get",
      key: "GetAllWishlistItemsInStore"
    }, "$pnraPU9FFW");
    if (!error.value) {
      wishlist.value = ((_a = data.value) == null ? void 0 : _a.data) || [];
    }
  };
  const RemoveFromWishlist = async ({ product }) => {
    let { data, error } = await useFetch(`wishlist/${product.id}`, {
      baseURL: BaseUrl,
      headers: GetHeaders(),
      method: "delete",
      key: `DeleteItemFromWishlist${product.id}`,
      onResponse({ response, error: error2 }) {
        if (error2) {
          useNuxtApp().$useToaster({ msg: error2.message, type: "error" });
        } else {
          useNuxtApp().$useToaster({
            msg: "Item Removed From Wishlist",
            type: "warning"
          });
        }
      }
    }, "$28HboPGowR");
    if (!error.value) {
      await GetWishlistItems();
    }
  };
  const GetWishlist = async () => {
    await GetWishlistItems();
  };
  const ExistsInCart = ({ product }) => {
    return wishlist.value.findIndex((item) => item.id == product.id) > -1;
  };
  const ToggleFromWishlist = async ({ product }) => {
    if (ExistsInCart({ product })) {
      RemoveFromWishlist({ product });
    } else {
      AddToWishlist({ product });
    }
  };
  return {
    wishlist,
    AddToWishlist,
    GetWishlistItems,
    GetWishlist,
    RemoveFromWishlist,
    ExistsInCart,
    ToggleFromWishlist
  };
});

export { useWishlistStore as u };
