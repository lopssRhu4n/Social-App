<script lang="ts" setup>
const props = defineProps<{
  img?: string;
  username: String;
}>();
</script>
<template>
  <header
    class="w-full h-1/6 bg-secondary shadow-lg px-8 rounded-md justify-between flex items-center"
  >
    <div class="flex items-center gap-4 w-4/12 flex-nowrap">
      <img :src="img" v-if="img" class="w-12 h-12 rounded-full" alt="" />
      <font-awesome-icon
        v-else
        icon="fa fa-user"
        class="text-3xl p-5 rounded-full bg-bg hover:scale-105 cursor-pointer transition-all text-gray-200"
      />
      <h3 class="text-gray-400">{{ props.username }}</h3>
    </div>

    <div class="flex items-center w-2/6 justify-between">
      <font-awesome-icon
        class="text-xl my-1 text-gray-400 transition-all rounded-full p-[10%] cursor-pointer hover:bg-gray-400 hover:text-white"
        icon="fa-solid fa-layer-group"
      />
      <font-awesome-icon
        class="text-xl my-1 text-gray-400 transition-all rounded-full p-[10%] cursor-pointer hover:bg-gray-400 hover:text-white"
        icon="fa-solid fa-magnifying-glass"
      />
      <font-awesome-icon
        class="text-xl my-1 text-gray-400 transition-all rounded-full p-[10%] cursor-pointer hover:bg-gray-400 hover:text-white"
        icon="fa-solid fa-bars"
      />
    </div>
  </header>
</template>
