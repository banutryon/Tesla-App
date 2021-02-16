import Tesla from '../components/Tesla/Tesla.js';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        wheelsize: state.config.wheels
    }
}

const CarContainer = connect(mapStateToProps, null)(Tesla)

export default CarContainer;