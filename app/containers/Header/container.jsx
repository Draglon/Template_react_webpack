import { connect } from 'react-redux';
import { accessRemove } from '../../store/theMovieDB/auth/access.actions';

import Header from './component';

const mapStateToProps = () => ({
  isLogged: localStorage.getItem('session_id'),
});

const mapDispatchToProps = dispatch => ({
  removeSessionId(payload) {
    dispatch(accessRemove(payload));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
