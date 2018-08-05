import {LOAD_PROJECTS_SUCCESS} from '../actions/projects'

export default function (state = [], {type, payload}) {
	switch (type) {
		case LOAD_PROJECTS_SUCCESS:
			return payload
		default:
      return state
  }
}