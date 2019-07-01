import React, { Component } from 'react';
import { Row, Col, Carousel, Card, Typography, Tag, Icon, Popover, PopoverContent } from 'antd';

class MovieItemComponent extends Component {
  componentDidMount() {
    const {
      setMovie,
      setMovieCredits,
      match: {
        params: { id },
      },
    } = this.props;
    setMovie({ id });
    setMovieCredits({ id });
  }

  render() {
    const { movie, movieCredits } = this.props;

    return (
      <>
        {movie && (
          <>
            {console.log(movie)}
            {console.log(movieCredits)}
            <Row type="flex">
              <Col span={24}>
                <Carousel autoplay>
                  <div>
                    <img
                      className="movie-image"
                      src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                      alt={movie.title}
                    />
                  </div>
                </Carousel>
              </Col>
            </Row>
            <Row className="top-margin">
              <Col span={20} offset={2}>
                <Typography.Title>
                  <span>{movie.title}</span>
                  {/* <Popover
                    title="Add movie to list"
                    trigger="click"
                    visible={popoverVisible}
                    onVisibleChange={this.handleVisiblePopover}
                    content={
                      <PopoverContent
                        openModal={this.showModal}
                        closePopover={() => this.handleVisiblePopover(false)}
                      />
                    }
                  >
                    <Icon type="plus-circle" />
                  </Popover>{' '} */}
                  {/* <Icon
                    type="heart"
                    theme={watchlist ? 'filled' : undefined}
                    onClick={this.handleWatchlist}
                  />{' '}
                  <Icon
                    type="book"
                    theme={bookmarked ? 'filled' : undefined}
                    onClick={this.handleBookmark}
                  /> */}
                </Typography.Title>
                <Typography.Title level={3}>Overview</Typography.Title>
                <Typography.Paragraph>{movie.overview}</Typography.Paragraph>
              </Col>
            </Row>
            <Row>
              <Col span={20} offset={2}>
                <Typography.Paragraph>
                  <b>Original Language: </b>
                  <span>{movie.spoken_languages.name}</span>
                </Typography.Paragraph>
              </Col>
              <Col span={20} offset={2}>
                <Typography.Paragraph>
                  <b>Runtime: </b>
                  <span>{movie.runtime}</span>
                </Typography.Paragraph>
              </Col>
              <Col span={20} offset={2}>
                <Typography.Paragraph>
                  <b>Budget: </b>
                  <span>${movie.budget}</span>
                </Typography.Paragraph>
              </Col>
              <Col span={20} offset={2}>
                <Typography.Paragraph>
                  <b>Revenue: </b>
                  <span>${movie.revenue}</span>
                </Typography.Paragraph>
              </Col>
              <Col span={20} offset={2}>
                <Typography.Paragraph>
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
            <Row gutter={8} type="flex">
              <Col span={20} offset={2}>
                {movieCredits
                  && movieCredits.cast.map(item =>
                    item.profile_path ? (
                      <Col
                      key={item.id}
                      xs={{ span: 12 }}
                      sm={{ span: 8 }}
                      md={{ span: 6 }}
                      lg={{ span: 4 }}
                      xl={{ span: 4 }}
                    >
                      <Card
                          cover={
                            (
<img
                              alt={item.name}
                              src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
                          />
)
                          }
                          className="top-margin"
                        >
                          <Card.Meta title={item.name} description={movie.title} />
                        </Card>
                    </Col>
                  ) : null,
                  )}
              </Col>
            </Row>
            <Row>
              <Col span={10} offset={2} className="top-margin">
                <Typography.Title level={3}>Crew</Typography.Title>
              </Col>
            </Row>
            <Row gutter={8} type="flex">
              <Col span={20} offset={2}>
                {movieCredits
                  && movieCredits.cast.map(item => item.profile_path ? (
                        <Col
                        key={item.id}
                        xs={{ span: 12 }}
                        sm={{ span: 8 }}
                        md={{ span: 6 }}
                        lg={{ span: 4 }}
                        xl={{ span: 4 }}
                      >
                        <Card
                          cover={(
<img
                            alt={item.name}
                            src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
                          />
)}
                          className="top-margin"
                        >
                          <Card.Meta title={item.name} description={movie.title} />
                        </Card>
                      </Col>
                      ) : null,
                  )}
              </Col>
            </Row>
          </>
        )}
      </>
      // <Modal visible={modalVisible} onCancel={this.hideModal} okText="Create" title="Create list">
      //   <CreateListModal />
      // </Modal>
    );
  }
}

export default MovieItemComponent;
