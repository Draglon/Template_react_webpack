import { connect } from 'react-redux';
import { accessRemove } from '../../store/theMovieDB/auth/actions';

import Header from './component';

const mapDispatchToProps = {
  removeSessionId: accessRemove,
};

export default connect(
  null,
  mapDispatchToProps,
)(Header);
