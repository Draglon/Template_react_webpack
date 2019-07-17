import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  favoriteRequest as favoriteRequestAction,
  addToFavoriteRequest as addToFavoriteRequestAction,
} from '../../store/theMovieDB/favorite/actions';
import { getFavorite } from '../../store/theMovieDB/favorite/selectors';

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
    const { addToFavoriteRequest } = this.props;
    return (
      <FavoritesComponent
        {...this.props}
        page={this.getPage}
        modalParams={{
          title: 'Do you want to delete movie from favorites?',
          params: { favorite: false },
          onConfirm: addToFavoriteRequest,
        }}
      />
    );
  }
}

FavoritesContainer.propTypes = {
  addToFavoriteRequest: PropTypes.func.isRequired,
  favoriteRequest: PropTypes.func.isRequired,
  favorites: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  favorites: getFavorite(state),
});

const mapDispatchToProps = {
  favoriteRequest: favoriteRequestAction,
  addToFavoriteRequest: addToFavoriteRequestAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FavoritesContainer);
