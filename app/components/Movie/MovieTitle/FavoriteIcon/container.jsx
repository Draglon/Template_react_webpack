import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addToFvoriteRequest as addToFvoriteRequestAction } from '../../../../store/theMovieDB/favorite/actions';

import FavoriteIconComponent from './component';

class FavoriteIconContainer extends Component {
  handleFavorite = () => {
    const { addToFvoriteRequest, favorite, movieId } = this.props;
    addToFvoriteRequest({ movieId, favorite: !favorite });
  };

  render() {
    return <FavoriteIconComponent {...this.props} handleFavorite={this.handleFavorite} />;
  }
}

FavoriteIconContainer.propTypes = {
  addToFvoriteRequest: PropTypes.func.isRequired,
  movieId: PropTypes.number.isRequired,
  favorite: PropTypes.bool.isRequired,
};

const mapDispatchToProps = {
  addToFvoriteRequest: addToFvoriteRequestAction,
};

export default connect(
  null,
  mapDispatchToProps,
)(FavoriteIconContainer);
