import type { IContact } from "@/interfaces/IContact";
import { defineStore } from "pinia";
import { ref } from "vue";
import { DefaultContacts } from "@/utils/DefaultContacts";

export const useActualContactStore = defineStore("actualContact", () => {
  const actualContact = ref<IContact>(DefaultContacts[0]);
  const setActualContact = (contact: IContact) => {
    actualContact.value = contact;
  };

  return { actualContact, setActualContact };
});
