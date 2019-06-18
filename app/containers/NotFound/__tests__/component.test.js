import React from 'react';
import { shallow } from 'enzyme';

import NotFound from '../component';

describe('<NotFound /> container', () => {
  const component = shallow(<NotFound />);

  it('renders without crashing', () => {
    expect(component.find('h2').text()).toEqual('Page not found');
    expect(component.find('h1').text()).toEqual('404');
  });

  // it('render property', () => {
  //   expect(NotFoundContainer).toMatchSnapshot();
  // });
});
