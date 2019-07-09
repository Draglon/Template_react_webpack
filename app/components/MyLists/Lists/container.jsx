import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListsComponent from './component';

class ListsContainer extends Component {
  showModalDelete = () => {
    const { } = this.props;
  };

  render() {
    return <ListsComponent {...this.props} showModalDelete={this.showModalDelete} />;
  }
}

export default connect(
  null,
  null,
)(ListsContainer);
