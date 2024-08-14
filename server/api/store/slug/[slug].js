import store from '../store.json'
export default defineEventHandler((event) => {  
      const slug = event.context.params.slug;
      const storeObj = store.data?.find((elem) => elem?.slug == slug);
      return  storeObj 
    })
