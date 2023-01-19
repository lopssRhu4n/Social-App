<script setup lang="ts">
import ChatContainerHeader from "@/components/Chat/Parts/ChatContainerHeader.vue";
import ChatContainerBody from "@/components/Chat/Parts/ChatContainerBody.vue";
import ChartContainerFooter from "@/components/Chat/Parts/ChatContainerFooter.vue";
import { useActualContactStore } from "@/stores/actualContactStore";
import { useMessageStore } from "@/stores/messagesStore";

const actualContactStore = useActualContactStore();
const messagesStore = useMessageStore();
messagesStore.changeMessages(actualContactStore.actualContact.messages);
</script>

<template>
  <div class="h-full pt-4 pb-10 w-4/5 flex flex-col justify-between">
    <ChatContainerHeader
      :img="actualContactStore.actualContact.img"
      :username="actualContactStore.actualContact.username"
    />
    <ChatContainerBody />
    <ChartContainerFooter />
  </div>
</template>
