import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import MyListsComponent from '../component';

describe('<MyListsComponent /> container', () => {
  let component;

  it('render property', () => {
    component = shallow(<MyListsComponent />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
