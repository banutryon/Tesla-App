import { defaultValue } from '../constants/defaultValue';


// ========Action Creators======================
// ========Change Speed/ state and action needed ======================
export const speedUp = (value) => {
  return {
    type: 'SPEED_UP',
    value,
    step: defaultValue.speed.step,
    maxValue: defaultValue.speed.max
  }
}
export const speedDown = (value) => {
  return {
    type: 'SPEED_DOWN',
    value,
    step: defaultValue.speed.step,
    minValue: defaultValue.speed.min
  }
}
// ========Change Temperature/ state and action needed ======================

export const temperatureUp = (value) => {
  return {
    type: 'TEMPERATURE_UP',
    value,
    step: defaultValue.temperature.step,
    maxValue: defaultValue.temperature.max
  }
}
export const temperatureDown = (value) => {
  return {
    type: 'TEMPERATURE_DOWN',
    value,
    step: defaultValue.temperature.step,
    minValue: defaultValue.temperature.min
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