import blog from './blog.json'
export default defineEventHandler((event) => {  
      const query = getQuery(event)
      return blog 
    })
