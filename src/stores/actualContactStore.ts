import type { IContact } from "@/interfaces/IContact";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useActualContactStore = defineStore("actualContact", () => {
  const actualContact = ref<IContact>();
  const setActualContact = (contact: IContact) => {
    actualContact.value = contact;
  };

  return { actualContact, setActualContact };
});
