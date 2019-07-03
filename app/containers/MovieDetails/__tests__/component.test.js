import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import MovieItemComponent from '../component';

describe('<MovieItemComponent />', () => {
  let component;
  const props = {
    movieDetails: [],
  };

  it('render property', () => {
    component = shallow(<MovieItemComponent {...props} />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
