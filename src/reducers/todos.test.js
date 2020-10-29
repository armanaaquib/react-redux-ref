import actionsTypes from '../constants/actionsTypes';
import todos from './todos';

describe('todos reducer', () => {
  const state = [
    {
      text: 'Use Redux',
      completed: false,
      id: 0,
    },
  ];

  it('should return initial state', () => {
    expect(todos(undefined, {})).toEqual([]);
  });

  it('should add todo', () => {
    expect(
      todos([], {
        type: actionsTypes.ADD_TODO,
        text: 'todo',
        id: 1,
      })
    ).toEqual([
      {
        text: 'todo',
        completed: false,
        id: 1,
      },
    ]);

    expect(
      todos(state, {
        type: actionsTypes.ADD_TODO,
        text: 'todo',
        id: 1,
      })
    ).toEqual([
      ...state,
      {
        text: 'todo',
        completed: false,
        id: 1,
      },
    ]);
  });

  it('should toogle todo', () => {
    expect(
      todos(state, {
        type: actionsTypes.TOGGLE_TODO,
        id: 0,
      })
    ).toEqual([{ ...state[0], completed: true }]);
  });
});
