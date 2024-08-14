import { useCartStore } from "./cart";

export const useCheckoutStore = defineStore("checkout-store", () => {
  let CheckoutData = ref({
      products: [],
      billing_address_id: "",
      shipping_address_id: "",
      delivery_interval: "1 day",
      delivery_description: null,
      payment_method: "cod",
      payment_method_id: 4,
      wallet_balance: false,
      points_amount: false,
      coupon: null,
    }),
    IsCheckoutDataValid = ref(false);
  let CheckoutInfo = ref({
    total: {
      convert_point_amount: -10,
      convert_wallet_balance: 500.4,
      coupon_total_discount: 10,
      points: 300,
      points_amount: 10,
      shipping_total: 0,
      sub_total: 35.19,
      tax_total: 2.54,
      total: 37.73,
      wallet_balance: 84.4,
    },
  });
  let loading = ref(false);
  let couponError = ref("");
  const SetCheckoutAddress = ({ type = "shipping", id }) => {
    type == "billing"
      ? (CheckoutData.value.billing_address_id = id)
      : (CheckoutData.value.shipping_address_id = id);
  };
  const allowApi = (value) => {
    IsCheckoutDataValid.value = value;
  };
  const getCouponCode = (value) => {
    CheckoutData.value.coupon = value;
  };
  const SetPaymentOption = (value, id) => {
    value && (CheckoutData.value.payment_method = value);
    id && (CheckoutData.value.payment_method_id = id);
  };
  const setDeliveryInterval = (value) => {
    value && (CheckoutData.value.delivery_interval = value);
  };
  const setDeliveryDescription = (value) => {
    CheckoutData.value.delivery_interval =
      value == "Standard Delivery | Approx 5 to 7 Days"
        ? null
        : CheckoutData.value.delivery_interval;
    value && (CheckoutData.value.delivery_description = value);
  };
  const SetCheckoutProduct = ({ value }) => {
    CheckoutData.value.products = [];
    value.forEach((el) => {
      CheckoutData.value.products.push({
        product_id: el.product_id,
        variation_id: el.variation_id,
        quantity: el.quantity,
      });
    });
  };

  const SetCheckoutInfo = async () => {
    if (Object.keys(CheckoutInfo.value).length) {
      loading.value = true;
      setTimeout(() => {
        loading.value = false;
      }, 4000);
    } else {
      var { data, error, refresh } = await HandleRequest("order", {
        baseURL: BaseUrl,
        headers: GetHeaders(),
        method: "post",
        key: "GetCheckoutData",
        body: CheckoutData.value,
        cache: false,
        onResponse({ response }) {
          CheckoutInfo.value = response._data;
          if (!response._data.success) {
            couponError.value = response._data.message;
          }
        },
      });
    }
  };

  const PlaceOrder = async () => {
    // let { data, error } = await useFetch("order", {
    //   baseURL: BaseUrl,
    //   headers: GetHeaders(),
    //   method: "post",
    //   key: "PlaceOrder",
    //   cache: false,
    //   body: {
    //     ...CheckoutData.value,
    //     return_url: "http://localhost:3000/account/order/details/1000",
    //     cancel_url: "http://localhost:3000",
    //   },
    // });
    // if (!error.value) {
    //   var order_number = data.value?.order_number;
    //   if (data.value.is_redirect) {
    //     window.open(data.value.url, "");
    //     useRouter().push(`/account/order/details/1000`);
    //   } else {
    //     useRouter().push(`/account/order/details/1000`);
    //   }
    // }
  };

  const SetPayment = (value) => {
    value && (CheckoutData.value.payment_method = value);
  };

  watch(
    () => IsCheckoutDataValid,
    () => {
      if (IsCheckoutDataValid && useCookie("uat").value) {
        SetCheckoutInfo();
      }
    },
    { deep: true }
  );

  return {
    CheckoutData,
    CheckoutInfo,
    SetCheckoutAddress,
    SetPayment,
    SetPaymentOption,
    SetCheckoutProduct,
    PlaceOrder,
    loading,
    setDeliveryInterval,
    setDeliveryDescription,
    getCouponCode,
    couponError,
    SetCheckoutInfo,
    allowApi,
  };
});
