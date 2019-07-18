import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { profileRequest as profileRequestAction } from '../../store/theMovieDB/profile/actions';
import { getProfile } from '../../store/theMovieDB/profile/selectors';

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

HeaderComponent.defaultProps = {
  profile: {},
};

HeaderContainer.propTypes = {
  profileRequest: PropTypes.func.isRequired,
  profile: PropTypes.object,
};

const mapStateToProps = state => ({
  profile: getProfile(state),
});

const mapDispatchToProps = {
  profileRequest: profileRequestAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderContainer);
