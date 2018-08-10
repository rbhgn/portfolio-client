import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import FooterRender from './FooterRender'


class FooterPage extends PureComponent  {
 
 render() {
  return (
    <FooterRender />
  )
 }
}

const mapStateToProps = function (state) {
	return {
    currentUser: state.currentUser,
    projects: state.projects
	}
}

 export default connect(mapStateToProps)(FooterPage)

 