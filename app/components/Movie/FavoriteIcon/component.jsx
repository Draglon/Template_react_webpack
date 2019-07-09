import React from 'react';
import { Icon } from 'antd';

const FavoriteIconComponent = ({ favorite, handleFavorite }) => (
  <Icon type="book" theme={favorite ? 'filled' : undefined} onClick={handleFavorite} />
);

export default FavoriteIconComponent;
