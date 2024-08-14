<template>
  <div class="row g-sm-4 g-2">
    <div class="col-lg-6">
      <WidgetsModalsProductModalImages :Data="Data.item" />
    </div>
    <WidgetsModalsProductModalRight :Product="Data.item" />
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useCartStore } from "~~/store/cart";
let props = defineProps({ Data: { type: Object } });
// console.log(props.value);

let { addSelectionToCart } = useCartStore(),
  { cart } = storeToRefs(useCartStore());
let attributes = ref({}),
  existingCartItemIndex = ref(-1),
  GlobalSelectedVariant = ref({}),
  selectedAttributeIds = ref([]),
  productAvailable = ref(true),
  formSubmitted = ref(false);

// props.Data.item?.attributes.forEach((attribute, i) => {
//   attributes.value[attribute.name] = {
//     dropDownOptions: attribute.attribute_values,
//     available: true,
//   };
// });

// watch(
//   () => attributes,
//   () => {
//     (productAvailable.value = true),
//       (selectedAttributeIds.value = []),
//       (existingCartItemIndex.value = -1),
//       (GlobalSelectedVariant.value = {});
//     for (const key in attributes.value) {
//       attributes.value[key].selected?.id &&
//         selectedAttributeIds.value.push(attributes.value[key].selected?.id);
//     }
//     if (
//       selectedAttributeIds.value.length ==
//       props.Data.item.variations[0]?.attribute_values?.length
//     ) {
//       props.Data.item.variations.every((variant, index) => {
//         let count = 0;
//         selectedAttributeIds.value.forEach((id) => {
//           variant.attribute_values.map((value) => value.id).includes(id) &&
//             count++;
//         });
//         if (count == selectedAttributeIds.value.length) {
//           GlobalSelectedVariant.value = JSON.parse(JSON.stringify(variant));
//           let productIndex = cart.value.findIndex(
//             (item) =>
//               item.product_id == props.Data.item.id &&
//               item.variation_id == variant.id
//           );
//           productIndex >= 0
//             ? (existingCartItemIndex.value = productIndex)
//             : (existingCartItemIndex.value = -1);
//           return false;
//         } else return true;
//       });
//       Object.keys(GlobalSelectedVariant.value).length
//         ? (productAvailable.value = true)
//         : (productAvailable.value = false);
//     }
//   },
//   { deep: true }
// );
</script>
