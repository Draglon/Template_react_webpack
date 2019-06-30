import { connect } from 'react-redux';
import { movieRequest } from '../../store/theMovieDB/movie/actions';

import MovieComponent from './component';

const mapStateToProps = ({ location }) => ({
  movieId: location.payload.id,
});

const mapDispatchToProps = {
  setMovie: movieRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieComponent);
