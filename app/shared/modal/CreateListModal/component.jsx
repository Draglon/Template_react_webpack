import React from 'react';
import { Modal, Icon, Button } from 'antd';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import FormField from '../../forms/FormField';

const createListSchema = Yup.object().shape({
  name: Yup.string().required('Required name'),
  description: Yup.string().required('Required description'),
});

const CreateListModalComponent = ({
  createListRequest,
  modalVisible,
  showModal,
  hideModal,
  icon = '',
  text = '',
}) => (
  <>
    {icon && <Icon type={icon} onClick={showModal} />}
    {text && (
      <Button type="link" onClick={showModal}>
        {text}
      </Button>
    )}

    <Formik
      initialValues={{ name: '', description: '' }}
      validationSchema={createListSchema}
      onSubmit={(values, actions) => {
        actions.setSubmitting(true);
        createListRequest({ values, actions, hideModal });
      }}
    >
      {props => (
        <Modal
          visible={modalVisible}
          onCancel={hideModal}
          onOk={props.submitForm}
          okButtonProps={{ icon: props.isSubmitting ? 'loading' : '' }}
          okText="Create"
          title="Create list"
        >
          <Form className="form">
            <Field type="text" name="name" component={FormField} placeholder="Name" />
            <Field type="text" name="description" component={FormField} placeholder="Description" />
          </Form>
        </Modal>
      )}
    </Formik>
  </>
);

export default CreateListModalComponent;
