import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Row, Col, Avatar, Dropdown, Icon, Layout } from 'antd';

import DropdownMenu from './DropdownMenu';

const HeaderComponent = ({ profile }) => {
  return (
    <Layout.Header>
      <Row type="flex" justify="space-between">
        <Col>
          <Typography.Text className="logo">THE MOVIE DB</Typography.Text>
        </Col>

        {profile && (
          <Col>
            <div className="profile">
              <figure className="profile__avatar">
                {profile.avatar ? (
                  <img
                    className="profile__avatar-img"
                    src={`https://www.gravatar.com/avatar/${profile.avatar}.jpg`}
                    alt={profile.name}
                  />
                ) : (
                  <Avatar icon="user" />
                )}
              </figure>
              <Dropdown className="profile__dropdown" overlay={<DropdownMenu />}>
                <Typography.Text>
                  {profile.username}
                  <Icon type="caret-down" />
                </Typography.Text>
              </Dropdown>
            </div>
          </Col>
        )}
      </Row>
    </Layout.Header>
  );
};

HeaderComponent.defaultProps = {
  profile: {},
};

HeaderComponent.propTypes = {
  profile: PropTypes.object,
};

export default HeaderComponent;
