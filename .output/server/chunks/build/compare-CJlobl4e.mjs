import { g as defineStore, h as useFetch, B as BaseUrl, G as GetHeaders, q as useNuxtApp, o as useCookie } from './server.mjs';
import { ref } from 'vue';

const useCompareStore = defineStore("compare-store", () => {
  var compare = ref([]);
  const AddToCompare = async ({ product }) => {
    let userData = JSON.parse(localStorage.getItem("usersAccount"));
    if (userData) {
      await useFetch("compare", {
        baseURL: BaseUrl,
        method: "post",
        headers: GetHeaders(),
        key: "AddItemToCompare",
        body: { product_id: product.id },
        onResponse({ response, error }) {
          if (error) {
            useNuxtApp().$useToaster({ msg: error.message, type: "error" });
          } else {
            useNuxtApp().$useToaster({ msg: "Item Added To Compare" });
          }
        }
      }, "$L0BXq1cWH6");
      await GetComparetems();
    }
  };
  const GetComparetems = async () => {
    var _a;
    if (useCookie("uat").value) {
      let { data, error } = await useFetch("compare", {
        baseURL: BaseUrl,
        headers: GetHeaders(),
        method: "get",
        key: "GetAllcompareItemsInStore"
      }, "$EUvKAuO8tl");
      if (!error.value) {
        compare.value = ((_a = data.value) == null ? void 0 : _a.data) || [];
      }
    }
  };
  const RemoveFromCompare = async ({ product }) => {
    if (useCookie("uat").value) {
      let { data, error } = await useFetch(`compare/${product.id}`, {
        baseURL: BaseUrl,
        headers: GetHeaders(),
        method: "delete",
        key: `DeleteItemFromcompare${product.id}`,
        onResponse({ response, error: error2 }) {
          if (error2) {
            useNuxtApp().$useToaster({ msg: error2.message, type: "error" });
          } else {
            useNuxtApp().$useToaster({
              msg: "Item Removed From compare",
              type: "warning"
            });
          }
        }
      }, "$9FZRX78egb");
      if (!error.value) {
        await GetComparetems();
      }
    }
  };
  const GetCompare = async () => {
    await GetComparetems();
  };
  const ExistsInCompare = ({ product }) => {
    return compare.value.findIndex((item) => item.id == product.id) > -1;
  };
  const ToggleFromCompare = async ({ product }) => {
    if (ExistsInCompare({ product })) {
      RemoveFromCompare({ product });
    } else {
      AddToCompare({ product });
    }
  };
  return {
    compare,
    AddToCompare,
    RemoveFromCompare,
    ExistsInCompare,
    ToggleFromCompare,
    GetCompare
  };
});

export { useCompareStore as u };
