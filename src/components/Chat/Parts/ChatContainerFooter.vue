<script lang="ts" setup>
import type { IMessage } from "@/interfaces/IMessage";
import { useActualContactStore } from "@/stores/actualContactStore";
import { useMessageStore } from "@/stores/messagesStore";
import { useContactStore } from "@/stores/contactsStore";
import { ref } from "vue";
const messageText = ref("");
const messageStore = useMessageStore();
const actualContactStore = useActualContactStore();
const contactStore = useContactStore();

const addMessage = messageStore.addMessage;
const placeholder = ref("Message...");

const sendMessage = () => {
  if (messageText.value !== "") {
    let message: IMessage = {
      id: 9,
      text: messageText.value,
      from: "user",
      send: "Agora",
    };

    addMessage(message);
    contactStore.changeContactsMessages(
      messageStore.messages,
      actualContactStore.actualContact
    );
  } else {
    placeholder.value = "Mensagens não podem ser vazias!";
    setTimeout(() => {
      placeholder.value = "Message...";
    }, 2000);
  }
};
</script>

<template>
  <div class="flex items-center justify-around">
    <input
      type="text"
      name=""
      v-model="messageText"
      id=""
      :placeholder="placeholder"
      class="h-16 text-white px-3 outline-none shadow-lg rounded-md bg-secondary w-4/5"
    />
    <button
      class="w-20 h-16 rounded-lg shadow-lg transition-all hover:-translate-y-2 bg-primary"
      @click="sendMessage"
    >
      <font-awesome-icon
        icon="fa-solid fa-arrow-up"
        class="text-white text-xl"
      />
    </button>
  </div>
</template>
