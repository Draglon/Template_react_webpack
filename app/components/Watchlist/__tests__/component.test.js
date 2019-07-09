import React from 'react';
import toJson from 'enzyme-to-json';

import WatchlistComponent from '../component';

describe('<WatchlistComponent /> container', () => {
  let component;

  it('render property', () => {
    component = shallow(<WatchlistComponent />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
