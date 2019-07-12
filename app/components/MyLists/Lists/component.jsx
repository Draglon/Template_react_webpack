import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Typography, Row, Col, Card } from 'antd';

import DeleteItemModal from '../../../shared/modal/DeleteItemModal';

const ListsComponent = ({ lists, onConfirm }) => (
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
          <Card
            hoverable
            className="top-margin"
            actions={[
              <DeleteItemModal
                title="Do you want to delete list?"
                params={{ listId: item.id }}
                onConfirm={onConfirm}
                type="delete"
              />,
            ]}
          >
            <Link to={`list/${item.id}`}>
              <Typography.Title level={4}>{item.name}</Typography.Title>
              {item.description}
            </Link>
          </Card>
        </Col>
      ))}
    </Col>
  </Row>
);

ListsComponent.propTypes = {
  lists: PropTypes.array.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default ListsComponent;
