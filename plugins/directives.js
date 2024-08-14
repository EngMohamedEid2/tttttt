export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('bgImage', {
      
    getSSRProps({value},vnode){
      return{
      }
    }
    })
  })
  