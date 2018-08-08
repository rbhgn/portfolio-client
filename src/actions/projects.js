import * as request from 'superagent'
import { baseUrl } from '../constants'


export const UPDATE_COUNTER_SUCCESS = 'UPDATE_COUNTER_SUCCESS'
export const LOAD_PROJECTS_SUCCESS = 'LOAD_PROJECTS_SUCCESS'

const loadProjectsSuccess = (data) => ({
  type: LOAD_PROJECTS_SUCCESS,
  payload: data
})

const updateCounterSuccess = (data) => ({
  type: UPDATE_COUNTER_SUCCESS,
  payload: data
})

export const loadProjects = () => (dispatch) => {
  request
    .get(`${baseUrl}/projects`)
    .then(result => dispatch(loadProjectsSuccess(result.body)))
    .catch(err => console.error(err))
}

export const updateCounter = (id, data) => (dispatch) => {
  request
    .patch(`${baseUrl}/counter/${id}`)
    .send(data)
    .then(result => dispatch(updateCounterSuccess(result.body)))
    .catch(err => console.error(err))
}