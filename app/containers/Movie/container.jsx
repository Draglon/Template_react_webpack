import React, { Component } from 'react';
import { connect } from 'react-redux';
import { movieRequest } from '../../store/theMovieDB/movie/actions';
import { addToFvoriteRequest } from '../../store/theMovieDB/favorite/actions';
import { addToWatchlistRequest } from '../../store/theMovieDB/watchlist/actions';

import {
  getMovieById,
  getGenresById,
  getCastById,
  getCrewById,
} from '../../store/theMovieDB/movie/selectors';

import MovieComponent from './component';

class MovieContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // modalVisible: false,
      // popoverVisible: false,
      bookmarked: false,
      watchlist: false,
    };

    // this.handleVisiblePopover = visible => {
    //   this.setState({ popoverVisible: visible });
    // };

    // this.showModal = () => {
    //   this.setState({ modalVisible: true });
    // };

    // this.hideModal = () => {
    //   this.setState({ modalVisible: false });
    // };

    this.handleWatchlist = movieId => {
      const { watchlist } = this.state;
      const { addWatchlist } = this.props;
      this.setState(state => ({ watchlist: !state.watchlist }));
      addWatchlist({ movieId, watchlist: !watchlist });
    };

    this.handleBookmark = movieId => {
      const { bookmarked } = this.state;
      const { addFavorite } = this.props;
      this.setState(state => ({ bookmarked: !state.bookmarked }));
      addFavorite({ movieId, favorite: !bookmarked });
    };
  }

  componentDidMount() {
    const {
      setMovie,
      match: {
        params: { id },
      },
    } = this.props;
    setMovie({ id });
  }

  render() {
    const { bookmarked, watchlist } = this.state;
    return (
      <MovieComponent
        {...this.props}
        handleWatchlist={this.handleWatchlist}
        watchlist={watchlist}
        handleBookmark={this.handleBookmark}
        bookmarked={bookmarked}
      />
    );
  }
}

const mapStateToProps = (
  state,
  {
    match: {
      params: { id },
    },
  },
) => ({
  movie: getMovieById(state, id),
  genres: getGenresById(state, id),
  cast: getCastById(state, id),
  crew: getCrewById(state, id),
});

const mapDispatchToProps = {
  setMovie: movieRequest,
  addFavorite: addToFvoriteRequest,
  addWatchlist: addToWatchlistRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieContainer);
