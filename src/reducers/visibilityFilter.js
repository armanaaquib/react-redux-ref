import { act } from 'react-dom/test-utils';
import VisibilityFilters from '../constants/visibilityFilters';
import ActionsTypes from '../constants/actionsTypes';

export default (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case ActionsTypes.SET_VISBILITY_FILTER:
      return action.filter;

    default:
      return state;
  }
};
