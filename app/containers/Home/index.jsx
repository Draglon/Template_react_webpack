import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { MOVIE_REQUEST, SEARCH_MOVIE_REQUEST } from '../../store/constants/movie.constants';
import {
  AUTH_GUEST_SESSION_REQUEST,
  AUTH_TOKEN_REQUEST,
  AUTH_SESSION_REQUEST,
  AUTH_SESSION_WITH_LOGIN_REQUEST,
  AUTH_DELETE_SESSION_REQUEST,
} from '../../store/constants/authentication.constants';

import { getAuthToken } from '../../store/selectors/theMovieDB';

class Home extends Component {
  componentDidMount() {
    const {
      setMovie,
      setSearchMovie,
      setAuthGuestSession,
      setAuthToken,
      setAuthSession,
      setAuthSessionWithLogin,
      setAuthDeleteSession,
    } = this.props;

    setMovie(3);
    setSearchMovie({ query: 'Day', page: 1 });
    setAuthGuestSession();
    setAuthToken();
    // setAuthSession();
    // setAuthSessionWithLogin({ query: 'Day', page: 1 });
    // setAuthDeleteSession();
  }

  setSession(e) {
    e.preventDefault();
    const {
      accessToken: { request_token },
      setAuthSession,
      setAuthSessionWithLogin,
    } = this.props;

    setAuthSessionWithLogin({
      username: 'Draglon',
      password: 'draglon750',
      request_token,
    });
    setAuthSession({ request_token });
  }

  render() {
    return (
      <section className="section">
        <div className="wrapper">
          <h2 className="section__title">Home page</h2>

          <button
            type="button"
            className="btn btn-primary btn--small"
            onClick={e => this.setSession(e)}
          >
            set Auth Session
          </button>
        </div>
      </section>
    );
  }
}

Home.propTypes = {
  accessToken: PropTypes.object,
};

export default connect(
  state => ({
    accessToken: getAuthToken(state),
  }),
  dispatch => ({
    setMovie(payload) {
      dispatch({ type: MOVIE_REQUEST, payload });
    },
    setSearchMovie(payload) {
      dispatch({ type: SEARCH_MOVIE_REQUEST, payload });
    },
    setAuthGuestSession(payload) {
      dispatch({ type: AUTH_GUEST_SESSION_REQUEST, payload });
    },
    setAuthToken(payload) {
      dispatch({ type: AUTH_TOKEN_REQUEST, payload });
    },
    setAuthSession(payload) {
      dispatch({ type: AUTH_SESSION_REQUEST, payload });
    },
    setAuthSessionWithLogin(payload) {
      dispatch({ type: AUTH_SESSION_WITH_LOGIN_REQUEST, payload });
    },
    setAuthDeleteSession(payload) {
      dispatch({ type: AUTH_DELETE_SESSION_REQUEST, payload });
    },
  }),
)(Home);
