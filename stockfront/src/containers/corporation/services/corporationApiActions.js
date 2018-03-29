
import { callController } from '../../../util/ApiConnection'
const baseUrl = process.env.REACT_APP_BACKEND_URL + '/api'


export const getAllCorporations = () => {
  const route = baseUrl + '/corporations'
  const prefix = 'CORPORATION_GET_ALL_'
  const method = 'get'
  return callController(route, prefix, null, method)
}