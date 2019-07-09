import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteSessionRequest } from '../../store/theMovieDB/login/actions';
import { profileRequest as profileRequestAction } from '../../store/theMovieDB/profile/actions';

import { getProfileById } from '../../store/theMovieDB/profile/selectors';

import HeaderComponent from './component';

class HeaderContainer extends Component {
  componentDidMount() {
    const { profileRequest } = this.props;
    profileRequest();
  }

  render() {
    return <HeaderComponent {...this.props} />;
  }
}

const mapStateToProps = state => ({
  profile: getProfileById(state),
});

const mapDispatchToProps = {
  profileRequest: profileRequestAction,
  removeSessionId: deleteSessionRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderContainer);
