import type { IMessage } from "@/interfaces/IMessage";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useMessageStore = defineStore("message", () => {
  const messages = ref<IMessage[]>([]);

  function addMessage(message: IMessage) {
    messages.value.push(message);
  }

  function removeMessage(id: number) {
    const findIndex = messages.value.map((e) => e.id);
    const index = findIndex.indexOf(id);
    messages.value = messages.value.splice(index, 1);
  }

  function changeMessages(arr: IMessage[]) {
    messages.value = arr;
  }

  return { messages, addMessage, removeMessage, changeMessages };
});
