import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { searchRequest as searchRequestAction } from '../../../../store/theMovieDB/search/actions';
import { trendingRequest as trendingRequestAction } from '../../../../store/theMovieDB/trending/actions';
import { getTrending } from '../../../../store/theMovieDB/trending/selectors';

import DashboardComponent from './component';

class DashboardContainer extends Component {
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
    return <DashboardComponent {...this.props} onSearch={this.onSearch} page={this.getPage} />;
  }
}

DashboardContainer.propTypes = {
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
)(DashboardContainer);
