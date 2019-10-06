const INITIAL_SETTINGS = {
  profile: {},
  affinity: {},
  workPref: 'None',
  availability: 'None',
}

export const settingsReducer =  (state = INITIAL_SETTINGS, action) => {
  const { type, payload } = action;
  switch(type){
    case 'UPDATE_AFFINITY':
      return { ...state, affinity: payload }
    case 'UPDATE_PROFILE':
      console.log('PROFILE');
      return { ...state, profile: payload }
    case 'UPDATE_WORK_PREFERENCES':
      console.log('WORK_PREF');
      const workPref = Object.keys(payload).filter(item => payload[item])
      return { ...state, workPref: (workPref && workPref[0]) || 'None' }
    case 'UPDATE_AVAILABILITY':
      const availability = Object.keys(payload).filter(item => payload[item])
      console.log(availability);
      return { ...state, availability: (availability && availability[0]) || 'None' }
    default:
      return state

  }
} 
