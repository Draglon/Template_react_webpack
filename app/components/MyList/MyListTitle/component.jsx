import React from 'react';
import { Typography, Row, Col } from 'antd';

import DeleteItemModal from '../../../shared/modal/DeleteItemModal';

const MyListsTitleComponent = ({ myList, modalParams }) => (
  <Row>
    <Col offset={2} span={20}>
      <div className="top-margin">
        <Typography.Title>
          {myList.title}{' '}
          <DeleteItemModal
            title={modalParams.title}
            onConfirm={modalParams.onConfirm}
            type="minus-circle"
          />
        </Typography.Title>
      </div>
    </Col>
  </Row>
);

export default MyListsTitleComponent;
