import React from 'react';
import { Typography, Row, Col } from 'antd';

import CreateListModal from '../../../shared/modal/CreateListModal';

const MyListsTitleComponent = () => (
  <Row>
    <Col offset={2} span={20}>
      <div className="top-margin">
        <Typography.Title>
          My Lists <CreateListModal icon="plus-circle" />
        </Typography.Title>
      </div>
    </Col>
  </Row>
);

export default MyListsTitleComponent;
