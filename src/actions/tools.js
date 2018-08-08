import * as request from 'superagent'
import { baseUrl } from '../constants'
import { isExpired } from '../jwt'
import { logout } from './users'

export const GET_TOOLS_SUCCESS = 'GET_TOOLS_SUCCESS'

const getToolsSuccess = (data) => ({
  type: GET_TOOLS_SUCCESS,
  payload: data
})

export const getTools = () => (dispatch, getState) => {
  const state = getState()
  if (!state.currentUser) return null
  const jwt = state.currentUser.jwt

  if (isExpired(jwt)) return dispatch(logout())
  request
    .get(`${baseUrl}/tools`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => dispatch(getToolsSuccess(result.body)))
    .catch(err => console.error(err))
}