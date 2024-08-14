
export const useSettingsStore = defineStore("settings-store", () => {

    let currencySymbol = ref('$'),currencyName = ref('USD')

  return {
    currencySymbol,
    currencyName
  };
});