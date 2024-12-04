'use server'

import { addTodoToStore, toggleTodoInStore, deleteTodoFromStore } from './todos'

export async function addTodo(text: string) {
  await addTodoToStore(text)
}

export async function toggleTodo(id: number) {
  await toggleTodoInStore(id)
}

export async function deleteTodo(id: number) {
  await deleteTodoFromStore(id)
}

