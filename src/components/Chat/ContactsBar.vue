<script lang="ts" setup>
import ContactPreview from "./ContactPreview.vue";
import { useContactStore } from "@/stores/contactsStore";
import type { IMessage } from "@/interfaces/IMessage";
import { ref } from "vue";
const contacts = useContactStore().contacts;

const search = ref("");

const searchContact = () => {
  console.log(contacts);
  contacts.forEach((contact) => {
    console.log(
      `${contact.username} inclui ${search.value}: ${contact.username.includes(
        search.value
      )}`
    );
    if (!contact.username.includes(search.value)) {
      contacts.splice(contacts.indexOf(contact), 1);
    }
  });
};

const lastMessage = (arr: IMessage[]) => {
  const last = arr[arr.length - 1];
  return last;
};
</script>

<template>
  <aside
    class="row-span-6 col-span-3 bg-bg-secondary rounded-r-2xl items-center py-4 flex flex-col"
  >
    <div class="relative">
      <input
        @keyup="searchContact"
        type="text"
        v-model="search"
        placeholder="Search"
        class="w-80 outline-none h-16 mb-2 bg-bg rounded-md p-2 text-gray-400"
      />

      <font-awesome-icon
        icon="fa-solid fa-magnifying-glass"
        class="absolute top-6 right-4 text-gray-400"
      />
    </div>

    <div class="h-4/5 w-full overflow-y-auto aside">
      <div v-for="contact in contacts" :key="contact.id">
        <ContactPreview
          :id="contact.id"
          :date="lastMessage(contact.messages).send"
          :text="lastMessage(contact.messages).text"
          :img="contact.img"
          :username="contact.username"
        />
      </div>
    </div>
  </aside>
</template>
<style scoped>
.aside::-webkit-scrollbar {
  display: none;
}
</style>
