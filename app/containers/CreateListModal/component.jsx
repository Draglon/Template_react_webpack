import React from 'react';
import { Form, Input } from 'antd';
// import * as Yup from 'yup';

const CreateListModalComponent = ({ onChangeField }) => (
  <Form>
    <Form.Item validateStatus="error" help="Should be required">
      <Input name="name" onChange={onChangeField} placeholder="Name" />
    </Form.Item>
    <Form.Item>
      <Input name="description" onChange={onChangeField} placeholder="Description" />
    </Form.Item>
  </Form>
);

export default CreateListModalComponent;
