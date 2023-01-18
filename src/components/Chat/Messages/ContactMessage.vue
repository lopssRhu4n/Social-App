<script lang="ts" setup>
const props = defineProps<{
  text: string;
}>();
</script>

<template>
  <div class="w-full flex justify-start my-5">
    <p
      class="self-end max-w-xl text-sm px-5 py-4 justify-end text-justify rounded-lg rounded-bl-none bg-secondary text-gray-400"
    >
      {{ props.text }}
    </p>
  </div>
</template>
