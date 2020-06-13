import todosTypes from './todos.types';
import mockTodos from './todo.data.json';

export const TODOS_INITIAL_STATE = {
  todos: mockTodos,
  todosTotalCount: mockTodos.length
};

const todosReducer = (state, action) => {
  switch (action.type) {
    case todosTypes.SET_TODOS:
      return {
        ...state,
        todos: action.payload
      };
    case todosTypes.CLEAR_TODOS:
      return {
        ...state,
        todos: []
      }
    case todosTypes.SET_TODO_COUNT:
      return {
        ...state,
        todosTotalCount: action.payload
      }
    case todosTypes.RESET_TODOS:
      return {
        ...TODOS_INITIAL_STATE
      }
    default:
      return state;
  }
};

export default todosReducer;