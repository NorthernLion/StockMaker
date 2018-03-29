
const userReducer = (store = { token: 'I am placeholder token for api call to work' }, action) => {
  switch (action.type) {
    case 'CORPORATION_GET_ALL_SUCCESS':
      return action.response
    default:
      return store
  }
}

export default userReducer