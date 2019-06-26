import { connect } from 'react-redux';
import { deleteSessionRequest } from '../../store/theMovieDB/login/actions';
import { getSessionId } from '../../store/theMovieDB/login/selectors';

import Home from './component';

const mapStateToProps = state => ({
  isLogged: getSessionId(state),
});

const mapDispatchToProps = {
  removeSessionId: deleteSessionRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
