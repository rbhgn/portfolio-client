import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import { loadProject, updateProject, postProject}  from '../../actions/project'
import ProjectEdit from './ProjectEdit';
import { Redirect } from '../../../node_modules/react-router-dom';
import { getTools } from '../../actions/tools'


class Projectpage extends PureComponent  {
 
  onSubmit = (data) => {
    this.props.match.params.id ? this.props.updateProject(this.props.match.params.id, data) : this.props.postProject(data)
  }
  componentDidMount() {
    this.props.match.params.id && this.props.loadProject(this.props.match.params.id)
    this.props.getTools()
  }
 render() {
  if (!this.props.currentUser) return (
    <Redirect to="/" />
  )
  return (
    <ProjectEdit project={ this.props.currentProject } tools={ this.props.tools } onSubmit={ this.onSubmit}/>
  )
 }
}

const mapStateToProps = function (state) {
	return {
    currentUser: state.currentUser,
    currentProject: state.project,
    tools: state.tools
	}
}

 export default connect(mapStateToProps, { loadProject, updateProject, postProject, getTools })(Projectpage)