import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addToWatchlistRequest as addToWatchlistRequestAction } from '../../../../store/theMovieDB/watchlist/actions';

import WatchlistIconComponent from './component';

class WatchlistIconContainer extends Component {
  handleWatchlist = () => {
    const { addToWatchlistRequest, watchlist, movieId } = this.props;
    addToWatchlistRequest({ movieId, watchlist: !watchlist });
  };

  render() {
    return <WatchlistIconComponent {...this.props} handleWatchlist={this.handleWatchlist} />;
  }
}

WatchlistIconContainer.propTypes = {
  addToWatchlistRequest: PropTypes.func.isRequired,
  movieId: PropTypes.number.isRequired,
  watchlist: PropTypes.bool.isRequired,
};

const mapDispatchToProps = {
  addToWatchlistRequest: addToWatchlistRequestAction,
};

export default connect(
  null,
  mapDispatchToProps,
)(WatchlistIconContainer);
