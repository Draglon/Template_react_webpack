import { connect } from 'react-redux';
import { CREATE_LIST_REQUEST } from '../../store/constants/list.constants';
import { getCreateList } from '../../store/selectors/theMovieDB';

import CreateList from './component';

const mapStateToProps = state => ({
  listId: getCreateList(state),
});

const mapDispatchToProps = dispatch => ({
  createList(payload) {
    dispatch({ type: CREATE_LIST_REQUEST, payload });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateList);
