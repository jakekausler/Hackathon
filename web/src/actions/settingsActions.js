
export const updateAffinity = dispatch => form => {
  dispatch({
    type: 'UPDATE_AFFINITY',
    payload: form
  })
}

export const updateProfile = dispatch => form => {
  dispatch({
    type: 'UPDATE_PROFILE',
    payload: form
  })
}

export const updateWorkPreferences = dispatch => form => {
  dispatch({
    type: 'UPDATE_WORK_PREFERENCES',
    payload: form
  })
}

export const updateAvailability = dispatch => form => {
  dispatch({
    type: 'UPDATE_AVAILABILITY',
    payload: form
  })
}
