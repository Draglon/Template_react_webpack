import { connect } from 'react-redux';
import Home from './component';

import { getCreateList } from '../../store/theMovieDB/list/list.selectors';

const mapStateToProps = (state) => ({
  isLogged: localStorage.getItem('session_id'),
  listId: getCreateList(state),
});

export default connect(
  mapStateToProps,
  null,
)(Home);
