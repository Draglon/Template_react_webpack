import React from 'react';
import PropTypes from 'prop-types';
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

MovieGenresComponent.propTypes = {
  title: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
};

export default MovieGenresComponent;
