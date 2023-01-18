<template>
  <div
    class="row-span-6 col-span-1 bg-primary pt-2 flex justify-between flex-col"
  >
    <div class="h-3/5 flex flex-col justify-around items-center">
      <router-link to="/">
        <font-awesome-icon
          class="text-xl p-5 transition-all rounded-full cursor-pointer hover:-rotate-45 hover:bg-gray-300 hover:text-primary text-gray-300"
          icon="fa-solid fa-home"
        />
      </router-link>

      <router-link to="/chat/1">
        <font-awesome-icon
          class="text-xl p-5 transition-all rounded-full cursor-pointer hover:-rotate-45 hover:bg-gray-300 text-white hover:text-primary"
          icon="fa-solid fa-message"
        />
      </router-link>
      <font-awesome-icon
        class="text-xl p-5 transition-all rounded-full cursor-pointer hover:-rotate-45 hover:bg-gray-300 hover:text-primary text-gray-300"
        icon="fa-solid fa-star"
      />
      <font-awesome-icon
        class="text-xl p-5 transition-all rounded-full cursor-pointer hover:-rotate-45 hover:bg-gray-300 hover:text-primary text-gray-300"
        icon="fa-solid fa-chart-simple"
      />
      <font-awesome-icon
        class="text-xl p-5 transition-all rounded-full cursor-pointer hover:-rotate-45 hover:bg-gray-300 hover:text-primary text-gray-300"
        icon="fa-solid fa-gear"
      />
    </div>
    <div class="flex justify-center h-1/5 items-center">
      <font-awesome-icon
        icon="fa-solid fa-user"
        class="text-2xl text-gray-300 p-6 rounded-md cursor-pointer hover:shadow-md hover:bg-gray-300 hover:text-primary transition-all"
      />
    </div>
  </div>
</template>

<style lang="css" scoped>
.router-link-active {
  @apply text-white bg-bg-secondary rounded-full;
}
</style>
