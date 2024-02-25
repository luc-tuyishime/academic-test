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
                  <div class="mt-2">
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ $t("Update task") }}</label>
                    <select v-model="taskStore.task.completed" @change="changeStatus" class="bg-gray-30 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-white-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option value="false">{{ $t("In progress") }}</option>
                      <option value="true">{{ $t("Completed") }}</option>
                    </select>
                  </div>
                </div>

                <div class="mt-6 flex items-center justify-start gap-x-6">
                  <button @click="handleSubmit" :disabled="taskStore.loading.status" type="submit" class="rounded-md btn-update bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    <div v-if="taskStore.loading.status" class="text-center">
                      <div role="status">
                        <svg aria-hidden="true" class="inline w-6 h-6 text-gray-200 animate-spin dark:text-white-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                        <span class="sr-only">Loading...</span>
                      </div>
                    </div>

                    <span v-else>Update</span>
                  </button>
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

.dark\:border-gray-600 {
  border: 1px solid #eeeeee;
}

.btn-update {
  width: 20%;
  text-align: center !important;
}

.center-icon {
  display: block;
  margin: 0 auto;
  text-align: center !important;
}

.add-card-input-container {
  padding-top: 30px;
}

@media (max-width: 640px) {
  .add-card-input-container {
    padding-right: 20px;
  }
  .btn-update {
    width: 50%;
    text-align: center !important;
  }
}
</style>
<script lang="ts">
import { useRoute } from "vue-router"
import { useI18n } from "vue-i18n"
import { toast } from "vue3-toastify"
import "vue3-toastify/dist/index.css"
import { onMounted, ref, defineComponent } from "vue"
import { useTaskStore } from "../store/tasks"

export default defineComponent({
  setup() {
    const i18n = useI18n()
    const taskStore = useTaskStore()
    const newValue = ref("")

    const route = useRoute()
    const param = ref(route?.params.id)

    const changeStatus = (e: Event) => {
      newValue.value = (e.target as HTMLInputElement).value
    }

    onMounted(async () => {
      const { success } = await taskStore.dispatchGetTask(Number(param.value))

      if (!success) {
        alert(i18n.t("Ups, something happened"))
      }
    })

    const handleSubmit = async (e: Event) => {
      e.preventDefault()
      const { success } = await taskStore.dispatchUpdateTask(Boolean(newValue.value), param.value)

      if (!success) {
        alert(i18n.t("Ups, something happened"))
      }

      if (success) {
        toast(i18n.t("Updated successfully"), {
          autoClose: 1000,
        })
      }
    }

    return {
      changeStatus,
      handleSubmit,
      taskStore,
    }
  },
})
</script>
