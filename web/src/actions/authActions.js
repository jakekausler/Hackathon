
export const registerUser = dispatch => form => {
  const { fname, lname, email } = form;
  const fullname = `${fname} ${lname}`;
  dispatch({
    type: 'REGISTER_USER',
    payload: { fname, lname, email, fullname }
  })
}
