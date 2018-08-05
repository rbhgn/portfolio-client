import { UPDATE_USER, USER_LOGOUT} from '../actions/users'

  
export default (state = null, {type, payload}) => {
  switch (type) {
    case UPDATE_USER:
      return payload
    case USER_LOGOUT:
      return null
    default:
      return state
  }
}
