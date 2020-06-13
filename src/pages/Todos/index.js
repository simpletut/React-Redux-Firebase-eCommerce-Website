import React, { useContext } from 'react';

import { TodoContext } from './../../providers/todos/todo.provider';

const Todo = props => {
  const { todos, addTodo, removeTodo, clearTodos, todoCount } = useContext(TodoContext);

  return (
    <table>
      <tbody>
        <tr>
          <th>
            <h3>
              Outstanding todos: {todoCount}
            </h3>
          </th>
        </tr>
        <tr>
          <td>
            <button onClick={() => addTodo({
              id: Math.random(),
              title: `Here is another new Todo`
            })}>
              Add New Random Todo
            </button>
          </td>
          <td>
            <button onClick={() => clearTodos()}>
              Clear todos
            </button>
          </td>
        </tr>
        <tr>
          <td>
            {/* Space */}
          </td>
        </tr>
        {todos.map(todo => {
          const { title } = todo;

          return (
            <tr>
              <td>
                <span>
                  {title && title}
                </span>
              </td>
              <td>
                {/* Space */}
              </td>
              <td>
                <span onClick={() => removeTodo(todo)} style={{ cursor: 'pointer' }}>
                  Delete me
                  </span>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Todo;