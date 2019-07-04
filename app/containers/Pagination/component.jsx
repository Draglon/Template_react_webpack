import React from 'react';
import { Row, Col, Pagination } from 'antd';

const PaginationComponent = ({ page, currentPage, totalPages }) => (
  <>
    {totalPages ? (
      <Row type="flex" justify="center" className="top-padding">
        <Col>
          <Pagination
            className="pagination"
            defaultCurrent={1}
            current={currentPage}
            total={totalPages}
            onChange={page}
          />
        </Col>
      </Row>
    ) : null}
  </>
);

export default PaginationComponent;
