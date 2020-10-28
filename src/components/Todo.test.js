import React from 'react';
import { mount, shallow } from 'enzyme';

import Todo from './Todo';

describe('Todo', () => {
  it('should render normal todo text if todo is not completed', () => {
    const wrapper = mount(
      <Todo onClick={jest.fn()} completed={false} text={'todo text'} />
    );

    expect(wrapper.text()).toBe('todo text');
    expect(wrapper.find('li').prop('style')).toHaveProperty(
      'textDecoration',
      'none'
    );
  });

  it('should render stroke line on todo text if todo is completed', () => {
    const wrapper = mount(
      <Todo onClick={jest.fn()} completed={true} text={'todo text'} />
    );

    expect(wrapper.text()).toBe('todo text');
    expect(wrapper.find('li').prop('style')).toHaveProperty(
      'textDecoration',
      'line-through'
    );
  });

  it('should call onClick after clicking the todo', () => {
    const handleOnClick = jest.fn();

    const wrapper = shallow(
      <Todo onClick={handleOnClick} completed={false} text={'text'} />
    );

    wrapper.simulate('click');

    expect(handleOnClick).toHaveBeenCalledTimes(1);
  });
});
