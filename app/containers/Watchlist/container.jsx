import React, { Component } from 'react';
import { connect } from 'react-redux';
import { watchlistRequest as watchlistRequestAction } from '../../store/theMovieDB/watchlist/actions';
import { getWatchlistMovie } from '../../store/theMovieDB/watchlist/selectors';

import WatchlistComponent from './component';

class WatchlistContainer extends Component {
  componentDidMount() {
    const { watchlistRequest } = this.props;
    watchlistRequest({ page: 1 });
  }

  getPage = page => {
    const { watchlistRequest } = this.props;
    watchlistRequest({ page });
  };

  render() {
    return <WatchlistComponent {...this.props} page={this.getPage} />;
  }
}

const mapStateToProps = state => ({
  watchlist: getWatchlistMovie(state),
});

const mapDispatchToProps = {
  watchlistRequest: watchlistRequestAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WatchlistContainer);
