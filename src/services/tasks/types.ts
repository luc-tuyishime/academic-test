export type Task = {
  id: number
  todo: string
  completed: boolean
  userId: number
}

export type InputCreateTask = {
  todo: string
  completed: boolean
  userId: number
}

export type InputUpdateTask = {
  description: string
  completed: boolean
}
