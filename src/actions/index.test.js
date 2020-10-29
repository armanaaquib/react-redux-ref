import { addTodo, setVisibilityFilter, toggleTodo } from './index';
import actionsTypes from '../constants/actionsTypes';
import visibilityFilters from '../constants/visibilityFilters';

describe('actions', () => {
  it('should create an action to add a todo', () => {
    expect(addTodo('todo text')).toStrictEqual({
      type: actionsTypes.ADD_TODO,
      id: 0,
      text: 'todo text',
    });
  });

  it('should create an action to set visibility filter', () => {
    expect(setVisibilityFilter(visibilityFilters.SHOW_ALL)).toStrictEqual({
      type: actionsTypes.SET_VISBILITY_FILTER,
      filter: visibilityFilters.SHOW_ALL,
    });
  });

  it('should create an action to toggle a todo', () => {
    expect(toggleTodo(0)).toStrictEqual({
      type: actionsTypes.TOGGLE_TODO,
      id: 0,
    });
  });
});
