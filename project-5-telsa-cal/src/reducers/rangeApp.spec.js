import appReducer from './rangeApp';

const initialState = {
    carstats:[
      {miles:412, model:"LongRange"},
      {miles:390, model:"Plaid"},
      {miles:520, model:"Plaid+"}
    ],
    config: {
        speed: 45,
        temperature: 80,
        climate: false,
        wheels: 19,
      }
  }
// =========climate===============
  const climateChangeState = {
    carstats:[
        {miles:389, model:"LongRange"},
        {miles:372, model:"Plaid"},
        {miles:476, model:"Plaid+"}
      ],
      config: {
          speed: 45,
          temperature: 80,
          climate: true,
          wheels: 19,
        }
  }
// =========Speed===============

  const speedUpState = {
    carstats:[
        {miles:382, model:"LongRange"},
        {miles:368, model:"Plaid"},
        {miles:461, model:"Plaid+"}
    ],
    config: {
        speed: 50,
        temperature: 80,
        climate: true,
        wheels: 19,
    }
  }
  const speedDownState = {
    carstats:[
        {miles:389, model:"LongRange"},
        {miles:372, model:"Plaid"},
        {miles:476, model:"Plaid+"}
    ],
    config: {
      speed: 45,
      temperature: 80,
      climate: true,
      wheels: 19
    }
  }
// =========Wheels===============
  const wheelChangeState = {
    carstats:[
        {miles:383, model:"LongRange"},
        {miles:364, model:"Plaid"},
        {miles:469, model:"Plaid+"}
    ],
    config: {
      speed: 45,
      temperature: 80,
      climate: true,
      wheels: 21
    }
  }
// =========Temp===============
  const temperatureUpState = {
    carstats:[
        {miles:366, model:"LongRange"},
        {miles:346, model:"Plaid"},
        {miles:449, model:"Plaid+"}
    ],
    config: {
      speed: 45,
      temperature: 35,
      climate: true,
      wheels: 21
    }
  }
  
  const temperatureDownState = {
    carstats:[
        {miles:376, model:"LongRange"},
        {miles:357, model:"Plaid"},
        {miles:460, model:"Plaid+"}
    ],
    config: {
      speed: 45,
      temperature: 65,
      climate: true,
      wheels: 21
    }
  }

// =========NPM Test===============

describe('test reducer', () => {
    it('should handle initial stat', () => {
      expect(
        appReducer(undefined, {})
      ).toEqual(initialState)
    })
  })
// =========Climate===============

  it('will handel CHANGE_CLIMATE', () => {
    expect(
        appReducer(initialState, {
            type: 'CHANGE_CLIMATE'
        })
    ).toEqual(climateChangeState)

  })
// =========Speed===============

  it('should handle SPEED_UP', () => {
    expect(
      appReducer(climateChangeState,{
        type: 'SPEED_UP',
        value: 45,
        step: 5,
        maxValue: 70
      })
    ).toEqual(speedUpState)
  })
  it('should handle SPEED_DOWN', () => {
    expect(
      appReducer(speedUpState,{
        type: 'SPEED_DOWN',
        value: 50,
        step: 5,
        minValue: 45
      })
    ).toEqual(speedDownState)
  })
  
  // =========Wheels===============

  it('should handle CHANGE_WHEEL', () => {
    expect(
      appReducer(speedDownState,{
        type: 'CHANGE_WHEEL',
        value: 21
      })
    ).toEqual(wheelChangeState)
  })
// =========Temp===============

  it('should handle TEMPERATURE_UP', () => {
    expect(
      appReducer(wheelChangeState,{
        type: 'TEMPERATURE_UP',
        value: 20,
        step: 15,
        maxValue: 95
      })
    ).toEqual(temperatureUpState)
  })
  it('should handle TEMPERATURE_DOWN', () => {
    expect(
      appReducer(temperatureUpState,{
        type: 'TEMPERATURE_DOWN',
        value: 80,
        step: 15,
        minValue: 20
      })
    ).toEqual(temperatureDownState)
  })


