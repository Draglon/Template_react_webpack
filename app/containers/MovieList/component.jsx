import React from 'react';
import { Row, Col, Empty } from 'antd';

import MovieItem from '../MovieItem';

const MovieListComponent = ({ movies }) => (
  <Row className="top-padding" type="flex" gutter={16}>
    <Col className="cards" span={20} offset={2}>
      {movies ? (
        movies.map(item => (
          <Col
            key={item.id}
            xs={{ span: 12 }}
            sm={{ span: 12 }}
            md={{ span: 8 }}
            lg={{ span: 6 }}
            xl={{ span: 4 }}
          >
            <MovieItem item={item} />
          </Col>
        ))
      ) : (
        <Empty
          className="cards__empty"
          description="No movies found"
          image={Empty.PRESENTED_IMAGE_SIMPLE}
        />
      )}
    </Col>
  </Row>
);

export default MovieListComponent;
