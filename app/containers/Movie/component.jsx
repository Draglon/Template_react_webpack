import React from 'react';
import { Row, Col, Carousel, Typography, Tag, Popover, Icon, Modal } from 'antd';
import MovieDetails from '../MovieDetails';
import { formatMoney, formatTime } from '../../helpers/format';

const MovieComponent = ({ movie }) => (
  <>
    {movie && (
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
              <Icon
                type="heart"
                // theme={watchlist ? 'filled' : undefined}
                // onClick={this.handleWatchlist}
              />{' '}
              <Icon
                type="book"
                // theme={bookmarked ? 'filled' : undefined}
                // onClick={this.handleBookmark}
              />
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
              {movie.genres.map(item => (
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
        <MovieDetails movieDetails={movie.cast} />
        <Row>
          <Col span={10} offset={2} className="top-margin">
            <Typography.Title level={3}>Crew</Typography.Title>
          </Col>
        </Row>
        <MovieDetails movieDetails={movie.crew} />

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
