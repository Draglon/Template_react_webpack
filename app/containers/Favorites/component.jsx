import React from 'react';
import { Layout, Row, Col, Typography, Modal, Icon, Pagination } from 'antd';
import { range } from 'lodash';

const showDeleteMovieModal = () => {
  Modal.confirm({
    title: 'Do you want to delete movie from favorites?',
    onOk() {},
    onCancel() {},
  });
};

const FavoritesComponent = () => (
  <Layout>
    <Layout.Content>
      <Row>
        <Col offset={2} span={20}>
          <div className="top-margin">
            <Typography.Title>Favorites</Typography.Title>
          </div>
        </Col>
      </Row>
      <Row gutter={8} type="flex">
        <Col span={20} offset={2}>
          {range(10).map(item => (
            <Col
              key={item}
              xs={{ span: 12 }}
              sm={{ span: 12 }}
              md={{ span: 8 }}
              lg={{ span: 6 }}
              xl={{ span: 4 }}
            >
              {/* <Movie
                actions={[<Icon key="delete" type="delete" onClick={showDeleteMovieModal} />]}
              /> */}
            </Col>
          ))}
        </Col>
      </Row>
      <Row type="flex" justify="center">
        <Col>
          <Pagination defaultCurrent={1} total={50} className="pagination" />
        </Col>
      </Row>
    </Layout.Content>
  </Layout>
);

export default FavoritesComponent;
