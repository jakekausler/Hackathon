
export const settingsReducer =  (state = {}, action) => {
  const { type, payload } = action;
  switch(type){
    case 'UPDATE_AFFINITY':
      return { ...state, ...payload }
    default:
      return state

  }
} 
