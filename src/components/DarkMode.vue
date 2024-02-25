<template>
  <button @click="toggleDark()" class="px-4 py-2 text-white bg-blue-900 rounded dark:bg-red-400">{{ isDark ? " White Mode" : "Dark Mode" }}</button>
</template>
<script setup>
import { useDark, useToggle } from "@vueuse/core"

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
