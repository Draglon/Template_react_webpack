import { connect } from 'react-redux';
import { movieRequest } from '../../store/theMovieDB/movie/actions';
import { getMovie } from '../../store/theMovieDB/movie/selectors';

import MovieComponent from './component';

const mapStateToProps = state => ({
  movie: getMovie(state),
});

const mapDispatchToProps = {
  setMovie: movieRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieComponent);
