<script setup lang="ts"></script>

<template>
  <div class="grid grid-cols-12 grid-rows-2">
    <div class="col-span-1" />
    <div class="col-span-11">
      <div class="add-card-input-container">
        <div class="w-full md:w-1/2 md:mx-auto">
          <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div class="p-4 md:p-10">
              <form>
                <div class="col-span-full">
                  <label for="about" class="block text-sm font-medium leading-6 text-gray-900"><strong>Add Todo</strong></label>
                  <div class="mt-2">
                    <textarea class="py-3 text-area-style px-4 block w-full border-gray-500 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" rows="3" placeholder="Create a Todo"></textarea>
                  </div>
                </div>

                <div class="mt-6 flex items-center justify-start gap-x-6">
                  <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
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

.text-area-style {
  border: 1px solid #eeeeee;
}

.add-card-input-container {
  padding-top: 30px;
}

@media (max-width: 640px) {
  .add-card-input-container {
    padding-right: 20px;
  }
}
</style>
