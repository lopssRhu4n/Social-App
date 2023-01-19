<script lang="ts" setup>
const props = defineProps<{
  username: string;
  date?: string;
  text: string;
  img?: string;
  id: number;
}>();
</script>

<template>
  <router-link :to="`/chat/${id}`">
    <div
      class="preview-container w-5/6 mx-auto my-4 h-[100px] transition-all hover:w-11/12 hover:h-[110px] hover:bg-primary cursor-pointer rounded-md bg-secondary flex items-center px-8 justify-between"
    >
      <img
        :src="props.img"
        class="w-12 h-12 rounded-full"
        v-if="props.img"
        alt=""
      />
      <font-awesome-icon
        v-else
        icon="fa-solid fa-user"
        class="text-2xl transition-all p-4 rounded-full bg-bg text-gray-200"
      />
      <div class="w-3/5 h-full relative">
        <h2 class="text-gray-400 absolute text-sm top-3">
          {{ props.username }}
        </h2>
        <small class="absolute text-gray-400 text-[10px] top-4 -right-3">{{
          props.date
        }}</small>
        <p
          class="text-gray-500 absolute top-10 overflow-hidden text-xs max-h-[50px]"
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
