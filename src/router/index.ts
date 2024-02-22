import { createWebHistory, createRouter } from "vue-router"

import Home from "../views/Home.vue"
import AddTask from "../views/AddTask.vue"
import UpdateTask from "../views/UpdateTask.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/add-task",
    name: "Add Task",
    component: AddTask,
  },
  {
    path: "/update-task/:id",
    name: "Update Task",
    component: UpdateTask,
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
