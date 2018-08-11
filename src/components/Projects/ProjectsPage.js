import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import { loadProjects, updateCounter}  from '../../actions/projects'
import ProjectsRender from './ProjectsRender'
import {Loader} from '../Loader'
import './Projects.css'
class ProjectsPage extends PureComponent  {
  handleUpdateCounter = (id, data) => {
    this.props.updateCounter(id, data)
  }

  componentDidMount() {
    this.props.loadProjects()
  }
 render() {
  return (

    this.props.projects.length > 0 ? <ProjectsRender projects={ this.props.projects } handleUpdateCounter={ this.handleUpdateCounter }/> : <div className="projects_container"><Loader color="#ee5050"/></div>
  )
 }}

 const mapStateToProps = function (state) {
	return {
    currentUser: state.currentUser,
    projects: state.projects
	}
}

 export default connect(mapStateToProps, { loadProjects, updateCounter})(ProjectsPage)