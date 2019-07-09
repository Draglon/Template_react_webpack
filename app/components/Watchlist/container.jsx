import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  watchlistRequest as watchlistRequestAction,
  addToWatchlistRequest as addToWatchlistRequestAction,
} from '../../store/theMovieDB/watchlist/actions';
import { getWatchlistById } from '../../store/theMovieDB/watchlist/selectors';

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
    const { addToWatchlistRequest } = this.props;
    return (
      <WatchlistComponent
        {...this.props}
        page={this.getPage}
        modalParams={{
          title: 'Do you want to delete movie from watchlist?',
          params: { watchlist: false },
          onConfirm: addToWatchlistRequest,
        }}
      />
    );
  }
}

const mapStateToProps = state => ({
  watchlist: getWatchlistById(state),
});

const mapDispatchToProps = {
  watchlistRequest: watchlistRequestAction,
  addToWatchlistRequest: addToWatchlistRequestAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WatchlistContainer);
