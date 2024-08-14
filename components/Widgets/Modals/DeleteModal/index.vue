<template>
    <div class="modal-body p-3">
        <Icon name="ri:delete-bin-line" class="icon-box" />
        <h5 class="modal-title text-center">{{ 'Delete Item' }}?</h5>
        <p class="text-center">{{ "This Item Will Be Deleted Permanently. You Can't Undo This Action." }} </p>
        <div class="button-box">
            <WidgetsButton :classes="'btn btn-theme-outline btn-md fw-bold'" :id="'delete_no_btn'"
                @onClick="() => { emit('close') }">
                {{ 'No' }}
            </WidgetsButton>
            <WidgetsButton :classes="'btn theme-bg-color btn-md fw-bold text-light'" :id="'delete_yes_btn'"
                @click="handleDelete()">
                {{ 'yes' }}
            </WidgetsButton>
        </div>
    </div>
</template>

<script setup>
import { useUserStore } from "@/store/user";
let props = defineProps({
    addressId: Number
})

let emit = defineEmits(['close'])
async function handleDelete() {
    await useFetch('/address/' + props.addressId, {
        baseURL: BaseUrl,
        headers: GetHeaders(),
        method: 'delete',
        key: 'deleteAddress'
    })
    useUserStore().UpdateUserInfo()

}

</script>

<style lang="scss" scoped></style>