<template>
  <div>
    <Teleport to="body">
      <Transition name="modals">
        <div
          class="modal fade theme-modal view-modal show d-block"
          v-if="Data.show"
          id="view"
          tabindex="-1"
        >
          <div
            class="modal-dialog modal-dialog-centered modal-lg modal-fullscreen-sm-down"
          >
            <OnClickOutside
              class="modal-content"
              @trigger="
                () => {
                  emit('close');
                }
              "
            >
              <div class="modal-header p-0">
                <button
                  type="button"
                  class="btn-close"
                  @click.prevent="
                    () => {
                      emit('close');
                    }
                  "
                >
                  <Icon name="ri:close-line"></Icon>
                </button>
              </div>
              <div class="modal-body">
                <WidgetsModalsProductModalMain :Data="Data" />
              </div>
            </OnClickOutside>
          </div>
        </div>
      </Transition>
    </Teleport>
    <Teleport to="body">
      <Transition name="modals">
        <div class="bg-overlay show d-block" v-if="Data.show"></div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { OnClickOutside } from "@vueuse/components";

let props = defineProps({
    Data: {
      type: Object,
    },
  }),
  emit = defineEmits(["close"]);
</script>

<style lang="scss" scoped>
.modals-enter-active,
.modals-leave-active {
  transition: all 0.25s ease;
}

.modals-enter-from,
.modals-leave-to {
  opacity: 0;
  transform: scale(1.1);
}
</style>
