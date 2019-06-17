import { connect } from 'react-redux';
import { accessRequest } from '../../store/theMovieDB/auth/access.actions';

import LoginForm from './component';

const mapDispatchToProps = dispatch => ({
  setAccess(payload) {
    dispatch(accessRequest(payload));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(LoginForm);
