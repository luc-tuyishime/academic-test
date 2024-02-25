<template>
  <div class="min-h-screen">
    <NavBar />
    <Sidebar />
    <router-view></router-view>
  </div>
</template>

<style>
html.dark {
  color-scheme: dark;
}

body {
  @apply bg-gray-200 text-slate-800 dark:bg-slate-800 dark:text-slate-50;
}
</style>
<script lang="ts" setup>
import Sidebar from "./components/Sidebar.vue"
import NavBar from "./components/NavBar.vue"
</script>
