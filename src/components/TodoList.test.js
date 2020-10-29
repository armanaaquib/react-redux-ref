import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Todo from './Todo';
import TodoList from './TodoList';

describe('TodoList', () => {
  const todos = [
    {
      id: 1,
      text: 'Consider using Redux',
      completed: true,
    },
    {
      id: 2,
      text: 'Keep all state in a single tree',
      completed: false,
    },
  ];

  it('should match snapshot', () => {
    const wrapper = shallow(<TodoList todos={todos} toggleTodo={jest.fn()} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should pass all required props to Todo', () => {
    const mockOnTodoClick = jest.fn();
    const wrapper = mount(
      <TodoList todos={todos} toggleTodo={mockOnTodoClick} />
    );

    const props = wrapper.find(Todo).first().props();

    expect(props).toHaveProperty('id', 1);
    expect(props).toHaveProperty('completed', true);
    expect(props).toHaveProperty('text', 'Consider using Redux');
  });

  it('should call togllTodo with todo id', () => {
    const mockOnTodoClick = jest.fn((id) => {
      expect(id).toBe(1);
    });

    const wrapper = shallow(
      <TodoList todos={todos} toggleTodo={mockOnTodoClick} />
    );

    wrapper.find(Todo).first().simulate('click');
  });
});
