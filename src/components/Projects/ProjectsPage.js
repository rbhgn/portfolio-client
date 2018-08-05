import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import { loadProjects}  from '../../actions/projects'
import ProjectsRender from './ProjectsRender'


class ProjectsPage extends PureComponent  {

  componentDidMount() {
    this.props.loadProjects()
  }
 render() {
  return (

    this.props.projects.length > 0 && <ProjectsRender projects={ this.props.projects } />
  )
 }}

 const mapStateToProps = function (state) {
	return {
    currentUser: state.currentUser,
    projects: state.projects
	}
}

 export default connect(mapStateToProps, { loadProjects })(ProjectsPage)