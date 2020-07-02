import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../actions/user_actions';

import './Login.css';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';

const Login = ({ displayLogIn }) => {
  const [submitting, setSubmitting] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className='login-container'>
      <div className='login-top'>
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
        <h1>SIGN IN</h1>
      </div>
      <div className='login-main'>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={(values) => {
            let errors = {};

            if (!values.email) {
              errors.email = 'Sorry! The email is required!';
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
            };
            setSubmitting(true);
            dispatch(loginUser(dataToSubmit))
              .then((res) => {
                const {
                  payload: { data, token },
                } = res;
                const { firstName } = data.user;
                localStorage.setItem('token', token);
                localStorage.setItem('name', `${firstName}`);
                resetForm();
                setSubmitting(false);
                displayLogIn();
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
              <div className='extra_link'>
                <Link to='/signup'>Create a New Account</Link>
                <Link to='/resetPassword'>Forgot Password</Link>
              </div>
              <div className='btn-container'>
                <button type='submit' disabled={submitting}>
                  SIGN IN
                </button>
                <button className='cancel'>Cancel</button>
              </div>
              <div className='social-login'>
                <Link to='/google'>Log in with Google</Link>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
