import http from "../api"
import { APIResponse } from "../types"
import { Task, InputCreateTask, InputUpdateTask } from "./types"

async function getTasks() {
  return await http.get<APIResponse<Task[]>>("todos")
}

async function deleteTask(id: number) {
  return await http.delete<APIResponse<boolean>>(`todos/${id}`)
}

async function createTask(input: InputCreateTask) {
  return await http.post<APIResponse<Task>>("todos", input)
}

async function updateTask(input: InputUpdateTask, id: number) {
  return await http.put<APIResponse<boolean>>(`todos/${id}`, input)
}

export default {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
}
