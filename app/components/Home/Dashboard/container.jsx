import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSearchById } from '../../../store/theMovieDB/search/selectors';

import DashboardComponent from './component';

class DashboardContainer extends Component {
  render() {
    const { search } = this.props;
    return <DashboardComponent {...this.props} searchQuery={search.query} />;
  }
}

const mapStateToProps = state => ({
  search: getSearchById(state),
});

export default connect(
  mapStateToProps,
  null,
)(DashboardContainer);
