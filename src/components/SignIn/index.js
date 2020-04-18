import React, { Component } from 'react';
import './styles.scss';
import Buttons from './../forms/Button';
import { signInWithGoogle } from './../../firebase/utils';

class SignIn extends Component {

  handleSubmit = async e => {
    e.preventDefault();
  }

  render() {
    return (
      <div className="signin">
        <div className="wrap">
          <h2>
            LogIn
          </h2>

          <div className="formWrap">
            <form onSubmit={this.handleSubmit}>
              <div className="socialSignin">
                <div className="row">
                  <Buttons onClick={signInWithGoogle}>
                    Sign in with Google
                  </Buttons>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;