import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import NavbarRender from './NavbarRender'


class NavbarPage extends PureComponent  {
 
 render() {

  return (
    <NavbarRender />
  )
 }
}


const mapStateToProps = function (state) {
	return {
    currentUser: state.currentUser,
    projects: state.projects
	}
}

 export default connect(mapStateToProps)(NavbarPage)