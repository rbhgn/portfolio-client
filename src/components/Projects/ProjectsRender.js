import React, {PureComponent} from 'react'
import Icon from '../../img/Icon/'

export default class ProjectsRender extends PureComponent  {

  handleClick = (e) => {
    console.log(e.target.value)
    window.open(e.target.value);
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
          { p.githubRepository && <button onClick={this.handleClick} value={`https://github.com/rbhgn/${p.githubRepository}`}>Github</button> }
          { p.previewUrl && <button onClick={this.handleClick} value={p.previewUrl}>Web</button> }
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