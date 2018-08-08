import update from 'react-addons-update'

import {LOAD_PROJECTS_SUCCESS} from '../actions/projects'
import {UPDATE_COUNTER_SUCCESS} from '../actions/projects'
export default function (state = [], {type, payload}) {
	switch (type) {
		case LOAD_PROJECTS_SUCCESS:
			return payload
		case UPDATE_COUNTER_SUCCESS:
			const index = state.findIndex(s => s.id===payload.id)
			return update(state, {[index]: {$set:payload}})
		default:
      return state
  }
}