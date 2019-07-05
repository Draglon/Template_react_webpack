import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFavoriteMovie } from '../../store/theMovieDB/favorite/selectors';
import { favoriteRequest as favoriteRequestAction } from '../../store/theMovieDB/favorite/actions';

import FavoritesComponent from './component';

class FavoritesContainer extends Component {
  componentDidMount() {
    const { favoriteRequest } = this.props;
    favoriteRequest();
  }

  render() {
    console.log(favorites);
    return <FavoritesComponent />;
  }
}

const mapStateToProps = state => ({
  favorites: getFavoriteMovie(state),
});

const mapDispatchToProps = {
  favoriteRequest: favoriteRequestAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FavoritesContainer);
