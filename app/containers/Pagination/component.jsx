import React from 'react';
import { Row, Col, Pagination } from 'antd';

const PaginationComponent = ({ query, currentPage, getPage, totalPages }) => (
  <>
    {totalPages ? (
      <Row type="flex" justify="center" className="top-padding">
        <Col>
          <Pagination
            className="pagination"
            defaultCurrent={1}
            current={currentPage}
            total={totalPages}
            onChange={page => getPage(query ? { query, page } : { page })}
          />
        </Col>
      </Row>
    ) : null}
  </>
);

export default PaginationComponent;
