import { connect } from 'react-redux';
import { getSessionId } from '../../store/theMovieDB/login/selectors';

import AppComponent from './component';

const mapStateToProps = state => ({
  sessionId: getSessionId(state),
});

export default connect(mapStateToProps)(AppComponent);
