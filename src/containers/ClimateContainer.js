import { connect } from 'react-redux';
import { changeClimate } from '../actions'
import Climate from '../components/Climate/Climate';


// dispatch sends the data to the Redux Store and then the 
// Redux Store sends back the props state & dispatch to the parameters
// in mapState and mapDispatch

const mapStateToProps = (state) => {
    return {
        value: state.config.climate,
        limit: state.config.temperature > 35
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChangeClimate:() => {
            dispatch(changeClimate())
        }
    }
}

const ClimateContainer = connect(mapStateToProps, mapDispatchToProps)(Climate)

export default ClimateContainer;
