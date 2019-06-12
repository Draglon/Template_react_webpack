import { connect } from 'react-redux';
import { AUTH_ACCESS_REQUEST } from '../../store/constants/authentication.constants';

import Login from './component';

const mapDispatchToProps = dispatch => ({
  setAccess(payload) {
    dispatch({ type: AUTH_ACCESS_REQUEST, payload });
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(Login);
