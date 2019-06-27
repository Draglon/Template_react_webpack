import { connect } from 'react-redux';
import { createSessionRequest } from '../../store/theMovieDB/login/actions';
import { loginError } from '../../store/theMovieDB/login/selectors';

import LoginFormContainer from './component';

const mapStateToProps = state => ({
  loginError: loginError(state),
});

const mapDispatchToProps = {
  setAccess: createSessionRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginFormContainer);
