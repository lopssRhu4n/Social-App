export const routes = [
  {
    path: "/:catchAll(.*)",
    redirect: "404",
  },
  {
    path: "/chat",
    component: () => import("@/views/ChatView.vue"),
    children: [
      {
        path: "contact",
        props: true,
        component: () => import("@/components/Chat/ChatContainer.vue"),
      },
      {
        path: "",
        component: () => import("@/components/Chat/DefaultChat.vue"),
      },
    ],
  },
  {
    path: "",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/404View.vue"),
  },
  {
    path: "/dev",
    name: "dev",
    component: () => import("@/views/DevView.vue"),
  },
];
