import React from 'react';
import { Row, Col, Card } from 'antd';

const cover = item => (
  <img alt={item.name} src={`https://image.tmdb.org/t/p/original/${item.profile_path}`} />
);

const MovieDetailsComponent = ({ movieDetails }) => (
  <Row gutter={8} type="flex">
    <Col span={20} offset={2} className="movie__details">
      {movieDetails.map(item => (
        <Col
          key={item.id}
          xs={{ span: 12 }}
          sm={{ span: 8 }}
          md={{ span: 6 }}
          lg={{ span: 4 }}
          xl={{ span: 4 }}
        >
          <Card cover={cover(item)} className="top-margin">
            <Card.Meta title={item.name} description={item.character || item.job} />
          </Card>
        </Col>
      ))}
    </Col>
  </Row>
);

export default MovieDetailsComponent;
