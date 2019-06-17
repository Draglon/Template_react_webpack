import { connect } from 'react-redux';
import { getCreateList } from '../../store/theMovieDB/list/list.selectors';
import actions from '../../store/theMovieDB/list/list.actions';

import CreateList from './component';

const mapStateToProps = state => ({
  listId: getCreateList(state),
});

const mapDispatchToProps = dispatch => ({
  createList(payload) {
    dispatch({ type: actions.CREATE_LIST_REQUEST, payload });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateList);
