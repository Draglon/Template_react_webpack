import React from 'react';
import { Row, Col, Card, Typography, Icon, Modal } from 'antd';

import Pagination from '../Pagination';
import CreateListModal from '../CreateListModal';

const MyListsComponent = ({
  myLists,
  showModal,
  showModalDelete,
  hideModal,
  modalVisible,
  page,
}) => (
  <>
    {myLists && (
      <>
        <Row>
          <Col offset={2} span={20}>
            <div className="top-margin">
              <Typography.Title>
                My Lists
                <Icon type="plus-circle" onClick={showModal} />
              </Typography.Title>
            </div>
          </Col>
        </Row>
        <Row gutter={8} type="flex">
          <Col span={20} offset={2}>
            {myLists.results.map(item => (
              <Col
                key={item.id}
                xs={{ span: 12 }}
                sm={{ span: 8 }}
                md={{ span: 6 }}
                lg={{ span: 4 }}
                xl={{ span: 4 }}
              >
                <Card
                  hoverable
                  className="top-margin"
                  actions={[
                    <Icon key="delete" type="delete" onClick={() => showModalDelete(item.id)} />,
                  ]}
                >
                  <Typography.Title level={4}>{item.name}</Typography.Title>
                  {item.description}
                </Card>
              </Col>
            ))}
          </Col>
        </Row>
        <Pagination currentPage={myLists.page} page={page} totalPages={myLists.totalPages} />
      </>
    )}

    <Modal
      visible={modalVisible}
      onCancel={hideModal}
      onOk={() => console.log('OnOk')}
      okText="Create"
      title="Create list"
    >
      <CreateListModal />
    </Modal>
  </>
);

export default MyListsComponent;
