import Stats from '../components/Stats/Stats.js';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        carstats: state.carstats
    }
}

const StatsContainer = connect(mapStateToProps, null)(Stats)

export default StatsContainer;