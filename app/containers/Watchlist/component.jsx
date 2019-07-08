import React from 'react';
import { Row, Col, Typography, Modal, Icon } from 'antd';
import { range } from 'lodash';

// const showDeleteMovieModal = () => {
//   Modal.confirm({
//     title: 'Do you want to delete movie from watchlist?',
//     onOk() {},
//     onCancel() {},
//   });
// };

import MovieList from '../MovieList';
import Pagination from '../Pagination';

const WatchlistComponent = ({ watchlist, page }) => (
  <>
    {watchlist && (
      <>
        <Row>
          <Col offset={2} span={20}>
            <div className="top-margin">
              <Typography.Title>Watchlist</Typography.Title>
            </div>
          </Col>
        </Row>
        <MovieList movies={watchlist.results} />
        <Pagination currentPage={watchlist.page} page={page} totalPages={watchlist.totalPages} />
      </>
    )}
  </>
);

export default WatchlistComponent;
