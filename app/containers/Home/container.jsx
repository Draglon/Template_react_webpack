import { connect } from 'react-redux';
import { CREATE_LIST_REQUEST } from '../../store/constants/list.constants';

import Home from './component';

const mapDispatchToProps = dispatch => ({
  createList(payload) {
    const session_id = sessionStorage.getItem('session_id');
    dispatch({ type: CREATE_LIST_REQUEST, payload: { session_id, payload } });
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(Home);
