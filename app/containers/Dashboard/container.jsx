import React, { Component } from 'react';
import { connect } from 'react-redux';
import { trendingRequest as trendingRequestAction } from '../../store/theMovieDB/trending/actions';
import { getTrending } from '../../store/theMovieDB/trending/selectors';
import { searchRequest } from '../../store/theMovieDB/search/actions';
import { getSearch } from '../../store/theMovieDB/search/selectors';

import DashboardComponent from './component';

class DashboardContainer extends Component {
  componentDidMount() {
    const { trendingRequest } = this.props;
    trendingRequest({ page: 1 });
  }

  render() {
    return <DashboardComponent {...this.props} />;
  }
}

const mapStateToProps = state => ({
  trending: getTrending(state),
  search: getSearch(state),
});

const mapDispatchToProps = {
  searchRequest,
  trendingRequest: trendingRequestAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardContainer);
