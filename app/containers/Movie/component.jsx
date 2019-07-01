import React, { Component } from 'react';
import { Row, Col, Carousel, Card, Typography, Tag, Icon, Popover, PopoverContent } from 'antd';

class MovieItemComponent extends Component {
  componentDidMount() {
    const {
      setMovie,
      match: {
        params: { id },
      },
    } = this.props;
    setMovie({ id });
  }

  render() {
    const { movie } = this.props;

    return (
      <>
        {movie && (
          <>
            {console.log(movie)}
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
                  <span>$2,742,491,359.00</span>
                </Typography.Paragraph>
              </Col>
              <Col span={20} offset={2}>
                <Typography.Paragraph>
                  <b>Genres: </b>
                  <Tag>ADVENTURE</Tag>
                  <Tag>SCIENCE FICTION</Tag>
                  <Tag>ACTION</Tag>
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
                {/* {range(10).map(index => (
                  <Col
                    key={index}
                    xs={{ span: 12 }}
                    sm={{ span: 8 }}
                    md={{ span: 6 }}
                    lg={{ span: 4 }}
                    xl={{ span: 4 }}
                  >
                    <Card
                      cover={
                        <img
                          alt="example"
                          src="https://m.media-amazon.com/images/M/MV5BNzg1MTUyNDYxOF5BMl5BanBnXkFtZTgwNTQ4MTE2MjE@._V1_.jpg"
                        />
                      }
                      className="top-margin"
                    >
                      <Card.Meta title="Robert Downey Jr." description="Ironman" />
                    </Card>
                  </Col>
                ))} */}
              </Col>
            </Row>
            <Row>
              <Col span={10} offset={2} className="top-margin">
                <Typography.Title level={3}>Crew</Typography.Title>
              </Col>
            </Row>
            <Row gutter={8} type="flex">
              <Col span={20} offset={2}>
                {/* {range(10).map(index => (
                  <Col
                    key={index}
                    xs={{ span: 12 }}
                    sm={{ span: 8 }}
                    md={{ span: 6 }}
                    lg={{ span: 4 }}
                    xl={{ span: 4 }}
                  >
                    <Card
                      cover={
                        <img
                          alt="example"
                          src="https://m.media-amazon.com/images/M/MV5BNzg1MTUyNDYxOF5BMl5BanBnXkFtZTgwNTQ4MTE2MjE@._V1_.jpg"
                        />
                      }
                      className="top-margin"
                    >
                      <Card.Meta title="Robert Downey Jr." description="Ironman" />
                    </Card>
                  </Col>
                ))} */}
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
