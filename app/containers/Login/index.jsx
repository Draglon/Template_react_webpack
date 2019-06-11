import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAuthToken } from '../../store/selectors/theMovieDB';
import { AUTH_SESSION_WITH_LOGIN_REQUEST } from '../../store/constants/authentication.constants';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      // loginValid: false,
      // passwordValid: false,
      // formValid: false,
    };
  }

  handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { username, password } = this.state;
    const {
      accessToken: { request_token },
      setAuthSessionWithLogin,
    } = this.props;

    const request = {
      username,
      password,
      request_token,
    };
    setAuthSessionWithLogin(request);
  }

  render() {
    const { username, password } = this.state;
    return (
      <section className="section">
        <div className="wrapper">
          <h2 className="section__title">Login</h2>
          <form className="form" onSubmit={e => this.handleSubmit(e)}>
            <div className="form__field">
              <input
                type="text"
                name="username"
                className="form__field-input"
                placeholder="Login"
                value={username}
                onChange={e => this.handleChange(e)}
              />
            </div>

            <div className="form__field">
              <input
                type="password"
                name="password"
                className="form__field-input"
                value={password}
                placeholder="Password"
                onChange={e => this.handleChange(e)}
              />
            </div>

            <div className="form__btns">
              <button type="submit" className="btn btn-primary btn-small">
                Login
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default connect(
  state => ({
    accessToken: getAuthToken(state),
  }),
  dispatch => ({
    setAuthSessionWithLogin(payload) {
      dispatch({ type: AUTH_SESSION_WITH_LOGIN_REQUEST, payload });
    },
  }),
)(Login);
