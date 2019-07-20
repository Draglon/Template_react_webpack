import React from 'react';

import MovieLabelComponent from '../component';

describe('<MovieLabelComponent />', () => {
  const props = {
    title: 'some title',
    text: 'some text',
  };
  const component = shallow(<MovieLabelComponent {...props} />);

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
