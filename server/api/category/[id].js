import category from './category.json'
export default defineEventHandler((event) => {
    const id = getRouterParam(event, 'id')
    const categoryObj = category?.data.find((elem) => elem.id == id)
    return categoryObj
    })
