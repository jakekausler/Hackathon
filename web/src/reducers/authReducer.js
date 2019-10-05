
export const authReducer =  (state = {}, action) => {
  const { type, payload } = action;
  switch(type){
    case 'REGISTER_USER':
      return { ...state, ...payload }
    default:
      return state

  }
} 
