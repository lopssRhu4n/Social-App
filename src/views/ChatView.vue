<script setup lang="ts">
import ContactsBar from "@/components/Chat/ContactsBar.vue";
import ChatContainerHeader from "@/components/Chat/Parts/ChatContainerHeader.vue";
import ChatContainerBody from "@/components/Chat/Parts/ChatContainerBody.vue";
import ChartContainerFooter from "@/components/Chat/Parts/ChatContainerFooter.vue";
import { useContactStore } from "@/stores/contactsStore";
import { ref } from "vue";

const props = defineProps<{
  id: string;
}>();

const contacts = useContactStore().contacts;

const actualContact = ref(contacts[Number(props.id) - 1]);
</script>

<template>
  <div class="row-span-6 col-span-11 grid grid-cols-11 grid-rows-6">
    <ContactsBar />
    <main class="row-span-6 col-span-8 justify-center items-center flex">
      <div class="h-full pt-4 pb-10 w-4/5 flex flex-col justify-between">
        <ChatContainerHeader
          :img="actualContact.img"
          :username="actualContact.username"
        />
        <ChatContainerBody :messages="actualContact.messages" />
        <ChartContainerFooter />
      </div>
    </main>
  </div>
</template>

<style scoped>
.chat-container-body::-webkit-scrollbar {
  display: none;
}
</style>
