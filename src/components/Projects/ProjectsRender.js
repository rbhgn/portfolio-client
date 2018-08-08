import React, {PureComponent} from 'react'
import Icon from '../../img/Icon/'

export default class ProjectsRender extends PureComponent  {

  handleClick = (e) => {
    const target = e.target.value
    setTimeout(() => window.open(target), 1000)
    
  }
  
renderProjects = () => {
  return (
    <div className="projects_container">
      { this.props.projects.map((p, index) => {
        return (
        <div key={index} className="card">
          <div className="card_header">
            {p.title}
          </div>
          <div className="card_container_img">
            <img src={p.img} className="card_img" alt={ p.title }/>
          </div>
          <div className="card_description">
            {p.description}
          </div>
          <hr />
          <div className="card_tools">
            {p.tools.map((t, index) => {
              return (<Icon name={t.name} color="#000000" size={32} key={index} value={index}/>)
            })}
          </div>
          <hr />
          <div className="card_action">
          { p.githubRepository && <button 
            onClick={this.handleClick} 
            value={`https://github.com/rbhgn/${p.githubRepository}`} 
            className="card_action_button">
              <Icon name="github" color="#000000" size={32} />
          </button> }
          { p.previewUrl && <button 
              onClick={this.handleClick} 
              value={p.previewUrl} 
              className="card_action_button">
                <Icon name="web" color="#000000" size={32} />
          </button> }
          </div>
        </div>
        ) 
      })}
    </div>
  )
}
 render() {
    return (
      this.renderProjects()
    )
  }
}