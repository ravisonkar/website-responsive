import React from 'react';
import { FormikActions, Formik, Form, Field, FormikValues } from 'formik';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import IUser from '../classes/IUser';

export type UserEventHandler = (
  user_data: IUser,
  actions: FormikActions<FormikValues>
) => void;

interface IAddProps {
  user_data: IUser;
  submitHandler: UserEventHandler;
}

const AddFormik = ({ user_data, submitHandler }: IAddProps) => {
  return (
    <>
      <Formik
        initialValues={user_data}
        onSubmit={submitHandler}
        enableReinitialize
      >
        {({
          handleChange,
          handleBlur,
          values,
          isValid,
          errors,
          touched,
          isSubmitting,
          dirty,
          setFieldValue,
          setFieldTouched,
        }) => {
          return (
            <div>
              <Container>
                <Form>
                  <Card className="m-3">
                    <Row className="m-3">
                      <Col sm={6}>
                        <div>
                          <label>First Name</label>
                        </div>
                        <Field
                          name="first_name"
                          plceholder="First Name"
                          type="text"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required={true}
                          value={values.first_name ? values.first_name : ''}
                        />
                      </Col>
                      <Col sm={6}>
                        <div>
                          <label>Last Name</label>
                        </div>
                        <Field
                          name="last_name"
                          palceholder="Last Name"
                          type="text"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required={true}
                        />
                      </Col>
                      <Col sm={6}>
                        <div>
                          <label>Email</label>
                        </div>
                        <Field
                          name="email"
                          palceholder="Email"
                          type="text"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required={true}
                        />
                      </Col>
                      <Col sm={6}>
                        <div>
                          <label>Phone</label>
                        </div>
                        <Field
                          name="phone"
                          palceholder="Phone Number"
                          type="text"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required={true}
                        />
                      </Col>
                      <Col sm={6}>
                        <div>
                          <label>Address</label>
                        </div>
                        <Field
                          name="address"
                          palceholder="Address"
                          type="text"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required={true}
                        />
                      </Col>
                      <Col sm={6}>
                        <div>
                          <label>Description</label>
                        </div>
                        <Field
                          name="description"
                          palceholder="Description"
                          type="text"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required={true}
                        />
                      </Col>
                      <Button type="submit" className="m-3">
                        submit
                      </Button>
                    </Row>
                  </Card>
                </Form>
              </Container>
            </div>
          );
        }}
      </Formik>
    </>
  );
};
export default AddFormik;
