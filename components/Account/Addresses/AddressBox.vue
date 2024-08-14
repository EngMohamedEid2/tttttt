<template>
  <div>
    <div class="label">
      <label>{{ address?.title }}</label>
    </div>
    <div class="table-responsive address-table">
      <table class="table">
        <tbody>
          <tr>
            <td colspan="2">{{ user?.name }}</td>
          </tr>
          <tr>
            <td>{{ $t("Address") }} :</td>
            <td>
              <p>
                {{ address?.street }}, {{ address?.city }},
                {{ address?.state?.name }},
                {{ address?.country?.name }}
              </p>
            </td>
          </tr>
          <tr>
            <td>{{ $t("Pin Code") }} :</td>
            <td>{{ address?.pincode }}</td>
          </tr>
          <tr>
            <td>{{ $t("Phone") }} :</td>
            <td>+{{ address?.country_code }} {{ address?.phone }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
let props = defineProps({
  address: Object,
  user: Object,
});
</script>

<style lang="scss" scoped></style>
