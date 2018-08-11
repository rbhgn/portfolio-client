import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import BioRender from './BioRender'
import './Bio.css'

class BioPage extends PureComponent  {
 
 render() {
  return (
    <BioRender />
  )
 }
}

const mapStateToProps = function (state) {
	return {
    currentUser: state.currentUser,
    projects: state.projects
	}
}

 export default connect(mapStateToProps)(BioPage)

 