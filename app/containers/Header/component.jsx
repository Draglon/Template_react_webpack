import React from 'react';
import { Typography, Row, Col, Avatar, Dropdown, Icon, Menu, Layout } from 'antd';
import { Link } from 'react-router-dom';

const Overlay = removeSessionId => (
  <Menu>
    <Menu.Item>
      <Link to="/stubs/dashboard">Dashboard</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item>
      <Link to="/stubs/lists">My Lists</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/stubs/watchlist">Watchlist</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/stubs/favorites">Favorites</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item onClick={removeSessionId}>Logout</Menu.Item>
  </Menu>
);

const HeaderComponent = ({ profile, removeSessionId }) => {
  return (
    <Layout.Header>
      <Row type="flex" justify="space-between">
        <Col>
          <Typography.Text className="logo">THE MOVIE DB</Typography.Text>
        </Col>
        <Col>
          <Avatar icon="user" />
          <Dropdown overlay={Overlay(removeSessionId)}>
            <Typography.Text>
              {/* {profile.username} */}
              <Icon type="caret-down" />
            </Typography.Text>
          </Dropdown>
        </Col>
      </Row>
    </Layout.Header>
  );
};

export default HeaderComponent;
