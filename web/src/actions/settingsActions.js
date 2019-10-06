
export const updateAffinity = dispatch => form => {
  dispatch({
    type: 'UPDATE_AFFINITY',
    payload: form
  })
}
