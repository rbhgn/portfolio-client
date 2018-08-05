import {LOAD_PROJECT_SUCCESS} from '../actions/project'

export default function (state = {}, {type, payload}) {
	switch (type) {
		case LOAD_PROJECT_SUCCESS:
			return payload
		default:
      return state
  }
}