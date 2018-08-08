import React, {PureComponent} from 'react'

export default class ProjectEdit extends PureComponent  {
  state = {}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state)
	}

	handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }
 render() {
  return (
    <div>
      <form onSubmit={ this.handleSubmit }>
        <div>
          <input 
            type="text" 
            name="title" 
            value={ this.state.title || this.props.project.title || '' } 
            onChange={ this.handleChange } 
          />
        </div>

        <div>
          <input 
            type="text" 
            name="img" 
            value={ this.state.img || this.props.project.img || '' } 
            onChange={ this.handleChange } 
          />
        </div>

        <div>
          <textarea  
            type="text" 
            name="description" 
            value={ this.state.description || this.props.project.description || '' } 
            onChange={ this.handleChange } 
          />
        </div>

        <div>
          <input 
            type="text" 
            name="githubRepository" 
            value={ this.state.githubRepository|| this.props.project.githubRepository || '' } 
            onChange={ this.handleChange } 
          />
        </div>

        <div>
          <input 
            type="text" 
            name="previewUrl" 
            value={ this.state.previewUrl|| this.props.project.previewUrl || '' } 
            onChange={ this.handleChange } 
          />
        </div>
        {this.props.tools && this.props.tools.map((t, index) => {
          return (
          <input type="checkbox" name={t.name} value={ this.state.previewUrl|| this.props.project.previewUrl || '' } key={index} />
          )
        })}
        { <button type="submit">{ this.props.project.title ? 'Edit Project': 'Add Project' } </button> }
      </form>
    </div>
  )
 }}