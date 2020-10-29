import React from 'react';
import { shallow } from 'enzyme';

import Footer from './Footer';
import FilterLink from '../containers/FilterLink';
import visibilityFilters from '../constants/visibilityFilters';

describe('Footer', () => {
  it('should render link for show all', () => {
    const wrapper = shallow(<Footer />);

    const showAllFilterLink = wrapper.find(FilterLink).first();

    expect(showAllFilterLink.prop('filter')).toBe(visibilityFilters.SHOW_ALL);
    expect(showAllFilterLink.text()).toBe('All');
  });

  it('should render link for show active', () => {
    const wrapper = shallow(<Footer />);

    const showAllFilterLink = wrapper.find(FilterLink).at(1);

    expect(showAllFilterLink.prop('filter')).toBe(
      visibilityFilters.SHOW_ACTIVE
    );
    expect(showAllFilterLink.text()).toBe('Active');
  });

  it('should render link for show completed', () => {
    const wrapper = shallow(<Footer />);

    const showAllFilterLink = wrapper.find(FilterLink).last();

    expect(showAllFilterLink.prop('filter')).toBe(
      visibilityFilters.SHOW_COMPLETED
    );
    expect(showAllFilterLink.text()).toBe('Completed');
  });
});
