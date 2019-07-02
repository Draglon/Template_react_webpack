import React, { Component } from 'react';
import { connect } from 'react-redux';
import { movieRequest } from '../../store/theMovieDB/movie/actions';
import { getMovie } from '../../store/theMovieDB/movie/selectors';

import MovieComponent from './component';

class MovieContainer extends Component {
  componentDidMount() {
    const {
      setMovie,
      match: {
        params: { id },
      },
    } = this.props;
    setMovie({ id });
  }

  render() {
    return <MovieComponent {...this.props} />;
  }
}

const mapStateToProps = state => ({
  movie: getMovie(state),
});

const mapDispatchToProps = {
  setMovie: movieRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieContainer);
