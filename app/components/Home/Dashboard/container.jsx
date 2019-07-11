import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getSearchById } from '../../../store/theMovieDB/search/selectors';

import DashboardComponent from './component';

class DashboardContainer extends Component {
  render() {
    const { search } = this.props;
    return <DashboardComponent {...this.props} searchQuery={search.query} />;
  }
}

DashboardContainer.propTypes = {
  search: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  search: getSearchById(state),
});

export default connect(
  mapStateToProps,
  null,
)(DashboardContainer);
