import React from 'react';
import { mount } from 'enzyme';

import Link from './Link';

describe('Link', () => {
  it('should render Link', () => {
    const mockOnClick = jest.fn();
    const mockChildren = <div>child</div>;

    const wrapper = mount(
      <Link onClick={mockOnClick} active={true}>
        {mockChildren}
      </Link>
    );

    const button = wrapper.find('button');

    expect(button.contains(mockChildren)).toBe(true);
    expect(button.prop('disabled')).toBe(true);
    expect(button.prop('onClick')).toBe(mockOnClick);
  });
});
