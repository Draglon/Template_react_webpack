import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import CreateList from '../component';

describe('<CreateList /> component', () => {
  const props = { createList: jest.fn(), listId: 'list id ' };
  let component;

  beforeEach(() => {
    component = shallow(<CreateList {...props} />);
  });

  it('Render property', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
