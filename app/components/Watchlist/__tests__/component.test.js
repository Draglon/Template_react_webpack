import React from 'react';

import WatchlistComponent from '../component';

describe('<WatchlistComponent />', () => {
  const props = {
    watchlist: {
      results: [1, 2, 3],
      page: 1,
      totalPages: 100,
    },
    page: () => ({ page: 1 }),
    modalParams: { watchlist: false },
  };
  const component = shallow(<WatchlistComponent {...props} />);

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
