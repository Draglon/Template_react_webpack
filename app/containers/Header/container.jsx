import { connect } from 'react-redux';
import { accessRemove } from '../../store/theMovieDB/auth/actions';

import Header from './component';

const mapStateToProps = () => ({
  isLogged: localStorage.getItem('session_id'),
});

const mapDispatchToProps = dispatch => ({
  removeSessionId() {
    dispatch(accessRemove());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
