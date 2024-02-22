export type APIResponse<T> = {
  success: boolean
  todos: T
  status?: number
}
