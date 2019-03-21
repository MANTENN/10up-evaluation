import React from 'react';
import { Formik } from 'formik';
import {
  Form, FormGroup, Input as baseInput, Button,
} from 'reactstrap';
import { Link as baseLink } from 'react-router-dom';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { H2 as baseH2, SuccessToast } from '..';

const Subscribe = () => (
  <Container>
    <H2>Join our newsletter</H2>
    <Formik
      validate={(values, props /* only available when using withFormik */) => {
        const errors = {};

        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }

        return errors;
      }}
      initialValues={{ email: '' }}
      onSubmit={({ email }, actions) => {
        toast(<SuccessToast email={email} />);
      }}
      render={({
        values: { email },
        handleBlur,
        handleChange,
        handleSubmit,
        errors,
      }) => (
        <Form inline onSubmit={handleSubmit}>
          <FormGroup>
            <Input
              id="email"
              placeholder="you@example.com"
              value={email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div class="invalid-feedback">
              {errors.email}
            </div>
            {/* {errors.email && <div id="feedback">{errors.email}</div>} */}
          </FormGroup>
          <Button type="submit" color="primary">
            Submit
          </Button>
        </Form>
      )}
    />
    <Link to="/about">Read more about our history</Link>
  </Container>
);

const Container = styled.div`
  padding: 2em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Input = styled(baseInput)`
  border-right: none !important;
`;
const H2 = styled(baseH2)`
  text-align: center;
  padding: 0.5em 0;
`;
const Link = styled(baseLink)`
  margin-top: 2em;
  text-decoration: underline;
  text-align: center;
`;

export default Subscribe;
