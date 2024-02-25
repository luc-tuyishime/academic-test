<template>
  <nav class="bg-gray-800">
    <!-- Mobile menu, show/hide based on menu state. -->
    <div :dir="$i18n.locale == 'fr' ? 'ltl' : 'ltl'" class="sm:hidden" id="mobile-menu">
      <div class="space-y-1 flex justify-between px-2 pb-3 pt-2">
        <div>
          <router-link to="/"
            ><a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">{{ $t("Todos") }}</a></router-link
          >
        </div>
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->

        <div>
          <select v-model="$i18n.locale">
            <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
          </select>
        </div>
      </div>
    </div>
  </nav>
</template>
<style scoped>
@media (min-width: 768px) {
  /* Your styles for screens larger than 768px */
  .burger-icon {
    display: none;
  }
}
</style>
