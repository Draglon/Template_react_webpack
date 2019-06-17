import { connect } from 'react-redux';
import { CREATE_LIST_REQUEST } from '../../store/theMovieDB/list/list.actions';
import { getCreateList } from '../../store/theMovieDB/list/list.selectors';

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
