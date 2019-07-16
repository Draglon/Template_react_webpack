import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getSessionId } from '../../../store/theMovieDB/login/selectors';

import PrivateRouteComponent from './component';

const mapStateToProps = state => ({
  isLogged: getSessionId(state),
});

export default withRouter(connect(mapStateToProps)(PrivateRouteComponent));
