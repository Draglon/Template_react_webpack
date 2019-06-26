import React from 'react';
import { Row, Col, Input, Pagination } from 'antd';

const Dashboard = () => (
  <>
    <div className="top-padding">
      <Row type="flex">
        <Col
          xs={{ span: 22, offset: 1 }}
          sm={{ span: 20, offset: 2 }}
          md={{ span: 18, offset: 3 }}
          lg={{ span: 16, offset: 4 }}
          xl={{ span: 14, offset: 5 }}
        >
          <Input.Search placeholder="Enter movie name" size="large" enterButton="Search" />
        </Col>
      </Row>
    </div>
    <div className="top-padding">
      <Row type="flex" gutter={16}>
        <Col span={20} offset={2}>
          {/* {range(17).map(item => (
            <Col
              key={item}
              xs={{ span: 12 }}
              sm={{ span: 12 }}
              md={{ span: 8 }}
              lg={{ span: 6 }}
              xl={{ span: 4 }}
            >
              <Movie />
            </Col>
          ))} */}
        </Col>
      </Row>
      <Row type="flex" justify="center" className="top-padding">
        <Col>
          <Pagination defaultCurrent={1} total={50} className="pagination" />
        </Col>
      </Row>
    </div>
  </>
);

export default Dashboard;
