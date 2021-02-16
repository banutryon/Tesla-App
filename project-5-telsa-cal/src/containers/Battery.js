import React from 'react';
import './Battery.css';
import Notice from '../components/Notice/Notice';
import Tesla from '../components/Tesla/Tesla';
import Stats from '../components/Stats/Stats';
import Counter from '../components/Counter/Counter';
import Climate from '../components/Climate/Climate';
import Wheels from '../components/Wheels/Wheels';
import { getData } from '../services/BatteryPackages';

class TeslaBattery extends React.Component {
  constructor(props) {
    super(props);

    this.calculateStats = this.calculateStats.bind(this);
    this.statsUpdate = this.statsUpdate.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.updateCounterState = this.updateCounterState.bind(this);
    this.handleChangeClimate = this.handleChangeClimate.bind(this);
    this.handleChangeWheels = this.handleChangeWheels.bind(this);
    this.handleChangeTesla = this.handleChangeTesla.bind(this);

    this.state = {
      carstats: [],
      config: {
        speed: 45,
        temperature: 80,
        climate: false,
        wheels: 19,
      }
    }
  }

  calculateStats = (models, value) => {
    const dataModels = getData();
    return models.map(model => {
      const { speed, temperature, climate, wheels, } = value;
      const miles = dataModels[model][wheels][climate ? 'on' : 'off'].speed[speed][temperature];
      return {
        model,
        miles
      };
    });
  }

  statsUpdate() {
    const carModels = ['LongRange', 'Plaid', 'Plaid+'];
    // Fetch model info from BatteryService and calculate then update state
    this.setState({
      carstats: this.calculateStats(carModels, this.state.config)
    })
  }

  componentDidMount() {
    this.statsUpdate();
  }

  updateCounterState(title, newValue) {
    const config = { ...this.state.config };
    // update config state with new value
    title === 'Speed' ? config['speed'] = newValue : config['temperature'] = newValue;
    // update our state
    this.setState({ config }, () => {this.statsUpdate()});
  }

  increment(e, title) {
    e.preventDefault();
    let currentValue, maxValue, step;
    const { speed, temperature } = this.props.counterDefaultVal;
    if (title === 'Speed') {
      currentValue = this.state.config.speed;
      maxValue = speed.max;
      step = speed.step;
    } else {
      currentValue = this.state.config.temperature;
      maxValue = temperature.max;
      step = temperature.step;
    }

    if (currentValue < maxValue) {
      const newValue = currentValue + step;
      this.updateCounterState(title, newValue);
    }
  }

  decrement(e, title) {
    e.preventDefault();
    let currentValue, minValue, step;
    const { speed, temperature } = this.props.counterDefaultVal;
    if (title === 'Speed') {
      currentValue = this.state.config.speed;
      minValue = speed.min;
      step = speed.step;
    } else {
      currentValue = this.state.config.temperature;
      minValue = temperature.min;
      step = temperature.step;
    }

    if (currentValue > minValue) {
      const newValue = currentValue - step;
      this.updateCounterState(title, newValue);
    }
  }

  // handle aircon & heating click event handler
  handleChangeClimate() {
    const config = {...this.state.config};
    config['climate'] = !this.state.config.climate;
    this.setState({ config }, () => {this.statsUpdate()});
  }

  // handle Wheels click event handler
  handleChangeWheels(size) {
    const config = {...this.state.config};
    config['wheels'] = size;
    this.setState({ config }, () => {this.statsUpdate()});
  } 
  // handle Telsa click event handler
  handleChangeTesla(car) {
    const config = {...this.state.config};
    config['models'] = car;
    this.setState({ config }, () => {this.statsUpdate()});
  }   

  render() {    
    const { config, carstats } = this.state;
    return (
      <form className="tesla-battery">
       
        <Tesla wheelsize={config.wheels} />
       
        <Stats carstats={carstats} />
        <div className="controlsContainer ">
        <Counter
              currentValue={this.state.config.temperature}
              initValues={this.props.counterDefaultVal.temperature}
              increment={this.increment}
              decrement={this.decrement}
            />
          <div className="tesla-climate-container cf">
           <Counter
            currentValue={this.state.config.speed}
            initValues={this.props.counterDefaultVal.speed}
            increment={this.increment}
            decrement={this.decrement}
          />
            <Climate
              value={this.state.config.climate}
              limit={this.state.config.temperature > 35}
              handleChangeClimate={this.handleChangeClimate}
            />
          </div>
          <Wheels
            value={this.state.config.wheels}
            handleChangeWheels={this.handleChangeWheels}
          />
        </div>
        <Notice />
      </form>
    )
  }
}

export default TeslaBattery;