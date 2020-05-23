import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './styles.scss';

import AuthWrapper from './../AuthWrapper';
import FormInput from './../forms/FormInput';
import Button from './../forms/Button';

import { auth } from './../../firebase/utils';

const EmailPassword = props => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const config = {
        url: 'http://localhost:3000/login'
      };

      await auth.sendPasswordResetEmail(email, config)
        .then(() => {
          props.history.push('/login');
        })
        .catch(() => {
          const err = ['Email not found. Please try again.'];
          setErrors(err);
        });

    } catch (err) {
      // console.log(err);
    }

  }

  const configAuthWrapper = {
    headline: 'Email Password'
  };

  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="formWrap">

        {errors.length > 0 && (
          <ul>
            {errors.map((e, index) => {
              return (
                <li key={index}>
                  {e}
                </li>
              );
            })}
          </ul>
        )}

        <form onSubmit={handleSubmit}>

          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            handleChange={e => setEmail(e.target.value)}
          />

          <Button type="submit">
            Email Password
          </Button>

        </form>

      </div>
    </AuthWrapper>
  );
}

export default withRouter(EmailPassword);
