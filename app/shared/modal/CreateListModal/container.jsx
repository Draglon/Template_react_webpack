import React, { Component } from 'react';
import { connect } from 'react-redux';

import CreateListModalComponent from './component';

class CreateListModalContainer extends Component {
  render() {
    return <CreateListModalComponent {...this.props} />;
  }
}

export default connect(
  null,
  null,
)(CreateListModalContainer);
