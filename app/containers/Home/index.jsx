import React, { Component } from 'react';
import { connect } from 'react-redux';

import { MOVIE_REQUEST, SEARCH_MOVIE_REQUEST } from '../../store/constants/movie.constants';
import {
  AUTH_GUEST_SESSION_REQUEST,
  AUTH_TOKEN_REQUEST,
} from '../../store/constants/authentication.constants';

class Home extends Component {
  componentDidMount() {
    const { setMovie, setSearchMovie, setAuthGuestSession, setAuthToken } = this.props;
    setMovie(3);
    setSearchMovie({ query: 'Day', page: 1 });
    setAuthGuestSession();
    setAuthToken();
  }

  render() {
    return (
      <section className="section">
        <div className="wrapper">
          <h2 className="section__title">Home page</h2>
        </div>
      </section>
    );
  }
}

export default connect(
  null,
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
  }),
)(Home);
