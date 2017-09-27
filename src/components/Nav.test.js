import React from 'react';
import { shallow } from 'enzyme';
import Nav from './Nav';

it('renders without crashing', () => {
  const items = [1, 2, 3, 4]
  const wrapper = shallow(<Nav />)
  for (var i = 0; i < items.length; i++) {
    expect(wrapper).toContainReact(<li>items[i]</li>)
  }
});
