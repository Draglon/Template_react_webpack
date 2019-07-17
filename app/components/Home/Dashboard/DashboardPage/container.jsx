import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { searchRequest as searchRequestAction } from '../../../../store/theMovieDB/search/actions';
import { trendingRequest as trendingRequestAction } from '../../../../store/theMovieDB/trending/actions';
import { getTrending } from '../../../../store/theMovieDB/trending/selectors';

import DashboardPageComponent from './component';

class DashboardPageContainer extends Component {
  componentDidMount() {
    const { trendingRequest } = this.props;
    trendingRequest({ page: 1 });
  }

  onSearch = value => {
    const { searchRequest, trendingRequest } = this.props;
    searchRequest({ query: value, page: 1 });
    trendingRequest({ page: 1 });
  };

  getPage = page => {
    const { trendingRequest } = this.props;
    trendingRequest({ page });
  };

  render() {
    return <DashboardPageComponent {...this.props} onSearch={this.onSearch} page={this.getPage} />;
  }
}

DashboardPageContainer.propTypes = {
  searchRequest: PropTypes.func.isRequired,
  trendingRequest: PropTypes.func.isRequired,
  trending: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  trending: getTrending(state),
});

const mapDispatchToProps = {
  searchRequest: searchRequestAction,
  trendingRequest: trendingRequestAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardPageContainer);
