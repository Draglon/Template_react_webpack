import React from 'react';
import { Row, Col, Input } from 'antd';

const SearchComponent = ({ onSearch }) => (
  <Row className="top-padding" type="flex">
    <Col
      xs={{ span: 22, offset: 1 }}
      sm={{ span: 20, offset: 2 }}
      md={{ span: 18, offset: 3 }}
      lg={{ span: 16, offset: 4 }}
      xl={{ span: 14, offset: 5 }}
    >
      <Input.Search
        placeholder="Enter movie name"
        size="large"
        enterButton="Search"
        onSearch={value => onSearch({ query: value, page: 1 })}
      />
    </Col>
  </Row>
);

export default SearchComponent;
