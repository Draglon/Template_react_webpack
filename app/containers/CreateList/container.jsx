import { connect } from 'react-redux';
// import { getCreateList } from '../../store/theMovieDB/list/selectors';
import { createListRequest } from '../../store/theMovieDB/list/actions';

import CreateList from './component';

// const mapStateToProps = state => ({
//   listId: getCreateList(state),
// });

const mapDispatchToProps = {
  createList: createListRequest,
};

export default connect(
  null,
  mapDispatchToProps,
)(CreateList);
