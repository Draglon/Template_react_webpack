import React from 'react';

import WatchlistComponent from '../component';

describe('<WatchlistComponent />', () => {
  let component;
  const props = {
    watchlist: {
      results: [1, 2, 3],
      page: 1,
      totalPages: 100,
    },
    page: () => ({ page: 1 }),
    modalParams: { watchlist: false },
  };

  it('should match snapshot', () => {
    component = shallow(<WatchlistComponent {...props} />);
    expect(component).toMatchSnapshot();
  });
});
