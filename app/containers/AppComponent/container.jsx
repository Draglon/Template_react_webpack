import { connect } from 'react-redux';
import { accessAdd } from '../../store/theMovieDB/auth/actions';

import AppComponent from './component';

const mapDispatchToProps = {
  accessAdd,
};

export default connect(
  null,
  mapDispatchToProps,
)(AppComponent);
