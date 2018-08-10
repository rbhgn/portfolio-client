import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'

import SignupPage from './components/Signup/SignupPage';
import LoginPage from './components/Login/LoginPage';
import LogoutPage from './components/Logout/LogoutPage';
import ProjectPage from './components/Project/ProjectPage';
import ProjectsPage from './components/Projects/ProjectsPage'
import SidebarPage from './components/Sidebar/SidebarPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <main>
            <Route exact path="/signup" component={ SignupPage }/>
            <Route exact path="/login" component={ LoginPage }/>
            <Route exact path="/logout" component={ LogoutPage }/>
            <Route exact path="/project/:id?" component={ ProjectPage}/>
            <Route exact path="/projects" component={ ProjectsPage}/>
          </main>
          <SidebarPage />
        </div>
      </Router>
    )
  }
}
export default App
