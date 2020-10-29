import { addTodo, setVisibilityFilter, toggleTodo } from './index';
import actionsTypes from './actionsTypes';
import visibilityFilters from './visibilityFilters';

describe('actions', () => {
  it('should give action for add todo for given text', () => {
    expect(addTodo('todo text')).toStrictEqual({
      type: actionsTypes.ADD_TODO,
      id: 0,
      text: 'todo text',
    });
  });

  it('should give action for set visibility filter for given filter', () => {
    expect(setVisibilityFilter(visibilityFilters.SHOW_ALL)).toStrictEqual({
      type: actionsTypes.SET_VISBILITY_FILTER,
      filter: visibilityFilters.SHOW_ALL,
    });
  });

  it('should give action for toggle todo for given id', () => {
    expect(toggleTodo(0)).toStrictEqual({
      type: actionsTypes.TOGGLE_TODO,
      id: 0,
    });
  });
});
