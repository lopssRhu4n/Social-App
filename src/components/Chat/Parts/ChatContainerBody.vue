<script lang="ts" setup>
import UserMessage from "@/components/Chat/Messages/UserMessage.vue";
import ContactMessage from "@/components/Chat/Messages/ContactMessage.vue";
import { useMessageStore } from "@/stores/messagesStore";

const messagesStore = useMessageStore();
</script>

<template>
  <div
    class="chat-container-body w-full h-3/5 p-4 overflow-y-auto flex flex-col"
  >
    <div v-for="message in messagesStore.messages" :key="message.id">
      <UserMessage v-if="message.from == 'user'" :item="message" />
      <ContactMessage v-else :text="message.text" />
    </div>
  </div>
</template>
