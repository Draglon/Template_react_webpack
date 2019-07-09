import React from 'react';
import { Row, Col, Typography } from 'antd';

const MovieOverviewComponent = ({ title, overview }) => (
  <Row className="top-margin">
    <Col span={20} offset={2}>
      <Typography.Title level={3}>{title}</Typography.Title>
      <Typography.Paragraph className="movie__text">{overview}</Typography.Paragraph>
    </Col>
  </Row>
);

export default MovieOverviewComponent;
