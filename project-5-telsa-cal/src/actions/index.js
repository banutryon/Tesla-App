import { defaultVal } from '../constants/defaultVal';


// ========Action Creators======================


//==============  Fetching data==================
export const FETCH_DATA = "REQUEST_TESLA_DATA"
export const RECEIVE_DATA = "RECEIVE_TESLA_DATA"





// ========Change Speed/ state and action needed ======================
export const speedUp = (value) => {
  return {
    type: 'SPEED_UP',
    value,
    step: defaultVal.speed.step,
    maxValue: defaultVal.speed.max
  }
}
export const speedDown = (value) => {
  return {
    type: 'SPEED_DOWN',
    value,
    step: defaultVal.speed.step,
    minValue: defaultVal.speed.min
  }
}
// ========Change Temperature/ state and action needed ======================

export const temperatureUp = (value) => {
  return {
    type: 'TEMPERATURE_UP',
    value,
    step: defaultVal.temperature.step,
    maxValue: defaultVal.temperature.max
  }
}
export const temperatureDown = (value) => {
  return {
    type: 'TEMPERATURE_DOWN',
    value,
    step: defaultVal.temperature.step,
    minValue: defaultVal.temperature.min
  }
}
// ========Change Climate/ only action needed======================

export const changeClimate = () => {
  return {
    type: 'CHANGE_CLIMATE'
  }
}
// ========Change Wheel/ only action needed======================

export const changeWheel = (value) => {
  return {
    type: 'CHANGE_WHEEL',
    value
  }
}
// ========Change Updates status/ only action needed======================

export const updateStats = () => {
  return {
    type: 'UPDATE_STATS'
  }
}