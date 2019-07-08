import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'antd';
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

  showDeleteMovieModal = movieId => {
    const { addToWatchlistRequest } = this.props;
    Modal.confirm({
      title: 'Do you want to delete movie from watchlist?',
      onOk() {
        addToWatchlistRequest({ movieId, watchlist: false });
      },
    });
  };

  getPage = page => {
    const { watchlistRequest } = this.props;
    watchlistRequest({ page });
  };

  render() {
    return (
      <WatchlistComponent
        {...this.props}
        page={this.getPage}
        showDeleteMovieModal={this.showDeleteMovieModal}
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
