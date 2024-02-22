<template>
  <div class="min-h-screen bg-gray-200">
    <sidebar />
    <router-view></router-view>
  </div>
</template>

<style></style>
<script lang="ts" setup>
import Sidebar from "./components/Sidebar.vue"
</script>
