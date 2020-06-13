import React, { useContext, useState } from 'react';

import { TodoContext } from './../../providers/todos/todo.provider';

const Todo = props => {
  const { todos, addTodo, removeTodo, clearTodos, resetTodos, todosTotalCount } = useContext(TodoContext);
  const [newTodo, setNewTodo] = useState('')

  const handleAddTodo = todo => {
    if (!todo) return;
    addTodo({
      id: Math.random(),
      title: todo
    });
    setNewTodo('');
  }

  return (
    <table>
      <tbody>
        <tr>
          <th>
            <h3 style={{ textAlign: 'left' }}>
              Outstanding todos: {todosTotalCount}
            </h3>
          </th>
        </tr>
        <tr>
          <td>
            <table>
              <tbody>
                <tr>
                  <td>
                    <input value={newTodo} onChange={e => setNewTodo(e.target.value)} />
                  </td>
                  <td>
                    <button onClick={() => handleAddTodo(newTodo)}>
                      Add New Random Todo
                    </button>
                  </td>
                  <td>
                    <button onClick={() => clearTodos()}>
                      Clear todos
                    </button>
                  </td>
                  <td>
                    <button onClick={() => resetTodos()}>
                      Reset Todos
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td>
            {/* Space */}
          </td>
        </tr>
        {todos.map((todo, index) => {
          const { title } = todo;

          return (
            <tr key={index}>
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
                  Delete
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