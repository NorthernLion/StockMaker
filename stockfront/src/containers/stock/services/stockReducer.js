
const corporationReducer = (store = [], action) => {
  switch (action.type) {
    case 'STOCK_GET_ALL_SUCCESS':
      return action.response
    case 'STOCK_BUY_ONE_SUCCESS':
      return action.response //add an new entry to array here
    case 'STOCK_SELL_ONE_SUCCESS':
      return action.response //change quantity of stuff 
    default:
      return store
  }
}

export default corporationReducer