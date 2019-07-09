import React from 'react';
import { Row, Col, Carousel, Typography, Tag, Popover, Icon, Modal } from 'antd';
import { formatMoney, formatTime } from '../../helpers/format';

import MovieDetails from './MovieDetails';
import WatchlistIcon from './WatchlistIcon';
import FavoriteIcon from './FavoriteIcon';

const MovieComponent = ({
  movie,
  genres,
  cast,
  crew,
  // modalVisible,
  // popoverVisible,
}) => (
  <>
    {movie && genres && cast && crew && (
      <>
        <Row type="flex">
          <Col span={24}>
            <Carousel autoplay>
              {movie.backdrops.map((item, index) => (
                <div key={index}>
                  <img
                    className="movie-image"
                    src={`https://image.tmdb.org/t/p/original${item.file_path}`}
                    alt={movie.title}
                  />
                </div>
              ))}
            </Carousel>
          </Col>
        </Row>
        <Row className="top-margin">
          <Col span={20} offset={2}>
            <Typography.Title>
              <span>{movie.title}</span>{' '}
              <Popover
                title="Add movie to list"
                trigger="click"
                // visible={popoverVisible}
                // onVisibleChange={this.handleVisiblePopover}
                // content={
                //   <PopoverContent
                //     openModal={this.showModal}
                //     closePopover={() => this.handleVisiblePopover(false)}
                //   />
                // }
              >
                <Icon type="plus-circle" />
              </Popover>{' '}
              <WatchlistIcon movieId={movie.id} watchlist={movie.watchlist} />{' '}
              <FavoriteIcon movieId={movie.id} favorite={movie.favorite} />
            </Typography.Title>
            <Typography.Title level={3}>Overview</Typography.Title>
            <Typography.Paragraph className="movie__text">{movie.overview}</Typography.Paragraph>
          </Col>
        </Row>
        <Row>
          <Col span={20} offset={2}>
            <Typography.Paragraph className="movie__text">
              <b>Original Language: </b>
              <span>{movie.language}</span>
            </Typography.Paragraph>
          </Col>
          <Col span={20} offset={2}>
            <Typography.Paragraph className="movie__text">
              <b>Runtime: </b>
              <span>{formatTime(movie.runtime)}</span>
            </Typography.Paragraph>
          </Col>
          <Col span={20} offset={2}>
            <Typography.Paragraph className="movie__text">
              <b>Budget: </b>
              <span>${formatMoney(movie.budget)}</span>
            </Typography.Paragraph>
          </Col>
          <Col span={20} offset={2}>
            <Typography.Paragraph className="movie__text">
              <b>Revenue: </b>
              <span>${formatMoney(movie.revenue)}</span>
            </Typography.Paragraph>
          </Col>
          <Col span={20} offset={2}>
            <Typography.Paragraph className="movie__text">
              <b>Genres: </b>
              {genres.map(item => (
                <Tag key={item.id}>{item.name}</Tag>
              ))}
            </Typography.Paragraph>
          </Col>
        </Row>
        <Row>
          <Col span={10} offset={2} className="top-margin">
            <Typography.Title level={3}>Casts</Typography.Title>
          </Col>
        </Row>
        <MovieDetails movieDetails={cast} />
        <Row>
          <Col span={10} offset={2} className="top-margin">
            <Typography.Title level={3}>Crew</Typography.Title>
          </Col>
        </Row>
        <MovieDetails movieDetails={crew} />

        {/* <Modal
          // visible={modalVisible}
          onCancel={this.hideModal}
          okText="Create"
          title="Create list"
        >
          <CreateListModal />
        </Modal> */}
      </>
    )}
  </>
);

export default MovieComponent;
