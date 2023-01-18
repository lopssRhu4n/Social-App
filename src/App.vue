<script setup lang="ts">
import { RouterView } from "vue-router";
import SideBar from "@/components/layout/SideBarComponent.vue";
</script>

<template>
  <div class="w-screen h-screen grid grid-cols-12 bg-bg grid-rows-6">
    <SideBar />
    <RouterView v-slot="{ Component }">
      <transition
        enter-active-class="animate__animated animate__fadeInRight"
        leave-active-class="animate__animated animate__fadeOutRight"
        mode="out-in"
      >
        <component :is="Component"></component>
      </transition>
    </RouterView>
  </div>
</template>

<style lang="css" scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
</style>
