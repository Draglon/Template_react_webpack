import React from 'react';

import NotFound from '../component';

describe('<NotFound /> component', () => {
  const component = shallow(<NotFound />);

  it('render property', () => {
    expect(component).toMatchSnapshot();
  });
});
