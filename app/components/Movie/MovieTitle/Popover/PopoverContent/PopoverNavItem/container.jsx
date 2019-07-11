import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addMovieListRequest as addMovieListRequestAction } from '../../../../../../store/theMovieDB/myLists/actions';

import PopoverNavItemComponent from './component';

class PopoverNavItemContainer extends Component {
  onClick = () => {
    const { addMovieListRequest, list, movieId, closePopover } = this.props;
    addMovieListRequest({ listId: list.id, movieId });
    closePopover();
  };

  render() {
    return <PopoverNavItemComponent {...this.props} onClick={this.onClick} />;
  }
}

PopoverNavItemContainer.defaultProps = {
  closePopover: null,
};

PopoverNavItemContainer.propTypes = {
  addMovieListRequest: PropTypes.func.isRequired,
  closePopover: PropTypes.func,
  list: PropTypes.object.isRequired,
  movieId: PropTypes.number.isRequired,
};

const mapDispatchToProps = {
  addMovieListRequest: addMovieListRequestAction,
};

export default connect(
  null,
  mapDispatchToProps,
)(PopoverNavItemContainer);
