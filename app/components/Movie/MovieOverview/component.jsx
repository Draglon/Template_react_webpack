import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Typography } from 'antd';

const MovieOverviewComponent = ({ title, overview }) => (
  <Row className="top-margin">
    <Col span={20} offset={2}>
      <Typography.Title level={3}>{title}</Typography.Title>
      <Typography.Paragraph className="movie__text">{overview}</Typography.Paragraph>
    </Col>
  </Row>
);

MovieOverviewComponent.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

export default MovieOverviewComponent;
