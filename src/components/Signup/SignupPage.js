import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import { signup } from '../../actions/users'
import {Redirect} from 'react-router-dom'
import SignupForm from './SignupForm';

class SignupPage extends PureComponent  {
    handleSubmit = (data) => {
		this.props.postSignup(data)
	}
    render() {
        if (this.props.signup.success) return (
			<Redirect to="/login" />
		)
        return (
            <div className="login-page">
            <SignupForm onSubmit={ this.handleSubmit } />
            </div>
        )
    }
}

const mapStateToProps = function (state) {
	return {
		signup: state.signup
	}
}

export default connect(mapStateToProps, {postSignup: signup})(SignupPage)