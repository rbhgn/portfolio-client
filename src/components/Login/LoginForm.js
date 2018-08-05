import React, {PureComponent} from 'react'

export default class LoginForm extends PureComponent  {
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
            type="email" 
            name="email" 
            value={ this.state.email || '' } 
            onChange={ this.handleChange } 
            autoComplete="email"
          />
        </div>
        <div>
          <input 
            type="password" 
            name="password" 
            value={ this.state.password || '' } 
            onChange={ this.handleChange } 
            autoComplete="current-password"
          />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  )
 }}