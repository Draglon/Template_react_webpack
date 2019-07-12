import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Empty } from 'antd';

import MovieItem from './MovieItem';
import DeleteItemModal from '../../modal/DeleteItemModal';

const MovieListComponent = ({ movies, modalParams }) => (
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
                  modalParams && [
                    <DeleteItemModal
                      title={modalParams.title}
                      params={{ movieId: item.id, ...modalParams.params }}
                      onConfirm={modalParams.onConfirm}
                      type="delete"
                    />,
                  ]
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

MovieListComponent.defaultProps = {
  modalParams: null,
};

MovieListComponent.propTypes = {
  movies: PropTypes.array.isRequired,
  modalParams: PropTypes.object,
};

export default MovieListComponent;
