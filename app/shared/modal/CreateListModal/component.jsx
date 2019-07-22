import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Icon, Button } from 'antd';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import FormField from '../../forms/FormField';

const createListSchema = Yup.object().shape({
  name: Yup.string().required('Required name'),
  description: Yup.string().required('Required description'),
});

const CreateListModalComponent = ({ modalVisible, showModal, hideModal, onSubmit, icon, text }) => (
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
      onSubmit={onSubmit}
      render={props => (
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
    />
  </>
);

CreateListModalComponent.defaultProps = {
  icon: '',
  text: '',
};

CreateListModalComponent.propTypes = {
  modalVisible: PropTypes.bool.isRequired,
  showModal: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  icon: PropTypes.string,
  text: PropTypes.string,
};

export default CreateListModalComponent;
