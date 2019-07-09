import React from 'react';
import { Typography, Row, Col, Icon } from 'antd';

// import DeleteListModal from '../../../shared/modal/DeleteListModal';

const MyListsTitleComponent = () => (
  <Row>
    <Col offset={2} span={20}>
      <div className="top-margin">
        <Typography.Title>
          List item 1 <Icon type="minus-circle" />
        </Typography.Title>
      </div>
    </Col>
  </Row>
);

export default MyListsTitleComponent;
