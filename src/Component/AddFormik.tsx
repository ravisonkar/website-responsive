import React from 'react';
import {
  FormikActions,
  Formik,
  Form,
  Field,
  FormikValues,
  getIn,
} from 'formik';
import { Row, Col, Card, Container, Button } from 'react-bootstrap';
import customFormGroup from './shared/CustomFormGroup/CustomFormGroup';
import * as Yup from 'yup';
import { checkDisableButton } from '../shared/util';
import { IUser } from '../classes/IUser';
import customSelect from './shared/CustomSelect/CustomSelect';
import { GENDER } from '../shared/constant';
import { IOption } from '../classes/IOption';

export type UserEventHandler = (
  userData: IUser,
  actions: FormikActions<FormikValues>
) => void;

interface IAddProps {
  userData: IUser;
  submitHandler: UserEventHandler;
}
const validationSchema = Yup.object().shape({
  first_name: Yup.string().trim().required('First Name is required'),
  last_name: Yup.string().trim().required('Last Name is required'),
  email: Yup.string().trim().required('Email is required'),
  phone: Yup.string().trim().required('Phone Number is required'),
  address: Yup.string().trim().required('Address is required'),
  description: Yup.string().trim().required('Description Name is required'),
});

const AddFormik = ({ userData, submitHandler }: IAddProps) => {
  return (
    <>
      <Formik
        initialValues={userData}
        onSubmit={submitHandler}
        enableReinitialize
        validationSchema={validationSchema}
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
                    <div className="card-header">
                      <h3 className="card-title">Enter the details</h3>
                    </div>
                    <div className="card-body">
                      <Row>
                        <Col sm={6}>
                          <Field
                            name="first_name"
                            placeholder="First Name"
                            type="text"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required={true}
                            value={values.first_name ? values.first_name : ''}
                            component={customFormGroup}
                            isError={
                              getIn(errors, 'first_name') &&
                              getIn(touched, 'first_name')
                            }
                            errorText={
                              getIn(errors, 'first_name')
                                ? getIn(errors, 'first_name')
                                : ''
                            }
                          />
                        </Col>
                        <Col sm={6}>
                          <Field
                            name="last_name"
                            placeholder="Last Name"
                            type="text"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required={true}
                            component={customFormGroup}
                            isError={
                              getIn(errors, 'last_name') &&
                              getIn(touched, 'last_name')
                            }
                            errorText={
                              getIn(errors, 'last_name')
                                ? getIn(errors, 'last_name')
                                : ''
                            }
                          />
                        </Col>
                        <Col sm={6}>
                          <Field
                            name="gender"
                            placeholder="Gender"
                            options={GENDER.map((gender) => {
                              return {
                                label: gender.name,
                                value: gender.id,
                              };
                            })}
                            onChange={(options: IOption) => {
                              const value = {
                                name: options.label,
                                id: options.value,
                              };
                              setFieldValue('gender', value);
                            }}
                            component={customSelect}
                            onBlur={handleBlur}
                            required={true}
                            isError={
                              getIn(errors, 'email') && getIn(touched, 'email')
                            }
                            errorText={
                              getIn(errors, 'email')
                                ? getIn(errors, 'email')
                                : ''
                            }
                          />
                        </Col>
                        <Col sm={6}>
                          <Field
                            name="phone"
                            placeholder="Phone Number"
                            type="text"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required={true}
                            component={customFormGroup}
                            isError={
                              getIn(errors, 'phone') && getIn(touched, 'phone')
                            }
                            errorText={
                              getIn(errors, 'phone')
                                ? getIn(errors, 'phone')
                                : ''
                            }
                          />
                        </Col>
                        <Col sm={6}>
                          <Field
                            name="address"
                            placeholder="Address"
                            type="text"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required={true}
                            component={customFormGroup}
                            isError={
                              getIn(errors, 'address') &&
                              getIn(touched, 'address')
                            }
                            errorText={
                              getIn(errors, 'address')
                                ? getIn(errors, 'address')
                                : ''
                            }
                          />
                        </Col>
                        <Col sm={6}>
                          <Field
                            name="description"
                            placeholder="Description"
                            type="text"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required={true}
                            component={customFormGroup}
                            isError={
                              getIn(errors, 'description') &&
                              getIn(touched, 'description')
                            }
                            errorText={
                              getIn(errors, 'description')
                                ? getIn(errors, 'description')
                                : ''
                            }
                          />
                        </Col>
                        <Button
                          type="submit"
                          className="m-3"
                          disabled={
                            checkDisableButton(dirty, isValid) || isSubmitting
                          }
                        >
                          submit
                        </Button>
                      </Row>
                    </div>
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
