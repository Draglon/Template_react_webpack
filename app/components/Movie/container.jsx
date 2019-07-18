import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { movieRequest as movieRequestAction } from '../../store/theMovieDB/movie/actions';

import {
  getMovieById,
  getGenresById,
  getCastById,
  getCrewById,
} from '../../store/theMovieDB/movie/selectors';

import MovieComponent from './component';

class MovieContainer extends Component {
  componentDidMount() {
    const {
      movieRequest,
      match: {
        params: { id },
      },
    } = this.props;
    movieRequest({ movieId: id });
  }

  render() {
    return <MovieComponent {...this.props} />;
  }
}

MovieContainer.defaultTypes = {
  movie: null,
  genres: [],
  cast: [],
  crew: [],
};

MovieContainer.propTypes = {
  movieRequest: PropTypes.func.isRequired,
  movie: PropTypes.object,
  genres: PropTypes.array,
  cast: PropTypes.array,
  crew: PropTypes.array,
};

const mapStateToProps = (
  state,
  {
    match: {
      params: { id },
    },
  },
) => ({
  movie: getMovieById(state, id),
  genres: getGenresById(state, id),
  cast: getCastById(state, id),
  crew: getCrewById(state, id),
});

const mapDispatchToProps = {
  movieRequest: movieRequestAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieContainer);
