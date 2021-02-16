import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
// import Battery from './containers/Battery';
import appReducer from './reducers/rangeApp';
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import CarContainer from './containers/CarContainer';
import StatsContainer from './containers/StatsContainer';
import { SpeedCountContainerOne, SpeedCountContainerTwo } from './containers/SpeedCountContainer';
import { TempCountContainerOne, TempCountContainerTwo } from './containers/TempCountContainer';
import ClimateContainer from './containers/ClimateContainer';
import WheelsContainer from './containers/WheelsContainer';
import Notice from './components/Notice/Notice';


const store = createStore(appReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && 
  window.__REDUX_DEVTOOLS_EXTENSION__());


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
          <Header />
          
              <form className="tesla-battery">
                  <CarContainer/>
                  <StatsContainer />
                  <div className="tesla-controls">
                    <WheelsContainer/>
                    <ClimateContainer />
                    <SpeedCountContainerOne/>
                    <TempCountContainerOne /> 
                          
                    
                  </div>
                  <Notice />
              </form>
          
      </div>
      </Provider>

    );
  }
}
export default App;