
export const useSiteStore = defineStore("site-store", () => {
    var SiteSettings = ref({});

    const SetSiteSettings = ({settings})=>{
        settings && (SiteSettings.value = settings)
    }
  return {
    SiteSettings,
    SetSiteSettings
  };
});