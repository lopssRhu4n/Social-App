<script setup lang="ts">
import ContactsBar from "@/components/Chat/ContactsBar.vue";
</script>

<template>
  <div class="row-span-6 col-span-11 grid grid-cols-11 grid-rows-6">
    <ContactsBar />
    <main class="row-span-6 col-span-8 justify-center items-center flex">
      <!-- <div class="h-full pt-4 pb-10 w-4/5 flex flex-col justify-between">
        <ChatContainerHeader
          :img="actualContact.img"
          :username="actualContact.username"
        />
        <ChatContainerBody :messages="actualContact.messages" />
        <ChartContainerFooter />
      </div> -->
      <RouterView v-slot="{ Component }">
        <transition
          enter-active-class="animate__animated animate__backInUp animate__fast"
          leave-active-class="animate__animated animate__backOutDown animate__fast"
          mode="out-in"
        >
          <component :is="Component"></component> </transition
      ></RouterView>
    </main>
  </div>
</template>

<style scoped>
.chat-container-body::-webkit-scrollbar {
  display: none;
}
</style>
