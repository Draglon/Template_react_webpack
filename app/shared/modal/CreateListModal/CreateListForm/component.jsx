import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import FormField from '../../../forms/FormField';

const LoginSchema = Yup.object().shape({
  name: Yup.string().required('Required name'),
  description: Yup.string().required('Required description'),
});

const CreateListFormComponent = ({ onValidate }) => (
  <>
    <Formik
      initialValues={{ name: '', description: '' }}
      validationSchema={LoginSchema}
      validate={onValidate}
    >
      {() => (
        <Form className="form">
          <Field type="text" name="name" component={FormField} placeholder="Name" />
          <Field type="text" name="description" component={FormField} placeholder="Description" />
        </Form>
      )}
    </Formik>
  </>
);

export default CreateListFormComponent;
