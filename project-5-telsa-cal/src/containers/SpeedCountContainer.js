import { connect } from 'react-redux';
import { defaultVal } from '../constants/defaultVal';
import { speedUp, speedDown } from '../actions';
import Counter from '../components/Counter/Counter';

// dispatch sends the data to the Redux Store and then the 
// Redux Store sends back the props state & dispatch to the parameters
// in mapState and mapDispatch

const mapStateToProps = (state) => {
    return {
        currentValue: state.config.speed,
        initValues: defaultVal.speed
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment:(value) => {
            dispatch(speedUp(value))
        },
        decrement:(value) => {
            dispatch(speedDown(value))
        }
    }
};

const SpeedCountContainerOne = connect(mapStateToProps, mapDispatchToProps)(Counter);
// const SpeedCountContainerTwo = connect(mapStateToProps, mapDispatchToProps)(CounterTwo);

export {
    SpeedCountContainerOne,
    // SpeedCountContainerTwo
};