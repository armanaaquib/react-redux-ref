import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';

import Link from '../components/Link';
import FilterLink from './FilterLink';
import * as Actions from '../actions';
import VisibilityFilters from '../constants/visibilityFilters';

describe('', () => {
  const visibilityFilter = VisibilityFilters.SHOW_ALL;
  const state = { visibilityFilter };

  let store;
  beforeEach(() => {
    store = configureStore()(state);
    spyOn(store, 'dispatch');
  });

  it('should active prop be true when same visibility filter passed', () => {
    const wrapper = mount(
      <Provider store={store}>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
      </Provider>
    );

    const linkProps = wrapper.find(Link).props();

    expect(linkProps.active).toBe(true);
  });

  it('should active prop be true when same visibility filter passed', () => {
    const wrapper = mount(
      <Provider store={store}>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>All</FilterLink>
      </Provider>
    );

    const linkProps = wrapper.find(Link).props();

    expect(linkProps.active).toBe(false);
  });

  it('should map dispatch to props', () => {
    const action = { type: 'some action' };
    spyOn(Actions, 'setVisibilityFilter').and.returnValue(action);

    const wrapper = mount(
      <Provider store={store}>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>All</FilterLink>
      </Provider>
    );

    wrapper.find(Link).props().onClick();

    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
