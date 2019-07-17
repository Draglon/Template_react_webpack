import { connect } from 'react-redux';
import { getSearchQuery } from '../../../store/theMovieDB/search/selectors';

import DashboardComponent from './component';

const mapStateToProps = state => ({
  searchQuery: getSearchQuery(state),
});

export default connect(mapStateToProps)(DashboardComponent);
