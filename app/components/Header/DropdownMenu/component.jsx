import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const DropdownMenuComponent = ({ deleteSessionRequest }) => (
  <Menu>
    <Menu.Item>
      <Link to="/">Dashboard</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item>
      <Link to="/mylists">My Lists</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/watchlist">Watchlist</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/favorites">Favorites</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item onClick={deleteSessionRequest}>Logout</Menu.Item>
  </Menu>
);

DropdownMenuComponent.propTypes = {
  deleteSessionRequest: PropTypes.func.isRequired,
};

export default DropdownMenuComponent;
