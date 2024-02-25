import { defineStore } from "pinia"
import { ref, reactive } from "vue"
import { APIResponse } from "../../services/types"
import { API } from "../../services"
import { AxiosError } from "axios"
import { Task, InputCreateTask, InputUpdateTask } from "../../services/tasks/types"

export const useTaskStore = defineStore("taskStore", () => {
  const tasks = ref<Task[]>([])
  const task = ref<Task[]>([])
  const loading = reactive({ status: false })
  const loadingDelete = reactive({ status: false })

  function initTasks(data: Task[]) {
    tasks.value = data
  }

  function initTask(data: Task[]) {
    task.value = data
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
    loading.status = true
    try {
      const { status, data } = await API.tasks.getTasks()

      if (status === 200) {
        loading.status = false
        initTasks(data?.todos)
        return {
          success: true,
          todos: null,
        }
      }
    } catch (error) {
      loading.status = false
      const _error = error as AxiosError<string>
      return {
        success: false,
        status: _error.response?.status,
        todos: null,
      }
    }
    return {
      success: false,
      todos: null,
      status: 400,
    }
  }

  async function dispatchGetTask(id: number): Promise<APIResponse<null>> {
    try {
      const { status, data } = await API.tasks.getTask(id)

      if (status === 200) {
        initTask(data as never)
        return {
          success: true,
          todos: null,
        }
      }
    } catch (error) {
      const _error = error as AxiosError<string>
      return {
        success: false,
        status: _error.response?.status,
        todos: null,
      }
    }
    return {
      success: false,
      todos: null,
      status: 400,
    }
  }

  async function dispatchCreateTask(input: InputCreateTask): Promise<APIResponse<null>> {
    loading.status = true
    try {
      const { status, data } = await API.tasks.createTask(input)
      if (status === 200) {
        loading.status = false
        addNewTask(data.todos)
        return {
          success: true,
          todos: null,
        }
      }
    } catch (error) {
      loading.status = false
      const _error = error as AxiosError<string>
      return {
        success: false,
        status: _error.response?.status,
        todos: null,
      }
    }
    return {
      success: false,
      todos: null,
      status: 400,
    }
  }

  async function dispatchDeleteTask(id: number): Promise<APIResponse<null>> {
    loadingDelete.status = true
    try {
      const { status } = await API.tasks.deleteTask(id)
      if (status === 200) {
        loading.status = false
        removeTask(id)
        return {
          success: true,
          todos: null,
        }
      }
    } catch (error) {
      loadingDelete.status = false
      const _error = error as AxiosError<string>
      return {
        success: false,
        status: _error.response?.status,
        todos: null,
      }
    }
    return {
      success: false,
      todos: null,
      status: 400,
    }
  }

  async function dispatchUpdateTask(input: InputUpdateTask, id: number): Promise<APIResponse<null>> {
    loading.status = true

    try {
      const { status } = await API.tasks.updateTask(input, id)
      if (status === 200) {
        loading.status = false
        return {
          success: true,
          todos: null,
        }
      }
    } catch (error) {
      loading.status = false
      const _error = error as AxiosError<string>
      return {
        success: false,
        status: _error.response?.status,
        todos: null,
      }
    }
    return {
      success: false,
      todos: null,
      status: 400,
    }
  }

  return {
    tasks,
    task,
    loading,
    loadingDelete,
    initTasks,
    removeTask,
    dispatchDeleteTask,
    dispatchCreateTask,
    dispatchUpdateTask,
    dispatchGetTasks,
    dispatchGetTask,
  }
})
