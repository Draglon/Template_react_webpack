import React, { Component } from 'react';
import { connect } from 'react-redux';

import { AUTH_ACCESS_REQUEST } from '../../store/constants/authentication.constants';

import { getAuthAccess } from '../../store/selectors/theMovieDB';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
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
    const { setAccess } = this.props;

    setAccess({ username, password });
  }

  render() {
    const { username, password } = this.state;
    const { authAccess } = this.props;
    if (authAccess) {console.log('authAccess', authAccess)}

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
    authAccess: getAuthAccess(state),
  }),
  dispatch => ({
    setAccess(payload) {
      dispatch({ type: AUTH_ACCESS_REQUEST, payload });
    },
  }),
)(Login);
