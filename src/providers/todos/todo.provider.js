import React, { createContext, useState, useEffect } from 'react';
import { addItemToArray, removeItemFromArray } from './todos.utils';
import mockTodos from './todo.data.json';

export const TodoContext = createContext({
  todos: [],
  addTodo: () => {},
  removeTodo: () => {},
  clearTodos: () => {},
  todoCount: 0,
});

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(mockTodos);
  const [todoCount, setTodoCount] = useState(0);

  const addTodo = todo => setTodos(addItemToArray(todos, todo));
  const removeTodo = todo => setTodos(removeItemFromArray(todos, todo));
  const clearTodos = () => setTodos([]);

  useEffect(() => {
    const totalTodos = todos.length;
    if (totalTodos !== todoCount) setTodoCount(totalTodos);

  }, [todos]);

  return (
    <TodoContext.Provider value={{
      todos,
      addTodo,
      removeTodo,
      clearTodos,
      todoCount
    }}>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;