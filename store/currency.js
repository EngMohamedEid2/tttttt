import { defineStore, storeToRefs } from "pinia";
import { useDataStore } from "@/store/data";
export const useCurrencyStore = defineStore("currency", () => {
  let currency = ref({});
  let { Currencies } = storeToRefs(useDataStore());
  async function allCurrency() {
    if (useCookie("currency").value) {
      currency.value = useCookie("currency").value;
    } else {
      currency.value = Currencies.value.data[0];
    }
  }
  function getCurrencyObj(currencyObj) {
    currency.value = currencyObj;
    useCookie("currency").value = currencyObj;
  }
  function convertCurrency(price) {
    return Number(price).toFixed(2);
  }
  // console.log(Currencies.value.data);
  return {
    currency,
    getCurrencyObj,
    allCurrency,
    convertCurrency,
  };
});
