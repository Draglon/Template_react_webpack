import React from 'react';
import { Row, Col, Carousel } from 'antd';

import Image from '../../../shared/images/Image';

const MovieCarouselComponent = ({ backdrops, title }) => (
  <Row type="flex">
    <Col span={24}>
      <Carousel autoplay>
        {backdrops.map((item, index) => (
          <div key={index}>
            <Image className="movie-image" path={item.file_path} alt={title} />
          </div>
        ))}
      </Carousel>
    </Col>
  </Row>
);

export default MovieCarouselComponent;
