import React from 'react';

import DashboardComponent from '../component';

describe('<DashboardComponent />', () => {
  const props = { searchQuery: '' };
  const component = shallow(<DashboardComponent {...props} />);

  it('should match snapshot - without search query', () => {
    expect(component).toMatchSnapshot();
  });

  it('should match snapshot - with search query', () => {
    component.setProps({ searchQuery: 'some string' });
    expect(component).toMatchSnapshot();
  });
});
