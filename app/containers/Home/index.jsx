import React, { Component } from 'react';
import { connect } from 'react-redux';

import { MOVIE_REQUEST } from '../../store/constants/movie.constants';

class Home extends Component {
  componentDidMount() {
    const { setMovie } = this.props;
    setMovie(3);
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
  }),
)(Home);
