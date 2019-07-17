import React from 'react';

import MovieOverviewComponent from '../component';

describe('<MovieOverviewComponent />', () => {
  const props = {
    title: 'some title',
    overview: 'some overview',
  };
  const component = shallow(<MovieOverviewComponent {...props} />);

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
