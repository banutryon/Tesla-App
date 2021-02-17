import { getData } from '../services/BatteryPackages';
// import { getData } from 'https://tesla-app-api.herokuapp.com/api/tesla-info';
// import {RECEIVE_DATA, FETCH_DATA} from '../actions';
//====== setting initialState from tesla API on load
const initialState = {
    carstats:[
      {miles:412, model:"LongRange"},
      {miles:390, model:"Plaid"},
      {miles:520, model:"PlaidPlus"}
    ],
    config: {
        speed: 45,
        temperature: 80,
        climate: false,
        wheels: 19,
      }
  }



// ==========Fetching Data=================

function calculateStats(state) {
   
        const req = new XMLHttpRequest();

        req.open("GET", 'https://tesla-app-api.herokuapp.com/api/tesla-info', false)
        req.send();
  
        const data = JSON.parse(req.responseText)
        console.log(data)
      
        const models = ['LongRange', 'Plaid', 'PlaidPlus'];
        // const dataModels = getata();
        state.carstats = models.map(model => {
            const { speed, temperature, climate, wheels } = state.config;
            const miles = data[0].models[0][model][wheels][climate ? 'On' : 'Off'].speed[speed][temperature];
            return {
            model,
            miles
            
            };
            
        });
    
}
// ==========New Carstats state=================
function updateStats(state, newState) {
    calculateStats(newState)
    return {
        ...state,
        carstats: newState.carstats, 
        config: newState.config,
        
    }
}
// ==========Calculate state=================

// function calculateStats(state) {
//     const models = ['LongRange', 'Plaid', 'Plaid+'];
//     const dataModels = getData();
//     return models.map(model => {
//         const { speed, temperature, climate, wheels } = state.config;
//         const miles = dataModels[model][wheels][climate ? 'on' : 'off'].speed[speed][temperature];
//         return {
//           model,
//           miles
//         };
//     });
// }
// =============Reducers======================
  function appReducer(state = initialState, action) {
    switch (action.type) {
// ==Extracting Case Reducers will split each specific case into its own function:=====

      case'CHANGE_CLIMATE': {
          const newState = {
// ===========================New config state============
              ...state,
              config: {
                  speed: state.config.speed,
                  wheels: state.config.wheels,
                  climate: !state.config.climate,
                  temperature: state.config.temperature,
              }
// =================================================================
          };
          return updateStats(state, newState)
      }
      case 'SPEED_UP': {
        const newState = {
// ===========================New config state============
            ...state,
            config: {
                speed: action.value + action.step,
                wheels: state.config.wheels,
                climate: state.config.climate,
                temperature: state.config.temperature,
            }
// =================================================================
        };
        return updateStats(state, newState);
    }
    case 'SPEED_DOWN': {
        const newState = {
// ===========================New config state============
            ...state,
            config: {
                speed: action.value - action.step,
                wheels: state.config.wheels,
                climate: state.config.climate,
                temperature: state.config.temperature,
            }
// =================================================================
        };
        return updateStats(state, newState);
    }
    case 'TEMPERATURE_UP': {
        const newState = {
// ===========================New config state============
            ...state,
            config: {
                speed: state.config.speed,
                wheels: state.config.wheels,
                climate: state.config.climate,
                temperature: action.value + action.step,

            }
// =================================================================

        };
        return updateStats(state, newState);
    }
    case 'TEMPERATURE_DOWN': {
        const newState = {
// ===========================New config state============
            ...state,
            config: {
                speed: state.config.speed,
                climate: state.config.climate,
                wheels: state.config.wheels,
                temperature: action.value - action.step,
            }
// =================================================================
        };
        return updateStats(state, newState);
    }
    case 'CHANGE_WHEEL': {
        const newState = {
// ===========================New config state============
            ...state,
            config: {
                speed: state.config.speed,
                wheels: action.value,
                climate: state.config.climate,
                temperature: state.config.temperature,
            }  
// =================================================================
        };
        return updateStats(state, newState);
    }

      default:
        return state 
    }
  }


  export default appReducer;