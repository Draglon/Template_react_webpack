import React, { Component } from 'react';
import { connect } from 'react-redux';
import { favoriteRequest as favoriteRequestAction } from '../../store/theMovieDB/favorite/actions';
import { getFavoriteMovie } from '../../store/theMovieDB/favorite/selectors';

import FavoritesComponent from './component';

class FavoritesContainer extends Component {
  componentDidMount() {
    const { favoriteRequest } = this.props;
    favoriteRequest({ page: 1 });
  }

  getPage = page => {
    const { favoriteRequest } = this.props;
    favoriteRequest({ page });
  };

  render() {
    return <FavoritesComponent {...this.props} page={this.getPage} />;
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
