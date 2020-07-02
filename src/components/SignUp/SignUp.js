import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../actions/user_actions';

import './SignUp.css';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';

const SignUp = ({ displaySignUp }) => {
  const [submitting, setSubmitting] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className='signup-container'>
      <div className='signup-top'>
        <div className='logo'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='40'
            height='40'
            viewBox='0 0 24 24'
          >
            <path d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.436 11.84c-1.22 2.608-4.167 6.16-6.03 6.16-1.837 0-2.103-3.916-3.106-6.522-.492-1.282-.81-.988-1.734-.34l-.566-.728c1.35-1.186 2.698-2.563 3.529-2.64.933-.09 1.508.548 1.724 1.916.284 1.797.681 4.585 1.374 4.585.539 0 1.871-2.212 1.938-3.003.121-1.159-.852-1.193-1.695-.832 1.336-4.377 6.897-3.571 4.566 1.404z' />
          </svg>
        </div>
        <h1>SIGN UP</h1>
      </div>
      <div className='signup-main'>
        <Formik
          initialValues={{
            email: '',
            password: '',
            lastName: '',
            firstName: '',
            mobileNumber: '',
            passwordConfirm: '',
          }}
          validate={(values) => {
            let errors = {};
            if (!values.lastName) {
              errors.lastName = 'Sorry! The last name is required!';
            }
            if (!values.firstName) {
              errors.firstName = 'Sorry! The first name is required!';
            }
            if (!values.mobileNumber) {
              errors.mobileNumber = 'Sorry! The mobile number is required!';
            }
            if (!values.email) {
              errors.email = 'Sorry! The email is required!';
            }
            if (!values.passwordConfirm) {
              errors.passwordConfirm =
                'Sorry! The password confirmation is required!';
            }
            if (!values.password) {
              errors.password = 'Sorry! The password is required!';
            }
            return errors;
          }}
          onSubmit={(values, { resetForm }) => {
            const dataToSubmit = {
              email: values.email,
              password: values.password,
              passwordConfirm: values.passwordConfirm,
              firstName: values.firstName,
              lastName: values.lastName,
              mobileNumber: values.mobileNumber,
            };
            setSubmitting(true);
            dispatch(registerUser(dataToSubmit))
              .then((res) => {
                const {
                  payload: { data, token },
                } = res;
                const { firstName, lastName } = data.user;
                localStorage.setItem('token', token);
                localStorage.setItem('name', `${firstName} ${lastName}`);
                resetForm();
                setSubmitting(false);
                displaySignUp();
              })
              .catch((err) => console.log(err));
            setTimeout(() => {
              window.location.href = '/';
            }, 2000);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <div className='form-group'>
                <label>Last name</label>
                <input
                  type='text'
                  className='form-control'
                  name='lastName'
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              {errors.lastName && touched.lastName ? (
                <div style={{ color: 'red' }}>{errors.lastName}</div>
              ) : null}
              <div className='form-group'>
                <label>First name</label>
                <input
                  type='text'
                  className='form-control'
                  name='firstName'
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              {errors.firstName && touched.firstName ? (
                <div style={{ color: 'red' }}>{errors.firstName}</div>
              ) : null}
              <div className='form-group'>
                <label>Phone</label>
                <input
                  type='text'
                  className='form-control'
                  name='mobileNumber'
                  value={values.mobileNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              {errors.mobileNumber && touched.mobileNumber ? (
                <div style={{ color: 'red' }}>{errors.mobileNumber}</div>
              ) : null}
              <div className='form-group'>
                <label>Email</label>
                <input
                  type='text'
                  className='form-control'
                  name='email'
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              {errors.email && touched.email ? (
                <div style={{ color: 'red' }}>{errors.email}</div>
              ) : null}
              <div className='form-group'>
                <label>Password</label>
                <input
                  type='password'
                  className='form-control'
                  name='password'
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              {errors.password && touched.password ? (
                <div style={{ color: 'red' }}>{errors.password}</div>
              ) : null}
              <div className='form-group'>
                <label>Password2</label>
                <input
                  type='password'
                  className='form-control'
                  name='passwordConfirm'
                  value={values.passwordConfirm}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              {errors.passwordConfirm && touched.passwordConfirm ? (
                <div style={{ color: 'red' }}>{errors.passwordConfirm}</div>
              ) : null}
              <div className='extra_link'>
                <input type='checkbox' />
                <span>
                  I have read and agree to the terms of use of this website.
                </span>
              </div>
              <div className='btn-container'>
                <button type='submit' disabled={submitting}>
                  SIGN IN
                </button>
                <button className='cancel'>Cancel</button>
              </div>
              <div className='social-signup'>
                <Link to='/google'>Log in with Google</Link>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
