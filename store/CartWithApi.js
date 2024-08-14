import { storeToRefs } from "pinia";
import { GetHeaders } from "~~/services/api/handleRequest";
import { useCartStore } from "./cart";

export const useApiCartStore = defineStore("api-cart-store", () => {

    let ApiCart = ref([]);
    var modals = ref({ quickView: { show: false } }), { cart } = storeToRefs(useCartStore());

    const api_AddToCart = async ({ product, quantity = 1, variation,variation_id }) => {
        if (product.variations?.length && !variation) {
            modals.value.quickView.item = product
            modals.value.quickView.show = true
        } else {
            let ItemToAdd = {    
             product:product,
                product_id: product?.id,
                quantity,
                variation_id: variation_id || null,
                variation: variation || null,
            };

            let { data, error } = await useFetch('cart', {
                baseURL: BaseUrl,
                headers: GetHeaders(),
                method: 'post',
                body: ItemToAdd
            })
            if (!error.value) {
                modals.value.quickView.show = false;
                await useCartStore().GetCartDataFromApi();
            }
        }
    }

    const api_change_quantity = async ({ CartItem, quantity = 1 }) => {
        if (cart.value.findIndex(item => CartItem.variation_id ? item.variation_id == CartItem.variation_id && item.product_id == CartItem.product_id : item.product_id == CartItem.product_id) > -1) {
            let { data, error } = await useFetch(`cart`, {
                method: 'put',
                key: 'updateCartItemQuantity',
                baseURL: BaseUrl,
                headers: GetHeaders(),
                body: {
                    id: CartItem.id,
                    product: CartItem.product,
                    product_id: CartItem.product_id,
                    variation: CartItem.variation || null,
                    variation_id: CartItem.variation_id || null,
                    quantity,
                }
            })
            if (!error.value) {
                await useCartStore().GetCartDataFromApi();
            }
        } else {
        }
    }

    const api_RemoveFromCart = async ({ CartItem }) => {
        let { data, error } = await useFetch(`cart/${CartItem?.CartItem?.id}`, {
            method: 'delete',
            baseURL: BaseUrl,
            headers: GetHeaders(),
            key: `deleteFromCart${CartItem.id}`
        })
        if (!error.value) {
            await useCartStore().GetCartDataFromApi();
        }
    }

    return {
        api_AddToCart,
        ApiCart,
        api_change_quantity,
        api_RemoveFromCart,
    };
});