import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteSessionRequest } from '../../store/theMovieDB/login/actions';
import { profileRequest } from '../../store/theMovieDB/account/actions';

import { getProfile, getProfileByID } from '../../store/theMovieDB/account/selectors';

import HeaderComponent from './component';

class HeaderContainer extends Component {
  componentDidMount() {
    const { setProfile } = this.props;
    setProfile();
  }

  render() {
    return <HeaderComponent {...this.props} />;
  }
}

const mapStateToProps = state => ({
  profile: getProfile(state),
});

const mapDispatchToProps = {
  setProfile: profileRequest,
  removeSessionId: deleteSessionRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderContainer);
