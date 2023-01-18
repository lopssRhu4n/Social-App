<script lang="ts" setup>
import { ref } from "vue";
import { useMessageStore } from "@/stores/messagesStore";

const removeMessage = useMessageStore().removeMessage;

const props = defineProps<{
  text: string;
  visualized?: string;
  send?: string;
  id: number;
}>();

const showOption = ref(false);
</script>

<template>
  <div class="w-full flex justify-end my-5 relative">
    <p
      class="self-end max-w-xl text-sm p-6 justify-end text-justify rounded-lg rounded-br-none bg-primary text-gray-200"
    >
      {{ props.text }}
    </p>

    <button
      class="absolute rounded-full hover:bg-gray-200 transition-all p-[6px] right-1 top-1"
      @click="showOption = !showOption"
    >
      <font-awesome-icon
        icon="fa-solid fa-ellipsis-vertical"
        class="text-white"
      />
    </button>

    <div
      v-if="showOption"
      class="z-10 w-32 rounded-md flex items-center flex-col bg-white absolute top-10"
    >
      <button
        class="h-10 hover:bg-gray-400 cursor-pointer w-full uppercase hover:text-white transition-all rounded-md"
        @click="removeMessage(props.id)"
      >
        Apagar
      </button>
    </div>

    <small
      class="absolute top-full right-10 text-primary"
      v-if="props.visualized"
    >
      <font-awesome-icon icon="fa-solid fa-check-double" />
    </small>

    <small
      class="absolute top-full right-10 text-gray-500"
      v-else-if="props.send"
    >
      <font-awesome-icon icon="fa-solid fa-check-double" />
    </small>

    <small class="absolute top-full right-5 text-gray-500" v-else>
      <font-awesome-icon icon="fa-solid fa-check" />
    </small>

    <small class="top-full absolute text-white" v-if="props.visualized">
      {{ props.visualized }}
    </small>

    <small class="top-full absolute text-white" v-else-if="props.send">
      {{ props.send }}
    </small>
  </div>
</template>
