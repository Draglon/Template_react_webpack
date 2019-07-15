import React from 'react';

import HeaderComponent from '../component';

describe('<HeaderComponent /> component', () => {
  let component;
  const props = {
    className: 'some class to image',
    path: 'some path to image',
    alt: 'Alt to image',
  };

  it('Render property - with avatar', () => {
    component = shallow(<HeaderComponent {...props} />);
    expect(component).toMatchSnapshot();
  });
});
