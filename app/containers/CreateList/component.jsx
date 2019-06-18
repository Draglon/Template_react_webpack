import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  listname: Yup.string().required('Required list name'),
  description: Yup.string().required('Required list description'),
});

const CreateList = ({ createList, listId }) => (
  <>
    <h2 className="section__title">Home page</h2>
    <Formik
      initialValues={{ listname: '', description: '' }}
      validationSchema={LoginSchema}
      onSubmit={values => createList(values)}
    >
      {() => (
        <Form className="form">
          <Field
            name="listname"
            render={({ field }) => (
              <div className="form__field">
                <input {...field} type="text" placeholder="List name" />
                <ErrorMessage name="listname" component="div" className="form__error" />
              </div>
            )}
          />
          <Field
            name="description"
            render={({ field }) => (
              <div className="form__field">
                <input {...field} type="text" placeholder="List description" />
                <ErrorMessage name="description" component="div" className="form__error" />
              </div>
            )}
          />
          <div className="align-center">
            <button className="btn btn-primary btn--small btn-submit" type="submit">
              Create list
            </button>
          </div>
        </Form>
      )}
    </Formik>
    {listId && <div className="">listId: {listId.list_id}</div>}
  </>
);

export default CreateList;
