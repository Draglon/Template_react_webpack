import React from 'react';
import { Form, Input } from 'antd';

const CreateListModalComponent = ({ onChangeField, errorNameValidate }) => (
  <Form>
    <Form.Item
      validateStatus={errorNameValidate && 'error'}
      help={errorNameValidate && 'Should be required'}
    >
      <Input name="name" onChange={onChangeField} placeholder="Name" />
    </Form.Item>
    <Form.Item>
      <Input name="description" onChange={onChangeField} placeholder="Description" />
    </Form.Item>
  </Form>
);

export default CreateListModalComponent;
