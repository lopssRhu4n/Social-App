<script lang="ts" setup>
import ContactPreview from "./ContactPreview.vue";
import { useContactStore } from "@/stores/contactsStore";
import type { IMessage } from "@/interfaces/IMessage";
import { ref } from "vue";
const contacts = useContactStore().contacts;

const search = ref("");

const searchContact = () => {
  const previews = document.querySelectorAll(".preview-container-title");
  previews.forEach((preview) => {
    if (!search.value) {
      preview.parentElement?.parentElement?.classList.remove("invisible-d");
    }

    if (!preview.innerHTML.toLowerCase().includes(search.value.toLowerCase())) {
      preview.parentElement?.parentElement?.classList.add("invisible-d");
    } else {
      preview.parentElement?.parentElement?.classList.remove("invisible-d");
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
    class="col-span-2 row-span-6 lg:col-span-3 bg-bg-secondary rounded-r-2xl items-center py-4 flex flex-col"
  >
    <div class="relative flex flex-col justify-center">
      <button class="md:hidden">
        <font-awesome-icon icon="fa-solid fa-bars" />
      </button>

      <input
        @keyup="searchContact"
        type="text"
        v-model="search"
        placeholder="Search"
        class="hidden w-4/5 mx-auto outline-none h-16 mb-2 md:block bg-bg rounded-md p-2 text-gray-400"
      />

      <font-awesome-icon
        icon="fa-solid fa-magnifying-glass"
        class="hidden md:block absolute top-6 right-[15%] text-gray-400"
      />
    </div>

    <div class="w-4/5 flex flex-col h-4/5 md:w-full overflow-y-auto aside">
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
<style scoped></style>
