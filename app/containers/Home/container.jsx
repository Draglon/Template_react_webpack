import { connect } from 'react-redux';
import Home from './component';

const mapStateToProps = () => ({
  isLogged: localStorage.getItem('session_id'),
});

export default connect(
  mapStateToProps,
  null,
)(Home);
