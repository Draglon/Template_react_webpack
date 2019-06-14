import { connect } from 'react-redux';

import Header from './component';
import { AUTH_ACCESS_REMOVE } from '../../store/constants/authentication.constants';

const mapStateToProps = () => ({
  isLogged: localStorage.getItem('session_id'),
});

const mapDispatchToProps = dispatch => ({
  removeSessionId(payload) {
    dispatch({ type: AUTH_ACCESS_REMOVE, payload });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
