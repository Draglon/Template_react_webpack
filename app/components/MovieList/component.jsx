import React from 'react';
import { Row, Col, Empty, Icon } from 'antd';

import MovieItem from './MovieItem';

const MovieListComponent = ({ movies, actions }) => (
  <Row className="top-padding" type="flex" gutter={16}>
    <Col className="cards" span={20} offset={2}>
      {movies.length !== 0 && (
        <>
          {movies.map(item => (
            <Col
              key={item.id}
              xs={{ span: 12 }}
              sm={{ span: 12 }}
              md={{ span: 8 }}
              lg={{ span: 6 }}
              xl={{ span: 4 }}
            >
              <MovieItem
                item={item}
                actions={
                  actions && [<Icon key="delete" type="delete" onClick={() => actions(item.id)} />]
                }
              />
            </Col>
          ))}
        </>
      )}
      {movies.length === 0 && (
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
