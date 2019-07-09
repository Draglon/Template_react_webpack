import React from 'react';
import { Row, Col, Typography, Tag } from 'antd';

const MovieGenresComponent = ({ title, genres }) => (
  <Row>
    <Col span={20} offset={2}>
      <Typography.Paragraph className="movie__text">
        <b>{title}: </b>
        {genres.map(item => (
          <Tag key={item.id}>{item.name}</Tag>
        ))}
      </Typography.Paragraph>
    </Col>
  </Row>
);

export default MovieGenresComponent;
