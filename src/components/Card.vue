<template>
  <div class="flex flex-col card-padding bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
    <img class="w-full h-auto rounded-xl" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80" alt="Image Description" />

    <p class="mt-2 text-gray-500 dark:text-gray-400">{{ todo }}</p>
    <p v-if="completed === true" class="mt-2 text-emerald-400 dark:text-emerald-400">completed</p>
    <p v-if="completed === false" class="mt-2 text-orange-400 dark:text-orange-400">In progress</p>
    <div>
      <router-link :to="'/update-task/' + id"
        ><a class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
          <svg class="h-7 w-7 text-cyan-500" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
            <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
            <line x1="16" y1="5" x2="19" y2="8" />
          </svg> </a
      ></router-link>
      <a class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
        <svg class="h-7 w-7 text-rose-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="3 6 5 6 21 6" />
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
      </a>
    </div>
  </div>
</template>
<style scoped>
.dark\:bg-slate-900 {
  --tw-bg-opacity: 1;
  background-color: #fff;
  border: 1px solid #fff;
  box-shadow: none;
}

.todos-container {
  margin-left: 25px;
}
@media (max-width: 768px) {
}
</style>
<script setup>
defineProps({
  todo: {
    type: String,
    default: "",
  },
  id: {
    type: Number,
    default: 0,
  },
  completed: {
    type: Boolean,
    default: false,
  },
})
</script>
