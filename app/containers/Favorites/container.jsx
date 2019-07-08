import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'antd';
import {
  favoriteRequest as favoriteRequestAction,
  addToFvoriteRequest as addToFvoriteRequestAction,
} from '../../store/theMovieDB/favorite/actions';
import { getFavoriteMovie } from '../../store/theMovieDB/favorite/selectors';

import FavoritesComponent from './component';

class FavoritesContainer extends Component {
  componentDidMount() {
    const { favoriteRequest } = this.props;
    favoriteRequest({ page: 1 });
  }

  showDeleteMovieModal = movieId => {
    const { addToFvoriteRequest } = this.props;
    Modal.confirm({
      title: 'Do you want to delete movie from favorites?',
      onOk() {
        addToFvoriteRequest({ movieId, watchlist: false });
      },
      onCancel() {},
    });
  };

  getPage = page => {
    const { favoriteRequest } = this.props;
    favoriteRequest({ page });
  };

  render() {
    return (
      <FavoritesComponent
        {...this.props}
        page={this.getPage}
        showDeleteMovieModal={this.showDeleteMovieModal}
      />
    );
  }
}

const mapStateToProps = state => ({
  favorites: getFavoriteMovie(state),
});

const mapDispatchToProps = {
  favoriteRequest: favoriteRequestAction,
  addToFvoriteRequest: addToFvoriteRequestAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FavoritesContainer);
