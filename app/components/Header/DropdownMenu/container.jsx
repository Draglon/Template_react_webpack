import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteSessionRequest as deleteSessionRequestAction } from '../../../store/theMovieDB/login/actions';

import DropdownMenuComponent from './component';

class DropdownMenuContainer extends Component {
  render() {
    return <DropdownMenuComponent {...this.props} />;
  }
}

const mapDispatchToProps = {
  deleteSessionRequest: deleteSessionRequestAction,
};

export default connect(
  null,
  mapDispatchToProps,
)(DropdownMenuContainer);
