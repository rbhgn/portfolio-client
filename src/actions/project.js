import * as request from 'superagent'
import { baseUrl } from '../constants'
import { isExpired } from '../jwt'
import { logout } from './users'

export const LOAD_PROJECT_SUCCESS = 'LOAD_PROJECT_SUCCESS'


const loadProjectSuccess = (data) => ({
  type: LOAD_PROJECT_SUCCESS,
  payload: data
})

const updateProjectSuccess = (data) => ({
  type: LOAD_PROJECT_SUCCESS,
  payload: data
})



export const loadProject = (id) => (dispatch) => {
  request
    .get(`${baseUrl}/projects/${id}`)
    .then(result => dispatch(loadProjectSuccess(result.body)))
    .catch(err => console.error(err))
}

export const updateProject = (id, data) => (dispatch, getState) => {
  console.log(data)
  const state = getState()
  if (!state.currentUser) return null
  const jwt = state.currentUser.jwt

  if (isExpired(jwt)) return dispatch(logout())
  request
    .patch(`${baseUrl}/projects/${id}`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(data)
    .then(result => dispatch(updateProjectSuccess(result.body)))
    .catch(err => console.error(err))
}



export const postProject = (data) => (dispatch, getState) => {
  const state = getState()
  if (!state.currentUser) return null
  const jwt = state.currentUser.jwt

  if (isExpired(jwt)) return dispatch(logout())
  request
    .post(`${baseUrl}/projects`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(data)
    .then(result => dispatch(updateProjectSuccess(result.body)))
    .catch(err => console.error(err))
}

