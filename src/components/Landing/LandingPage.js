import React, {PureComponent} from 'react'
import { connect } from 'react-redux'

import './Landing.css'
import BioPage from '../Bio/BioPage';
import ProjectsPage from '../Projects/ProjectsPage';


class LandingPage extends PureComponent  {

 render() {
  return (
    <div className="landing_container">
      <BioPage />
      <ProjectsPage />
    </div>
  )
 }}

 export default connect(null)(LandingPage)