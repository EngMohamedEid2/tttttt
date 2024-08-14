import { defineStore } from "pinia";

export const useLocationStore = defineStore("location-store", () => {
  var countries = ref([]),ResponseCountries = ref([]),ResponseStates = ref([]),
    states = ref([]);

    const GetData = async()=>{
     let {data:Countries,error:CountryError} = await HandleRequest("country",
        {  key: "getAllCountries" }
        );

      if(!CountryError.value){
        ResponseCountries.value= Countries.value;
      }
    
      let {data:States,error:StateErrors} = await HandleRequest('state',
        {  key: "getAllStates" }
      );

      if(!StateErrors.value){
        ResponseStates.value= States.value;
      }
    }

    GetData();

  return {
    countries,
    states,
    ResponseCountries,
    ResponseStates
  };
});
