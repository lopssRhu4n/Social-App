<template>
  <div
    class="row-span-6 col-span-1 bg-primary pt-2 flex justify-between flex-col shadow-lg"
  >
    <div class="h-3/5 gap-5 mt-5 flex flex-col items-center">
      <router-link to="/">
        <font-awesome-icon
          class="p-[6px] text-sm md:text-xl md:p-5 transition-all rounded-full cursor-pointer hover:-rotate-45 hover:bg-gray-300 hover:text-primary text-gray-300"
          icon="fa-solid fa-home"
        />
      </router-link>

      <router-link to="/chat">
        <font-awesome-icon
          class="p-[6px] text-sm md:text-xl md:p-5 transition-all rounded-full cursor-pointer hover:-rotate-45 hover:bg-gray-300 text-white hover:text-primary"
          icon="fa-solid fa-message"
        />
      </router-link>
    </div>
    <div class="flex justify-center h-1/5 items-center">
      <router-link to="/dev">
        <font-awesome-icon
          icon="fa-solid fa-user"
          class="p-[6px] text-sm md:text-2xl text-gray-300 md:p-6 rounded-full cursor-pointer hover:shadow-md hover:bg-gray-300 hover:text-primary transition-all"
        />
      </router-link>
    </div>
  </div>
</template>

<style lang="css" scoped>
.router-link-active > svg {
  @apply text-white bg-bg-secondary rounded-full;
}
</style>
