import { connect } from 'react-redux';
// import { deleteSessionRequest } from '../../store/theMovieDB/trending/actions';
import { getTrending } from '../../store/theMovieDB/trending/selectors';

import Header from './component';

const mapStateToProps = state => ({
  trending: getTrending(state),
});

// const mapDispatchToProps = {
//   removeSessionId: deleteSessionRequest,
// };

export default connect(
  mapStateToProps,
  null,
  // mapDispatchToProps,
)(Header);
