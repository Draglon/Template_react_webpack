import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  favoriteRequest as favoriteRequestAction,
  addToFvoriteRequest as addToFvoriteRequestAction,
} from '../../store/theMovieDB/favorite/actions';
import { getFavoriteById } from '../../store/theMovieDB/favorite/selectors';

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
    const { addToFvoriteRequest } = this.props;
    return (
      <FavoritesComponent
        {...this.props}
        page={this.getPage}
        modalParams={{
          title: 'Do you want to delete movie from favorites?',
          params: { favorite: false },
          onConfirm: addToFvoriteRequest,
        }}
      />
    );
  }
}

FavoritesContainer.propTypes = {
  addToFvoriteRequest: PropTypes.func.isRequired,
  favoriteRequest: PropTypes.func.isRequired,
  favorites: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  favorites: getFavoriteById(state),
});

const mapDispatchToProps = {
  favoriteRequest: favoriteRequestAction,
  addToFvoriteRequest: addToFvoriteRequestAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FavoritesContainer);
