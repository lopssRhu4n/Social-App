import type { IMessage } from "@/interfaces/IMessage";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useMessageStore = defineStore("message", () => {
  const messages = ref<IMessage[]>([]);

  function addMessage(message: IMessage) {
    messages.value.push(message);
  }

  function removeMessage(message: IMessage) {
    const index = messages.value.indexOf(message);
    const arr = messages.value.slice(index, 1);
    messages.value = arr;
  }

  function changeMessages(arr: IMessage[]) {
    messages.value = arr;
  }

  return { messages, addMessage, removeMessage, changeMessages };
});
