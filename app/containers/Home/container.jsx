import { connect } from 'react-redux';
import { accessRemove } from '../../store/theMovieDB/auth/actions';
import { getAuthAccess } from '../../store/theMovieDB/auth/selectors';

import Home from './component';

const mapStateToProps = state => ({
  isLogged: getAuthAccess(state),
});

const mapDispatchToProps = {
  removeSessionId: accessRemove,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
