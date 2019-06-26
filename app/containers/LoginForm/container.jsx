import { connect } from 'react-redux';
import { createSessionRequest } from '../../store/theMovieDB/login/actions';

import LoginForm from './component';

const mapDispatchToProps = {
  setAccess: createSessionRequest,
};

export default connect(
  null,
  mapDispatchToProps,
)(LoginForm);
