import { connect } from 'react-redux';
import { trendingRequest } from '../../store/theMovieDB/trending/actions';
import { getTrending } from '../../store/theMovieDB/trending/selectors';
import { searchRequest } from '../../store/theMovieDB/search/actions';
import { getSearch } from '../../store/theMovieDB/search/selectors';

import DashboardContainer from './component';

const mapStateToProps = state => ({
  trending: getTrending(state),
  search: getSearch(state),
});

const mapDispatchToProps = {
  searchRequest,
  trendingRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardContainer);
