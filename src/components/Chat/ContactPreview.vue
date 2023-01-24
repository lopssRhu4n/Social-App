<script lang="ts" setup>
import { useActualContactStore } from "@/stores/actualContactStore";
import { useContactStore } from "@/stores/contactsStore";
import { useMessageStore } from "@/stores/messagesStore";

const props = defineProps<{
  username: string;
  date?: string;
  text: string;
  img?: string;
  id: number;
}>();

const contacts = useContactStore().contacts;
const actualContactStore = useActualContactStore();
const messagesStore = useMessageStore();

const changeContact = () => {
  const actualContact = contacts[Number(props.id) - 1];
  actualContactStore.setActualContact(actualContact);
  messagesStore.changeMessages(actualContactStore.actualContact.messages);
};
</script>

<template>
  <router-link :to="`/chat/contact`">
    <div
      @click="changeContact()"
      class="preview-container h-[40px] w-[43px] justify-center sm:w-5/6 sm:h-[70px] flex-col py-2 hover:h-75px mx-auto my-4 lg:h-[100px] transition-all hover:w-11/12 lg:hover:h-[110px] lg:flex-row hover:bg-primary cursor-pointer rounded-lg bg-secondary flex items-center lg:px-8 sm:justify-between"
    >
      <img
        :src="props.img"
        class="w-8 h-8 lg:w-12 lg:h-12 rounded-full"
        v-if="props.img"
        alt=""
      />
      <font-awesome-icon
        v-else
        icon="fa-solid fa-user"
        class="text-lg p-2 lg:text-2xl transition-all lg:p-4 rounded-full bg-bg text-gray-200"
      />
      <div class="hidden sm:block lg:w-3/5 lg:h-full relative">
        <h2
          class="md:block text-center top-2/4 text-[10px] md-translate-y-[50%] ml-1 preview-container-title text-gray-400 lg:absolute lg:translate-y-0 lg:top-3 lg:ml-0"
        >
          {{ props.username }}
        </h2>
        <small
          class="invisible absolute lg:visible text-gray-400 text-[8px] top-[14px] -right-3"
          >{{ props.date }}</small
        >
        <p
          class="invisible lg:visible text-gray-500 absolute top-10 overflow-hidden text-xs max-h-[50px]"
        >
          {{ props.text }}
        </p>
      </div>
    </div>
  </router-link>
</template>

<style lang="css" scoped>
.preview-container:hover h2,
.preview-container:hover small,
.preview-container:hover p {
  color: white;
}
</style>
