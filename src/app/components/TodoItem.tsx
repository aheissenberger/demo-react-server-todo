'use client'

//import { useRouter } from 'next/navigation'
import { useClient } from "@lazarv/react-server/client";
import { toggleTodo, deleteTodo } from '../../lib/actions'
import { Todo } from '../../lib/types'

export function TodoItem({ todo }: { todo: Todo }) {
  //const router = useRouter()
  //const { refresh } = useClient();


  const handleToggle = async () => {
    await toggleTodo(todo.id)
    //router.refresh()
    //refresh()
  }

  const handleDelete = async () => {
    await deleteTodo(todo.id)
    //router.refresh()
    //refresh()
  }

  return (
    <li className="flex items-center justify-between p-2 border-b">
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
          className="mr-2"
        />
        <span className={todo.completed ? 'line-through' : ''}>{todo.text}</span>
      </div>
      <button onClick={handleDelete} className="text-red-500">
        Delete
      </button>
    </li>
  )
}

