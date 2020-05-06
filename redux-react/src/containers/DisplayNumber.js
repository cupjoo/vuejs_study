import {connect} from 'react-redux'
import DisplayNumber from "../components/DisplayNumber";

// map redux state to react props
const mapStateToProps = (state) => {
    return {
        number: state.number
    };
};

export default connect(mapStateToProps)(DisplayNumber);
