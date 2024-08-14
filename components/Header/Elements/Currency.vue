<template>
  <div>
    <!-- Currency Basic Style -->
    <!-- <OnClickOutside class="modal-content" @trigger=" open = false" v-if="style == 'basic'">
        <div class="dropdown theme-form-select">
            <WidgetsButton :classes="'btn dropdown-toggle'" :type="'button'" :id="'open_dropdown_basic_btn'"
                @onClick="openDropDown()">
                <span v-if="selectedCurrency.code">{{ selectedCurrency.code }}</span>
            </WidgetsButton>

            <ul class="dropdown-menu dropdown-menu-end sm-dropdown-menu" :class="{ 'show': open }">
                <li v-for="currencies in Currencies.data" :key="currencies">
                    <a class="dropdown-item" id="aud" href="javascript:void(0)" @click="selectCurrency(currencies)">{{
                        currencies.code }}</a>
                </li>
            </ul>
        </div>
    </OnClickOutside> -->

    <!-- Currency Standard Style -->
    <!-- <OnClickOutside class="modal-content" @trigger="open = false" v-if="style == 'standard'">
        <WidgetsButton :classes="'dropdown-toggle m-0'" :type="'button'" :id="'open_dropdown_standard_btn'"
            @onClick="openDropDown()">
            <span v-if="selectedCurrency.code">{{ selectedCurrency.code }} <i class="ri-arrow-down-s-line"></i></span>
        </WidgetsButton>
        <ul class="dropdown-menu dropdown-menu-end sm-dropdown-menu" :class="{ 'show': open }">
            <li v-for="currencies in Currencies.data" :key="currencies">
                <a class="dropdown-item" id="usd" href="javascript:void(0)" @click="selectCurrency(currencies.code)">{{
                    currencies.code }}</a>
            </li>
        </ul>
    </OnClickOutside> -->
  </div>
</template>
<!-- 
<script setup>
import { OnClickOutside } from '@vueuse/components'
import { storeToRefs } from 'pinia';
import { useDataStore } from '~/store/data';
import { useCurrencyStore } from '@/store/currency'
let props = defineProps({
    style: { type: [String,Object], default: 'basic' }
})

let { Currencies } = storeToRefs(useDataStore())
let open = ref(false)

let selectedCurrency = ref(useCookie('currency').value ? useCookie('currency').value : Currencies?.value?.data[0])
let setting = ref()
function openDropDown() {
    open.value = !open.value;
}
function selectCurrency(currency) {
    selectedCurrency.value = currency;
    open.value = false;
    useCurrencyStore().getCurrencyObj(currency)
}
</script>

<style lang="scss" scoped></style> -->
