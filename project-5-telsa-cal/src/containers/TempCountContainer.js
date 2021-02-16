import { connect } from 'react-redux';
import { defaultVal } from '../constants/defaultVal';
import { temperatureUp, temperatureDown } from '../actions';
import Counter from '../components/Counter/Counter';


// dispatch sends the data to the Redux Store and then the 
// Redux Store sends back the props state & dispatch to the parameters
// in mapState and mapDispatch

const mapStateToProps = (state) => {
    return {
        currentValue: state.config.temperature,
        initValues: defaultVal.temperature
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment:(value) => {
            dispatch(temperatureUp(value))
        },
        decrement:(value) => {
            dispatch(temperatureDown(value))
        }
    }
}

const TempCountContainerOne = connect(mapStateToProps, mapDispatchToProps)(Counter);
// const TempCounterContainerTwo = connect(mapStateToProps, mapDispatchToProps)(CounterTempTwo);

export {
    TempCountContainerOne,
    // TempCountContainerTwo,
};