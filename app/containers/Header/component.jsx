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
          <div className="profile">
            <figure className="profile__avatar">
              {getCookie('avatar') ? (
                <img
                  className="profile__avatar-img"
                  src={`https://www.gravatar.com/avatar/${getCookie('avatar')}.jpg`}
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
          </div>
        </Col>
      </Row>
    </Layout.Header>
  );
};

export default HeaderComponent;
