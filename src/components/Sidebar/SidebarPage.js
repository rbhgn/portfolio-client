import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import SidebarRender from './SidebarRender'


class SidebarPage extends PureComponent  {
 
 render() {
  return (
    <SidebarRender />
  )
 }
}

const mapStateToProps = function (state) {
	return {
    currentUser: state.currentUser,
    projects: state.projects
	}
}

 export default connect(mapStateToProps)(SidebarPage)

 