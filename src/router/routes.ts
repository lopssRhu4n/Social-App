export const routes = [
  {
    path: "/chat/:id",
    name: "chatview",
    component: () => import("@/views/ChatView.vue"),
    props: true,
  },
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
  },
];
