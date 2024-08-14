import { GetHeaders } from "~~/services/api/handleRequest";

export const useWishlistStore = defineStore("wishlist-store", () => {
  var wishlist = ref([]);

  const AddToWishlist = async ({ product }) => {
    let userData = JSON.parse(localStorage.getItem("usersAccount"));
    if (userData) {
      let { data } = await useFetch("wishlist", {
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
        },
      });
      await GetWishlistItems();
    } else {
      navigateTo("/auth/login");
    }
  };

  const GetWishlistItems = async () => {
    let { data, error } = await useFetch("wishlist", {
      baseURL: BaseUrl,
      headers: GetHeaders(),
      method: "get",
      key: "GetAllWishlistItemsInStore",
    });
    if (!error.value) {
      wishlist.value = data.value?.data || [];
    }
  };

  const RemoveFromWishlist = async ({ product }) => {
    let { data, error } = await useFetch(`wishlist/${product.id}`, {
      baseURL: BaseUrl,
      headers: GetHeaders(),
      method: "delete",
      key: `DeleteItemFromWishlist${product.id}`,
      onResponse({ response, error }) {
        if (error) {
          useNuxtApp().$useToaster({ msg: error.message, type: "error" });
        } else {
          useNuxtApp().$useToaster({
            msg: "Item Removed From Wishlist",
            type: "warning",
          });
        }
      },
    });
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
    ToggleFromWishlist,
  };
});
