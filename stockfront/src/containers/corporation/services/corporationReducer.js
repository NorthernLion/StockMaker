
const corporationReducer = (store = [], action) => {
  switch (action.type) {
    case 'CORPORATION_GET_ALL_SUCCESS':
      return action.response
    default:
      return store
  }
}

export default corporationReducer