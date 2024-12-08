'use server'

import { reload } from '@lazarv/react-server'
import { addTodoToStore, toggleTodoInStore, deleteTodoFromStore } from './todos'

export async function addTodo(text: string) {
  await addTodoToStore(text)
  reload()
}

export async function toggleTodo(id: number) {
  await toggleTodoInStore(id)
  reload()
}

export async function deleteTodo(id: number) {
  await deleteTodoFromStore(id)
  reload()
}

