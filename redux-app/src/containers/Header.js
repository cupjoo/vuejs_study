import Header from '../components/Header'
import { connect } from 'react-redux'

export default connect(null, (dispatch) => {
  return {
      onClick: () => dispatch({type: 'WELCOME'})
  }
})(Header);
