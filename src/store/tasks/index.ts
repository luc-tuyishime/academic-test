import { defineStore } from "pinia"
import { ref } from "vue"
import { APIResponse } from "../../services/types"
import { API } from "../../services"
import { AxiosError } from "axios"
import { Task, InputCreateTask, InputUpdateTask } from "../../services/tasks/types"

export const useSchoolStore = defineStore("taskStore", () => {
  const tasks = ref<Task[]>([])

  function initTasks(data: Task[]) {
    tasks.value = data
  }

  function addNewTask(task: Task) {
    tasks.value.push(task)
  }

  function removeTask(id: number) {
    const idx = tasks.value.findIndex((s) => s.id === id)
    if (idx === -1) return
    tasks.value.splice(idx, 1)
  }

  async function dispatchGetTasks(): Promise<APIResponse<null>> {
    try {
      const { status, data } = await API.tasks.getTasks()
      if (status === 200) {
        initTasks(data.content)
        return {
          success: true,
          content: null,
        }
      }
    } catch (error) {
      const _error = error as AxiosError<string>
      return {
        success: false,
        status: _error.response?.status,
        content: null,
      }
    }
    return {
      success: false,
      content: null,
      status: 400,
    }
  }

  async function dispatchCreateTask(input: InputCreateTask): Promise<APIResponse<null>> {
    try {
      const { status, data } = await API.tasks.createTask(input)
      if (status === 200) {
        addNewTask(data.content)
        return {
          success: true,
          content: null,
        }
      }
    } catch (error) {
      const _error = error as AxiosError<string>
      return {
        success: false,
        status: _error.response?.status,
        content: null,
      }
    }
    return {
      success: false,
      content: null,
      status: 400,
    }
  }

  async function dispatchDeleteTask(id: number): Promise<APIResponse<null>> {
    try {
      const { status } = await API.tasks.deleteTask(id)
      if (status === 200) {
        removeTask(id)
        return {
          success: true,
          content: null,
        }
      }
    } catch (error) {
      const _error = error as AxiosError<string>
      return {
        success: false,
        status: _error.response?.status,
        content: null,
      }
    }
    return {
      success: false,
      content: null,
      status: 400,
    }
  }

  async function dispatchUpdateSchool(input: InputUpdateTask, id: number): Promise<APIResponse<null>> {
    try {
      const { status } = await API.tasks.updateTask(input, id)
      if (status === 200) {
        return {
          success: true,
          content: null,
        }
      }
    } catch (error) {
      const _error = error as AxiosError<string>
      return {
        success: false,
        status: _error.response?.status,
        content: null,
      }
    }
    return {
      success: false,
      content: null,
      status: 400,
    }
  }

  return {
    tasks,
    initTasks,
    removeTask,
    dispatchCreateTask,
    dispatchDeleteTask,
    dispatchGetTasks,
    dispatchUpdateSchool,
  }
})
