import { connect } from 'react-redux';
import { deleteSessionRequest } from '../../store/theMovieDB/login/actions';

import { getProfile } from '../../store/theMovieDB/account/selectors';

import WatchlistContainer from './component';

const mapStateToProps = state => ({
  profile: getProfile(state),
});

const mapDispatchToProps = {
  removeSessionId: deleteSessionRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WatchlistContainer);
