import actionsTypes from '../constants/actionsTypes';
import actionTypes from '../constants/actionsTypes';

let nextTodoId = 0;

export const addTodo = (text) => ({
  type: actionTypes.ADD_TODO,
  id: nextTodoId++,
  text,
});

export const setVisibilityFilter = (filter) => ({
  type: actionsTypes.SET_VISBILITY_FILTER,
  filter,
});

export const toggleTodo = (id) => ({ type: actionTypes.TOGGLE_TODO, id });
