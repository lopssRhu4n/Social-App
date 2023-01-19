import { DefaultContacts } from "@/utils/DefaultContacts";
import type { IContact } from "@/interfaces/IContact";
import { defineStore } from "pinia";
import { ref } from "vue";
import type { IMessage } from "@/interfaces/IMessage";

export const useContactStore = defineStore("contact", () => {
  const contacts = ref<IContact[]>(DefaultContacts);

  const changeContactsMessages = (Arr: IMessage[], contact: IContact) => {
    const index = contacts.value.indexOf(contact);
    contacts.value[index].messages = Arr;
  };

  return { contacts, changeContactsMessages };
});
