import React from 'react';
import { Formik } from 'formik';
import "./LoginComponent.css";


const Login = () => (
  <div>
    <h1>Login Form</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
          let password='12345';
        const errors = {};
        if (!values.email) {
          errors.email = 'Email id is required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid Email address';
        }
        if(!values.password){
            errors.password="Password is required"
        }else if(password!=values.password){
            errors.password="Enter valid credentials"
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          //alert(JSON.stringify(values, null, 2));
          //setSubmitting(false);
          console.log(values);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
            <label>Email</label> <br/>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          /> 
         
          {errors.email && touched.email && errors.email}

          <br/>
          <label>Password</label><br/>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
         
          {errors.password && touched.password && errors.password}  <br/>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Login;