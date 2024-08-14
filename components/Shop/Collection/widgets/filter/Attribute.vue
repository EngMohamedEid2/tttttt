<template>
    <div class="accordion-item" v-for="(attributes, index) in attribute" :key="index">
        <h2 class="accordion-header" >
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                :data-bs-target="`#attributes-dropdown${index}`">
                <span>{{ attributes.name }}</span>
            </button>
        </h2>
        <div :id="`attributes-dropdown${index}`" class="accordion-collapse collapse show">
            <div class="accordion-body">
                <ul class="category-list custom-padding custom-height">
                    <li v-for="(attribute_value , index) of attributes?.attribute_values" :key="index">
                        <div class="form-check ps-0 m-0 category-list-box">
                            <input class="checkbox_animated" type="checkbox" :id="attribute_value.value"
                                :value="attribute_value.slug" v-model="store.filterObject.selectedAttributes" />
                            <label class="form-check-label color-label-box" :for="attribute_value.value">
                                <div class="color-box" v-if="attributes.style === 'color'"
                                    :style="{ 'background-color': attribute_value.hex_color }"></div>
                                <span class="name">{{ attribute_value.value }}</span>
                            </label>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script setup>
import { storeToRefs } from 'pinia';
import { useCollectionStore } from '~/store/collection';

let store = useCollectionStore()

let { filter, attribute, selectedAttributes } = storeToRefs(useCollectionStore())
let { data, error } = await HandleRequest('attribute', { key: 'getAllAttributeInFilter1' })
if (!error.value) {
    attribute.value = data?.value?.data;
}

function checked(item) {
    if (selectedAttributes.value?.indexOf(item) != -1) {
        return true;
    }
    return false;
}
</script>

<style lang="scss" scoped></style>