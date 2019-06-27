import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import CreateListComponent from '../component';

describe('<CreateListComponent /> component', () => {
  const props = { createList: jest.fn() };
  let component;

  beforeEach(() => {
    component = shallow(<CreateListComponent {...props} />);
  });

  it('Render property', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
