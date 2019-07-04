import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteSessionRequest } from '../../store/theMovieDB/login/actions';
import { profileRequest } from '../../store/theMovieDB/profile/actions';

import { getProfileById } from '../../store/theMovieDB/profile/selectors';

import HeaderComponent from './component';

class HeaderContainer extends Component {
  componentDidMount() {
    const { setProfile } = this.props;
    setProfile();
  }

  render() {
    if (!this.props.profile) {
      return null;
    }
    return <HeaderComponent {...this.props} />;
  }
}

const mapStateToProps = state => ({
  profile: getProfileById(state),
});

const mapDispatchToProps = {
  setProfile: profileRequest,
  removeSessionId: deleteSessionRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderContainer);
