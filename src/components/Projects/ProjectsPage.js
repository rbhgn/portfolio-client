import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import { loadProjects, updateCounter}  from '../../actions/projects'
import ProjectsRender from './ProjectsRender'


class ProjectsPage extends PureComponent  {
  handleUpdateCounter = (id, data) => {
    console.log(data)
    this.props.updateCounter(id, data)
  }

  componentDidMount() {
    this.props.loadProjects()
  }
 render() {
  return (

    this.props.projects.length > 0 ? <ProjectsRender projects={ this.props.projects } handleUpdateCounter={ this.handleUpdateCounter }/> : <p>LOADING...</p>
  )
 }}

 const mapStateToProps = function (state) {
	return {
    currentUser: state.currentUser,
    projects: state.projects
	}
}

 export default connect(mapStateToProps, { loadProjects, updateCounter})(ProjectsPage)