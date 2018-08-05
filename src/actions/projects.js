import * as request from 'superagent'
import { baseUrl } from '../constants'



export const LOAD_PROJECTS_SUCCESS = 'LOAD_PROJECTS_SUCCESS'

const loadProjectsSuccess = (data) => ({
  type: LOAD_PROJECTS_SUCCESS,
  payload: data
})


export const loadProjects = () => (dispatch) => {
  request
    .get(`${baseUrl}/projects`)
    .then(result => dispatch(loadProjectsSuccess(result.body)))
    .catch(err => console.error(err))
}