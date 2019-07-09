import React from 'react';
import { Icon } from 'antd';

const WatchlistIconComponent = ({ watchlist, handleWatchlist }) => (
  <Icon type="heart" theme={watchlist ? 'filled' : undefined} onClick={handleWatchlist} />
);

export default WatchlistIconComponent;
