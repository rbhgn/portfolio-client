import {GET_TOOLS_SUCCESS} from '../actions/tools'

export default function (state = [], {type, payload}) {
	switch (type) {
		case GET_TOOLS_SUCCESS:
			return payload
		default:
      return state
  }
}