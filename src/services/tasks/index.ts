import http from "../api"
import { APIResponse } from "../types"
import { Task, InputCreateTask, InputUpdateTask } from "./types"

async function getTasks() {
  return await http.get<APIResponse<Task[]>>("todos?limit=15")
}

async function getTask(id: number) {
  return await http.get<APIResponse<Task[]>>(`todos/${id}`)
}

async function deleteTask(id: number) {
  return await http.delete<APIResponse<boolean>>(`todos/${id}`)
}

async function createTask(input: InputCreateTask) {
  return await http.post<APIResponse<Task>>("todos/add", input)
}

async function updateTask(input: InputUpdateTask, id: number) {
  return await http.put<APIResponse<boolean>>(`todos/${id}`, input)
}

export default {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
}
