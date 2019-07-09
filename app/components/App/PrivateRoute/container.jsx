import { connect } from 'react-redux';
import { getSessionId } from '../../../store/theMovieDB/login/selectors';

import PrivateRouteContainer from './component';

const mapStateToProps = state => ({
  isLogged: getSessionId(state),
});

export default connect(
  mapStateToProps,
  null,
)(PrivateRouteContainer);
