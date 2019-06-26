import React from 'react';
import { Typography, Row, Col, Avatar, Dropdown, Icon, Menu, Layout } from 'antd';
import { Link } from 'react-router-dom';
import { getCookie } from '../../helpers/cookie';

const Overlay = removeSessionId => (
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
    <Menu.Item onClick={removeSessionId}>Logout</Menu.Item>
  </Menu>
);

const HeaderComponent = ({ removeSessionId }) => {
  return (
    <Layout.Header>
      <Row type="flex" justify="space-between">
        <Col>
          <Typography.Text className="logo">THE MOVIE DB</Typography.Text>
        </Col>
        <Col>
          <figure className="profile__avatar">
            {getCookie('avatar') ? (
              <img
                src={`https://image.tmdb.org/t/p/w500/${getCookie('avatar')}.jpg`}
                alt={getCookie('name')}
              />
            ) : (
              <Avatar icon="user" />
            )}
          </figure>
          <Dropdown className="profile__dropdown" overlay={Overlay(removeSessionId)}>
            <Typography.Text>
              {getCookie('username')}
              <Icon type="caret-down" />
            </Typography.Text>
          </Dropdown>
        </Col>
      </Row>
    </Layout.Header>
  );
};

export default HeaderComponent;
