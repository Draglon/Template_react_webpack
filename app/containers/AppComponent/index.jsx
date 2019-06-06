import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';

import * as components from './Components.jsx';

class AppComponent extends Component {
  render() {
    const { page, translate } = this.props;
    const Content = components[page];

    console.log(page);

    return (
      <main className="main page">
        <Content translate={translate(page.toLowerCase())} />
      </main>
    );
  }
}

export default connect(
  state => ({
    page: state.page,
  }),
  null,
)(withTranslate(AppComponent));
