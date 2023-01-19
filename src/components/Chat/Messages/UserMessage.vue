<script lang="ts" setup>
import { ref } from "vue";
import { useMessageStore } from "@/stores/messagesStore";
import type { IMessage } from "@/interfaces/IMessage";

const removeMessage = useMessageStore().removeMessage;

const props = defineProps<{
  item: IMessage;
}>();

const showOption = ref(false);
</script>

<template>
  <div class="w-full flex justify-end my-5 relative">
    <p
      class="self-end max-w-xl text-sm p-6 justify-end text-justify rounded-lg rounded-br-none bg-primary text-gray-200"
    >
      {{ props.item.text }}
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
        @click="removeMessage(props.item)"
      >
        Apagar
      </button>
    </div>

    <small
      class="absolute top-full right-10 text-primary"
      v-if="props.item.visualized"
    >
      <font-awesome-icon icon="fa-solid fa-check-double" />
    </small>

    <small
      class="absolute top-full right-10 text-gray-500"
      v-else-if="props.item.send"
    >
      <font-awesome-icon icon="fa-solid fa-check-double" />
    </small>

    <small class="absolute top-full right-5 text-gray-500" v-else>
      <font-awesome-icon icon="fa-solid fa-check" />
    </small>

    <small class="top-full absolute text-white" v-if="props.item.visualized">
      {{ props.item.visualized }}
    </small>

    <small class="top-full absolute text-white" v-else-if="props.item.send">
      {{ props.item.send }}
    </small>
  </div>
</template>
