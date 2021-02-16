import { connect } from 'react-redux';
import { changeWheel } from '../actions'
import TeslaWheels from '../components/Wheels/Wheels';

// dispatch sends the data to the Redux Store and then the 
// Redux Store sends back the props state & dispatch to the parameters
// in mapState and mapDispatch

const mapStateToProps = (state) => {
    return {
        value: state.config.wheels
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        ChangeWheels:(size) => {
            dispatch(changeWheel(size))
        }
    }
}

const WheelsContainer = connect(mapStateToProps, mapDispatchToProps)(TeslaWheels)

export default WheelsContainer;