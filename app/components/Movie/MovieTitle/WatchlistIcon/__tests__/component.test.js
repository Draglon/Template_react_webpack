import React from 'react';

import WatchlistIconComponent from '../component';

describe('<WatchlistIconComponent />', () => {
  const props = {
    watchlist: false,
    handleWatchlist: () => {},
  };
  const component = shallow(<WatchlistIconComponent {...props} />);

  it('should match snapshot - watchlist (false)', () => {
    expect(component).toMatchSnapshot();
  });

  it('should match snapshot - watchlist (true)', () => {
    const newProps = {
      ...props,
      watchlist: true,
    };
    component.setProps(newProps);
    expect(component).toMatchSnapshot();
  });
});
