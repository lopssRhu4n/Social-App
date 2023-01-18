import { DefaultContacts } from "@/utils/DefaultContacts";
import type { IContact } from "@/interfaces/IContact";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useContactStore = defineStore("contact", () => {
  const contacts = ref<IContact[]>(DefaultContacts);

  return { contacts };
});
