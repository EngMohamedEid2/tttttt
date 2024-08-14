<template>
<div>
  <div v-for="(attribute, index) in attributes" :key="index">
    <div class="product-title" v-if="!isAllVariantStyleDropdown">
      <h4>{{ attribute?.name }} : {{ attribute?.selected_value }}</h4>
    </div>

    <div v-if="attribute?.style == 'dropdown' || isAllVariantStyleDropdown">
      <select id="input-state-{{index}}" class="form-control form-select"
        @change="setVariant(product.variations, attribute.attribute_values[$event.target.value])">
        <option selected disabled>{{ $t('Choose') }} {{ attribute?.name }}</option>
        <template v-for="(value, index) in attribute.attribute_values" :key="index">
          <option :selected="variantIds.includes(value.id) && !soldOutAttributesIds.includes(value.id)" :value="index"
            :disabled="soldOutAttributesIds.includes(value.id)" v-if="attributeValues?.includes(value.id)">
            {{ value.value }}
          </option>
        </template>
      </select>
    </div>

    <div v-else-if="attribute?.style == 'radio'">
      <div class="d-flex gap-3">
        <div v-for="(value, index) of attribute.attribute_values" :key="index">
          <div class="form-check" v-if="attributeValues?.includes(value.id)">
            <input type="radio" class="form-check-input" :id="'radio-' + index + '-' + index"
              :name="'radio-group-' + index" :value="index"
              :checked="variantIds.includes(value.id) && !soldOutAttributesIds.includes(value.id)"
              :disabled="soldOutAttributesIds.includes(value.id)"
              :class="{ 'disabled': soldOutAttributesIds.includes(value.id) }"
              @change="setVariant(product.variations, attribute.attribute_values[$event.target.value])" />
            <label :for="'radio-' + index + '-' + index" class="form-check-label">{{ value?.value }}</label>
          </div>
        </div>
      </div>
    </div>
    <template v-else>
      <ul class="select-package circle" :class="attribute?.style" v-if="attribute?.style == 'color'">
        <template v-for="(value, index) in attribute.attribute_values" :key="index">
          <li v-if="attributeValues?.includes(value.id)"
            :class="{ 'active': variantIds.includes(value.id) && !soldOutAttributesIds.includes(value.id), 'disabled': soldOutAttributesIds.includes(value.id) }"
            placement="top">
            <button @click="setVariant(product.variations, value)" :style="{ 'background-color': value.hex_color }">
            </button>
          </li>
        </template>
      </ul>
      <div v-else>
        <ul class="select-package cricle" :class="attribute?.style">
          <template v-for="(value, index) of attribute.attribute_values" :key="index">
            <li v-if="attributeValues?.includes(value.id)"
              :class="{ 'active': variantIds.includes(value.id) && !soldOutAttributesIds.includes(value.id), 'disabled': soldOutAttributesIds.includes(value.id) }">
              <img :src="value?.variation_image ? value?.variation_image?.original_url : '/images/product.png'"
                @click="setVariant(product.variations, value)" v-if="attribute?.style == 'image'">
              <button v-else :id="'value_btn'" :type="'button'" @click="setVariant(product.variations, value)">
                {{ value?.value }}</button>
            </li>
          </template>
        </ul>
      </div>
    </template>
  </div>
</div>
</template>
<script setup>
let props = defineProps({
  product: Object,
  attributes: Object,
  isAllVariantStyleDropdown: Boolean,
  owlCar: Object
})

const emit = defineEmits(['selectVariation']);

let cartItem = ref(null);
let productQty = ref(1);
let attributeValues = ref([]);
let variantIds = ref([]);
let soldOutAttributesIds = ref([]);
let selectedOptions = ref([]);
let selectedVariation = ref(null);

watchEffect(() => {
  let product = ref()
  let attributes = ref()
  if (props.product) {
    product.value = props.product;
  }

  if (props.attributes) {
    attributes.value = props.attributes;
  }

  // const items = store.state.cart.items;
  // cartItem.value = items.find(item => item.product.id === product.value.id);
});

function checkVariantAvailability(product) {
  selectedOptions.value = [];
  attributeValues.value = [];
  selectedVariation.value = null;

  props?.product?.variations?.forEach(variation => {
    variation?.attribute_values?.filter(attribute_value => {
      if (attributeValues.value.indexOf(attribute_value?.id) === -1)
        attributeValues.value.push(attribute_value?.id);
    });
  });

  // Set cart Variant Default
  if (cartItem.value?.variation) {
    cartItem.value.variation.attribute_values.forEach(attribute_val => {
      setVariant(props?.product?.variations, attribute_val);
    });
  }

  if (!cartItem.value) {
    // Set First Vatriant Default
    for (const attribute of props?.product?.attributes) {
      if (attributeValues.value.length && attribute?.attribute_values?.length) {
        let values = [];
        for (const value of attribute.attribute_values) {
          if (values.indexOf(value.id) === -1)
            values.push(value.id);
          if (attributeValues.value.includes(value.id)) {
            setVariant(props?.product?.variations, value);
            break; // Break out of the inner loop after setting the first variant
          }

        }
      }
    }
  }



  // Set Variation Image
  props?.product?.variations?.forEach(variation => {
    let attrValues = variation?.attribute_values?.map(attribute_value => attribute_value?.id);
    props.product?.attributes.filter(attribute => {
      if (attribute.style == 'image') {
        attribute.attribute_values.filter(attribute_value => {
          if (attributeValues.value.includes(attribute_value.id)) {
            if (attrValues.includes(attribute_value.id)) {
              attribute_value.variation_image = variation.variation_image;
            }
          }
        });
      }
    });
  });
}


const setVariant = (variations, value) => {
  const index = selectedOptions.value.findIndex(item => Number(item.attribute_id) === Number(value?.attribute_id));
  soldOutAttributesIds.value = [];
  if (index === -1) {
    selectedOptions.value.push({ id: Number(value?.id), attribute_id: Number(value?.attribute_id) });
  } else {
    selectedOptions.value[index].id = value?.id;
  }


  variations?.forEach(variation => {
    let attrValues = variation?.attribute_values?.map(attribute_value => attribute_value?.id);
    variantIds.value = selectedOptions?.value.map(variants => variants?.id);
    let doValuesMatch = attrValues.length === selectedOptions?.value?.length &&
      attrValues.every(value => variantIds?.value?.includes(value));


    if (doValuesMatch) {
      selectedVariation.value = variation;
      props.product['quantity'] = selectedVariation?.value ? selectedVariation?.value?.quantity : product?.value?.quantity;
      props.product['sku'] = selectedVariation.value ? selectedVariation?.value.sku : props.product?.sku;

      if (props.owlCar && selectedVariation.value.variation_image) {
        props.owlCar.to(selectedVariation.value.variation_image.id.toString());
      }

      checkStockAvailable();
    }

    if (variation.stock_status == 'out_of_stock') {
      variation?.attribute_values.filter(attr_value => {
        if (attrValues.some(value => variantIds?.value?.includes(value))) {
          if (attrValues.every(value => variantIds?.value?.includes(value))) {
            soldOutAttributesIds.value.push(attr_value.id);
          } else if (!variantIds?.value?.includes(attr_value.id)) {
            soldOutAttributesIds.value.push(attr_value.id);
          }
        } else if (attrValues.length == 1 && attrValues.includes(attr_value.id)) {
          soldOutAttributesIds.value.push(attr_value.id);
        }
      });
    }
  });

  // Set Attribute Value
  props?.product?.attributes?.filter(attribute => {
    attribute?.attribute_values?.filter(a_value => {
      if (a_value?.id == value?.id) {
        attribute.selected_value = a_value?.value;
      }
    });
  });
  emit("selectVariation", selectedVariation.value);
};

const checkStockAvailable = () => {
  if (selectedVariation.value) {
    selectedVariation.value['stock_status'] = selectedVariation.value.quantity < productQty.value ? 'out_of_stock' : 'in_stock';
  } else {
    props.product['stock_status'] = props.product.quantity < productQty.value ? 'out_of_stock' : 'in_stock';
  }
};




onMounted(() => {
  let productData = props?.product
  checkVariantAvailability(productData);;
})

</script>
<style lang="scss" scoped></style>