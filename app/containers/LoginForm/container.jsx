import { connect } from 'react-redux';
import { accessRequest } from '../../store/theMovieDB/auth/access.actions';

import LoginForm from './component';

const mapDispatchToProps = {
  setAccess: accessRequest,
};

export default connect(
  null,
  mapDispatchToProps,
)(LoginForm);
