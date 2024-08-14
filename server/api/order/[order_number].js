import order from './order.json'
export default defineEventHandler((event) => {
    const orderId = getRouterParam(event, 'orderId')
    const orderObj = order?.data.find((elem) => elem.order_number == orderId)
    return orderObj
})
