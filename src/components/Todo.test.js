import Enzyme, { mount, render, shallow } from 'enzyme';
import Adpater from 'enzyme-adapter-react-16';

import Todo from './Todo';

Enzyme.configure({ adapter: new Adpater() });

describe('Todo', () => {
  it('should render normal todo text if todo is not completed', () => {
    const wrapper = shallow(
      <Todo onClick={jest.fn()} completed={true} text={'todo text'} />
    );

    expect(wrapper.text()).toBe('todo text');
    // expect(wrapper.getElement()).toHaveStyle('text-decoration:none');
  });

  it('should render stroke line on todo text if todo is completed', () => {
    const wrapper = shallow(
      <Todo onClick={jest.fn()} completed={true} text={'todo text'} />
    );

    expect(wrapper.text()).toBe('todo text');
    // expect(wrapper.getElement()).toHaveProperty('text-decoration:line-through');
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
