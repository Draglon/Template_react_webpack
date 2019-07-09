import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import FormField from '../../shared/forms/FormField';
import FormButton from '../../shared/forms/Button';

const LoginSchema = Yup.object().shape({
  listname: Yup.string().required('Required list name'),
  description: Yup.string().required('Required list description'),
});

const CreateListComponent = ({ createList }) => (
  <>
    <h2 className="section__title">Home page</h2>
    <Formik
      initialValues={{ listname: '', description: '' }}
      validationSchema={LoginSchema}
      onSubmit={createList}
    >
      {() => (
        <Form className="form">
          <Field type="text" name="listname" component={FormField} placeholder="List name" />
          <Field type="text" name="description" component={FormField} placeholder="Description" />
          <FormButton type="submit" value="Create list" />
        </Form>
      )}
    </Formik>
  </>
);

export default CreateListComponent;
