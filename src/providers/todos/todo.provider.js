import React, { createContext, useState, useEffect, useReducer } from 'react';
import { addItemToArray, removeItemFromArray } from './todos.utils';
import todosReducer, { TODOS_INITIAL_STATE } from './todos.reducer';
import todosTypes from './todos.types';

export const TodoContext = createContext({
  todos: [],
  addTodo: () => { },
  removeTodo: () => { },
  clearTodos: () => { },
  resetTodos: () => { },
  todosTotalCount: 0,
});

const TodoProvider = ({ children }) => {
  const [store, dispatch] = useReducer(todosReducer, TODOS_INITIAL_STATE);
  const { todos, todosTotalCount } = store;

  const addTodo = todo => {
    const nextTodosArr = addItemToArray(todos, todo);
    dispatch({
      type: todosTypes.SET_TODOS,
      payload: nextTodosArr
    });
  };

  const removeTodo = todo => {
    const nextTodoArr = removeItemFromArray(todos, todo);
    dispatch({
      type: todosTypes.SET_TODOS,
      payload: nextTodoArr
    });
  };

  const clearTodos = () => {
    dispatch({
      type: todosTypes.CLEAR_TODOS
    })
  }

  const resetTodos = () => {
    dispatch({
      type: todosTypes.RESET_TODOS
    })
  }

  useEffect(() => {
    if (todos.length !== todosTotalCount) {
      dispatch({
        type: todosTypes.SET_TODO_COUNT,
        payload: todos.length
      })
    }

  }, [todos]);

  return (
    <TodoContext.Provider value={{
      todos,
      addTodo,
      removeTodo,
      clearTodos,
      resetTodos,
      todosTotalCount
    }}>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;