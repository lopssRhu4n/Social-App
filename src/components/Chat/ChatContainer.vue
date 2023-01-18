<script setup lang="ts">
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
  <div class="h-full pt-4 pb-10 w-4/5 flex flex-col justify-between">
    <ChatContainerHeader
      :img="actualContact.img"
      :username="actualContact.username"
    />
    <ChatContainerBody :messages="actualContact.messages" />
    <ChartContainerFooter />
  </div>
</template>
