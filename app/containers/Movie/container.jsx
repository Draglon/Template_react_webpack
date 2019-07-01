import { connect } from 'react-redux';
import { movieRequest } from '../../store/theMovieDB/movie/actions';
import { getMovie } from '../../store/theMovieDB/movie/selectors';
import { creditsRequest } from '../../store/theMovieDB/movieCredits/actions';
import { getMovieCredits } from '../../store/theMovieDB/movieCredits/selectors';

import MovieComponent from './component';

const mapStateToProps = state => ({
  movie: getMovie(state),
  movieCredits: getMovieCredits(state),
});

const mapDispatchToProps = {
  setMovie: movieRequest,
  setMovieCredits: creditsRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieComponent);
