<script setup lang="ts"></script>

<template>
  <div class="grid grid-cols-12 grid-rows-2">
    <div class="col-span-1" />
    <div class="col-span-11">
      <div class="todos-container">
        <h1 class="text-4xl dark:text-gray mb-5">
          <strong>Boards</strong>
        </h1>
        <div class="flex">
          <span class="dot"></span><a class="toto-text text-4l dark:text-gray mb-5">To do </a>
          <router-link to="/add-task"
            ><svg class="h-6 w-6 text-gray-400 hover:text-cyan-500" width="24" height="24" viewBox="0 0 18 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </router-link>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          <div v-for="task in taskStore.tasks" :key="task.id">
            <Card :todo="task.todo" :completed="task.completed" :id="task.id" />
          </div>
        </div>
      </div>
    </div>

    <!-- More content for other columns and rows -->
  </div>
</template>

<script setup>
import { onMounted } from "vue"
import Card from "../components/Card.vue"
import { useTaskStore } from "../store/tasks"

const taskStore = useTaskStore()

onMounted(async () => {
  const { success } = await taskStore.dispatchGetTasks()

  if (!success) {
    alert("Ups, something happened 🙂")
  }
})
</script>
<style scoped>
.todos-container {
  margin-top: 25px;
  margin-right: 45px;
}

.todos-container {
  margin-left: 25px;
}
.dot {
  height: 20px;
  width: 20px;
  background-color: #ec407a;
  border-radius: 30%;
  display: inline-block;
  margin-bottom: 15px;
}

.toto-text {
  margin-left: 10px;
}
</style>
