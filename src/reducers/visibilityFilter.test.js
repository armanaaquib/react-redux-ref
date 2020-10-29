import ActionsTypes from '../constants/actionsTypes';
import VisibilityFilters from '../constants/visibilityFilters';
import visibilityFilter from './visibilityFilter';

describe('todos reducer', () => {
  it('should return initial state', () => {
    expect(visibilityFilter(undefined, {})).toBe(VisibilityFilters.SHOW_ALL);
  });

  it('should set visbility filter', () => {
    expect(
      visibilityFilter(VisibilityFilters.SHOW_ACTIVE, {
        type: ActionsTypes.SET_VISBILITY_FILTER,
        filter: VisibilityFilters.SHOW_COMPLETED,
      })
    ).toBe(VisibilityFilters.SHOW_COMPLETED);
  });
});
