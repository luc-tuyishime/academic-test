<script setup lang="ts"></script>

<template>
  <div class="grid grid-cols-12 grid-rows-2">
    <div class="col-span-1" />
    <div class="col-span-11">
      <div class="todos-container">
        <div class="flex justify-between">
          <div>
            <h1 class="text-4xl text-header dark:text-gray mb-5">
              <strong> {{ $t("Boards") }}</strong>
            </h1>
          </div>
          <div class="">
            <DarkMode />
          </div>
        </div>

        <div class="flex">
          <span class="dot"></span><a class="toto-text text-4l dark:text-gray mb-5"> {{ $t("To do") }} </a>
          <router-link to="/add-task"
            ><svg class="h-6 w-6 text-gray-400 hover:text-cyan-500" width="24" height="24" viewBox="0 0 18 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </router-link>
        </div>

        <div v-if="taskStore?.loading.status" class="flex items-center justify-center w-full h-full">
          <div class="flex loading-container justify-center items-center space-x-1 text-sm text-gray-700">
            <div class="animate-spin inline-block size-12 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading">
              <span class="sr-only">Loading...</span>
            </div>

            <div>{{ $t("Loading") }}...</div>
          </div>
        </div>
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          <div v-for="(task, index) in taskStore?.tasks" :key="index">
            <Card :todo="task?.todo" :completed="task?.completed" :id="task?.id" :task="task" />
          </div>
        </div>
      </div>
    </div>

    <!-- More content for other columns and rows -->
  </div>
</template>

<style scoped>
.todos-container {
  margin-top: 25px;
  margin-right: 45px;
}

@media (max-width: 768px) {
  .text-header {
    font-size: 25px;
  }
}

.loading-container {
  margin-top: 35px;
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

<script setup>
import { onMounted } from "vue"
import { useI18n } from "vue-i18n"
import Card from "../components/Card.vue"
import { useTaskStore } from "../store/tasks"
import DarkMode from "../components/DarkMode.vue"

const i18n = useI18n()
const taskStore = useTaskStore()

onMounted(async () => {
  const { success } = await taskStore.dispatchGetTasks()

  if (!success) {
    alert(i18n.t("Ups, something happened"))
  }
})
</script>
