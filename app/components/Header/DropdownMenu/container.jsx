import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteSessionRequest as deleteSessionRequestAction } from '../../../store/theMovieDB/login/actions';

import DropdownMenuComponent from './component';

class DropdownMenuContainer extends Component {
  render() {
    return <DropdownMenuComponent {...this.props} />;
  }
}

DropdownMenuContainer.propTypes = {
  deleteSessionRequest: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  deleteSessionRequest: deleteSessionRequestAction,
};

export default connect(
  null,
  mapDispatchToProps,
)(DropdownMenuContainer);
