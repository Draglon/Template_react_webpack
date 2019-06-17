import { connect } from 'react-redux';
import { AUTH_ACCESS_REQUEST } from '../../store/theMovieDB/auth/access.actions';

import LoginForm from './component';

const mapDispatchToProps = dispatch => ({
  setAccess(payload) {
    dispatch({ type: AUTH_ACCESS_REQUEST, payload });
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(LoginForm);
