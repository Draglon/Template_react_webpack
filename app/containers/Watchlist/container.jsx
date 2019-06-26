import { connect } from 'react-redux';
import { deleteSessionRequest } from '../../store/theMovieDB/auth/actions';

import { getProfile } from '../../store/theMovieDB/account/selectors';

import Watchlist from './component';

const mapStateToProps = state => ({
  profile: getProfile(state),
});

const mapDispatchToProps = {
  removeSessionId: deleteSessionRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Watchlist);
