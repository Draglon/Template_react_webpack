import React from 'react';
import { Typography, Row, Col, Card } from 'antd';

import DeleteList from './DeleteList';

const ListsComponent = ({ lists }) => (
  <Row gutter={8} type="flex">
    <Col span={20} offset={2} className="lists">
      {lists.map(item => (
        <Col
          key={item.id}
          xs={{ span: 12 }}
          sm={{ span: 8 }}
          md={{ span: 6 }}
          lg={{ span: 4 }}
          xl={{ span: 4 }}
        >
          <Card hoverable className="top-margin" actions={[<DeleteList listId={item.id} />]}>
            <Typography.Title level={4}>{item.name}</Typography.Title>
            {item.description}
          </Card>
        </Col>
      ))}
    </Col>
  </Row>
);

export default ListsComponent;
