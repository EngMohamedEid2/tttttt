import product from '../product.json'
export default defineEventHandler((event) => {  
      const slug = event.context.params.slug;
      const query = getQuery(event)
      const productObj = product.data?.find((elem) => elem?.slug == slug);
      return  productObj
    })
