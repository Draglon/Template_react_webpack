import { connect } from 'react-redux';
import { createListRequest } from '../../store/theMovieDB/list/actions';

import CreateListContainer from './component';

const mapDispatchToProps = {
  createList: createListRequest,
};

export default connect(
  null,
  mapDispatchToProps,
)(CreateListContainer);
