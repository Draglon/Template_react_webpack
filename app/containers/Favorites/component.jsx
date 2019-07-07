import React from 'react';
import { Layout, Row, Col, Typography, Modal, Icon, Pagination } from 'antd';
import { range } from 'lodash';

// const showDeleteMovieModal = () => {
//   Modal.confirm({
//     title: 'Do you want to delete movie from favorites?',
//     onOk() {},
//     onCancel() {},
//   });
// };

import MovieList from '../MovieList';
// import Pagination from '../Pagination';

const FavoritesComponent = ({ favorites }) => (
  <>
    {favorites && (
      <>
        <Row>
          <Col offset={2} span={20}>
            <div className="top-margin">
              <Typography.Title>Favorites</Typography.Title>
            </div>
          </Col>
        </Row>
        <MovieList movies={favorites.results} />
        <Row type="flex" justify="center">
          <Col>
            <Pagination defaultCurrent={1} total={50} className="pagination" />
          </Col>
        </Row>
      </>
    )}
  </>
);

export default FavoritesComponent;
