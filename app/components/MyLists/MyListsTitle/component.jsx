import React from 'react';
import { Typography, Row, Col, Icon } from 'antd';

const MyListsTitleComponent = ({ showModal }) => (
  <Row>
    <Col offset={2} span={20}>
      <div className="top-margin">
        <Typography.Title>
          My Lists <Icon type="plus-circle" onClick={showModal} />
        </Typography.Title>
      </div>
    </Col>
  </Row>
);

export default MyListsTitleComponent;
