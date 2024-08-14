import { s as storeToRefs, l as useCartStore } from './server.mjs';

const IsProductInCart = ({ product }) => {
  let { cart } = storeToRefs(useCartStore()), exists = false;
  let index = cart.value.findIndex((item) => {
    if (!item.variant_id) {
      return item.product_id == product.id;
    }
    return false;
  });
  index > -1 && (exists = cart.value[index]);
  return exists;
};

export { IsProductInCart as I };
