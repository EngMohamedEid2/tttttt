import { GetHeaders } from "~~/services/api/handleRequest";
export const useCompareStore = defineStore("compare-store", () => {
  var compare = ref([]);

  const AddToCompare = async ({ product }) => {
    let userData = JSON.parse(localStorage.getItem("usersAccount"));
    if (userData) {
      let { data } = await useFetch("compare", {
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
        },
      });
      await GetComparetems();
    }
  };

  const GetComparetems = async () => {
    if (useCookie("uat").value) {
      let { data, error } = await useFetch("compare", {
        baseURL: BaseUrl,
        headers: GetHeaders(),
        method: "get",
        key: "GetAllcompareItemsInStore",
      });
      if (!error.value) {
        compare.value = data.value?.data || [];
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
        onResponse({ response, error }) {
          if (error) {
            useNuxtApp().$useToaster({ msg: error.message, type: "error" });
          } else {
            useNuxtApp().$useToaster({
              msg: "Item Removed From compare",
              type: "warning",
            });
          }
        },
      });
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
    GetCompare,
  };
});
