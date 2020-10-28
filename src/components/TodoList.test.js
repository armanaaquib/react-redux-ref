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
    const wrapper = shallow(<TodoList todos={todos} onTodoClick={jest.fn()} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should pass all required props to Todo', () => {
    const mockOnTodoClick = jest.fn();
    const wrapper = mount(
      <TodoList todos={todos} onTodoClick={mockOnTodoClick} />
    );

    expect(wrapper.find(Todo).first().props()).toStrictEqual({
      ...todos[0],
      onClick: mockOnTodoClick,
    });
  });
});
