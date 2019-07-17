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

MovieContainer.propTypes = {
  movieRequest: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired,
  genres: PropTypes.array.isRequired,
  cast: PropTypes.array.isRequired,
  crew: PropTypes.array.isRequired,
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
