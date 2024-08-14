import _ from "lodash";
import { GetHeaders } from "~~/services/api/handleRequest";
import { useApiCartStore } from "./CartWithApi";
import { useCheckoutStore } from "./checkout";
import Cart from "~/components/Header/Elements/cart.vue";
export const useCartStore = defineStore("cart-store", () => {
  var cart = ref([]);
  var modals = ref({ quickView: { show: false } });
  let cartToggle = ref(false);

  const GetCartDataFromApi = async () => {
    let { data, error } = await useFetch("cart", {
      baseURL: BaseUrl,
      headers: GetHeaders(),
      method: "get",
    });
    if (error.value) {
    } else {
      cart.value = data?.value?.items;
    }
  };

  const addToCart = async ({ product, quantity = 1, variation }) => {
    if (product?.variations?.length) {
      modals.value.quickView.item = product;
      modals.value.quickView.show = true;
    } else {
      if (useCookie("uat").value) {
        await useApiCartStore().api_AddToCart({ product, quantity });
        localStorage.setItem("cart", JSON.stringify(cart.value));
        let localCart = JSON.parse(localStorage.getItem("cart"));
        if (localCart.length) {
          SetCart({ Cart: localCart });
        }
      } else {
        let ItemToAdd = {
          product_id: product?.id,
          product,
          variation_id: variation?.id || null,
        };

        let cartItemIndex = cart.value.findIndex(
          (item) => item?.product_id == product?.id
        );

        if (cartItemIndex < 0) {
          ItemToAdd.quantity = 1;
          cart.value.push(_.cloneDeep(ItemToAdd));
          localStorage.setItem("cart", JSON.stringify(cart.value));
          let localCart = JSON.parse(localStorage.getItem("cart"));
          if (localCart.length) {
            SetCart({ Cart: localCart });
          }
        } else {
          // if (
          //   cart.value[cartItemIndex].quantity + quantity >=
          //     cart.value[cartItemIndex].product?.quantity ||
          //   cart.value[cartItemIndex]?.quantity + quantity <= 0
          // ) {
          //   useNuxtApp().$useToaster({
          //     msg: `You cannot add this item more than ${cart.value[cartItemIndex].quantity} times`,
          //     type: "error",
          //   });
          // } else {
          ItemToAdd = cart.value[cartItemIndex];
          ItemToAdd.quantity += quantity;
          // }
        }
      }
    }
    // console.log(cart.value);
  };

  const addToCartProduct = async ({
    product,
    quantity = 1,
    variation_id,
    variation,
  }) => {
    if (useCookie("uat").value) {
      await useApiCartStore().api_AddToCart({
        product,
        quantity,
        variation,
        variation_id,
      });
      localStorage.setItem("cart", JSON.stringify(cart.value));
      let localCart = JSON.parse(localStorage.getItem("cart"));
      if (localCart.length) {
        SetCart({ Cart: localCart });
      }
    } else {
      let ItemToAdd = {
        product_id: product?.id,
        product,
        variation: variation || null,
        variation_id: variation_id || null,
      };
      let cartItemIndex = cart.value.findIndex(
        (item) => item?.product_id == product?.id
      );
      if (cartItemIndex < 0) {
        ItemToAdd.quantity = 1;
        cart.value.push(ItemToAdd);
        localStorage.setItem("cart", JSON.stringify(cart.value));
        let localCart = JSON.parse(localStorage.getItem("cart"));
        if (localCart.length) {
          SetCart({ Cart: localCart });
        }
      } else {
        if (
          cart.value[cartItemIndex].quantity + quantity >=
            cart.value[cartItemIndex].product?.quantity ||
          cart.value[cartItemIndex]?.quantity + quantity <= 0
        ) {
          useNuxtApp().$useToaster({
            msg: `You cannot add this item more than ${cart.value[cartItemIndex].quantity} times`,
            type: "error",
          });
        } else {
          ItemToAdd = cart.value[cartItemIndex];
          ItemToAdd.quantity += quantity;
        }
      }
    }
  };

  const ChangeQuantity = ({ CartItem, quantity = 1 }) => {
    if (useCookie("uat").value) {
      useApiCartStore().api_change_quantity({ CartItem, quantity });
    } else {
      let ItemIndex = cart.value.findIndex((item) =>
        CartItem.variation_id
          ? item.product_id == CartItem.product_id &&
            item.variation_id == CartItem.variation_id
          : item.product_id == CartItem.product_id
      );

      if (ItemIndex > -1) {
        if (quantity > 0) {
          CartItem.quantity++;
        } else {
          CartItem.quantity--;
          if (CartItem.quantity <= 0) {
            RemoveFromCart(cart.value[ItemIndex]);
            cart.value.splice(ItemIndex, 1); // Remove item from the cart array
          }
        }
      } else {
        if (CartItem.quantity > 0) {
          CartItem.quantity--;
          if (CartItem.quantity <= 0) {
            RemoveFromCart(CartItem);
            let CartItemIndex = cart.value.findIndex(
              (item) => item === CartItem
            );
            if (CartItemIndex > -1) {
              cart.value.splice(CartItemIndex, 1); // Remove item from the cart array
            }
          }
        }
      }
    }
  };
  // console.log(cart); // Check cart content

  const removeFromCart = (product) => {
    let itemIndex = cart.value.findIndex((item) => item.id == product.id);
    itemIndex > -1 && cart.value.splice(itemIndex, 1);
  };

  const ToggleModal = ({ modal = "quickView", product, value = true }) => {
    if (product) {
      // let priceArray = product.variations?.map((item) => Number(item.price));
      // priceArray.length &&
      //   (product.CartItemPrice = `$${Math.min(...priceArray)} - $${Math.max(
      //     ...priceArray
      //   )}`);
      modals.value[modal].item = product;
    }
    modals.value[modal].show = value;
    !value &&
      "product" in modals.value[modal] &&
      delete modals.value[modal]?.item;
  };

  function addSelectionToCart({ product, variation, index, quantity = 1 }) {
    let ItemIndexInCart = cart.value.findIndex(
      (item) =>
        item.product_id == product.id && item.variation_id == variation.id
    );
    if (!useCookie("uat").value) {
      cart.value.push({
        product_id: product.id,
        variation_id: variation.id,
        quantity,
        product,
      });
    } else {
      useApiCartStore().api_AddToCart({ product, variation });
    }
  }

  const SetCart = ({ Cart }) => {
    cart.value = Cart;
  };

  const RemoveFromCart = (CartItem) => {
    if (useCookie("uat").value) {
      useApiCartStore().api_RemoveFromCart({ CartItem });
      localStorage.removeItem({ CartItem });
    } else {
      let ItemIndex = cart.value.findIndex((item) =>
        CartItem?.CartItem?.variation_id
          ? CartItem?.CartItem?.variation_id == item.variation_id &&
            CartItem?.CartItem?.product_id == item.product_id
          : CartItem?.CartItem?.product_id == item.product_id
      );
      ItemIndex > -1 ? cart.value.splice(ItemIndex, 1) : null;
    }
  };

  var CartTotal = computed(() => {
    let subTotal = 0;
    cart.value.forEach((item) => {
      var price = item.product?.retail_price;
      // item.product?.variations?.filter(
      //   (product) => product.id == item.variation_id
      // )[0]?.price || item.product?.retail_price;
      var discount = 0;
      // item.product?.variations?.filter(
      //   (product) => product.id == item.variation_id
      // )[0]?.discount ||
      // item.product?.discount ||
      // 0;

      subTotal += (price - (price * discount) / 100) * item.quantity;
    });
    return subTotal;
  });

  const GetProductFromCart = ({ CartItem }) => {
    return CartItem.variation_id
      ? CartItem.product.variations[
          CartItem.product.variations?.findIndex(
            (item) => item.id == CartItem.variation_id
          )
        ]
      : CartItem.product;
  };

  const setLocalCartInDatabase = async ({ token }) => {
    let CartToAdd = cart.value.map((item) => {
      return {
        product_id: item.product_id,
        variation_id: item.variation_id || "",
        quantity: item.quantity || "",
      };
    });
    if (CartToAdd.length) {
      let { data, error } = await useFetch("cart", {
        baseURL: BaseUrl,
        headers: { Authorization: `Bearer ${token}` },
        method: "post",
        key: "InsertLocalCartInDatabase",
        body: { products: CartToAdd },
      });
      if (!error.value) {
        cart.value = [];
        await GetCartDataFromApi();
      }
    }
  };

  function cartToggleValue(value) {
    cartToggle.value = value;
  }

  watch(
    () => cart,
    () => {
      cart.value.length &&
        useCheckoutStore().SetCheckoutProduct({ value: cart.value });
    },
    { deep: true }
  );

  return {
    addToCart,
    setLocalCartInDatabase,
    CartTotal,
    SetCart,
    modals,
    cart,
    cartToggle,
    cartToggleValue,
    removeFromCart,
    ChangeQuantity,
    ToggleModal,
    addSelectionToCart,
    GetCartDataFromApi,
    RemoveFromCart,
    GetProductFromCart,
    addToCartProduct,
  };
});
