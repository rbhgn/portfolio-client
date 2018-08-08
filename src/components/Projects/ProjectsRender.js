import React, {PureComponent} from 'react'
import Icon from '../../img/Icon/'

export default class ProjectsRender extends PureComponent  {

  handleClick = (e) => {
    const value = e.currentTarget.value
    const name = e.currentTarget.name
    const id = (e.currentTarget.id)
    this.props.handleUpdateCounter(id, {[name]: 1})
    setTimeout(() => window.open(value), 1000)
    
  }
  
  handleLikes = (e) => {
    const value = e.currentTarget.value
    const name = e.currentTarget.name
    const id = (e.currentTarget.id)
    this.props.handleUpdateCounter(id, {[name]: value})
  }

renderProjects = () => {
  return (
    <div className="projects_container">
      { this.props.projects.sort((a, b) => +a.likes < +b.likes).map((p, index) => {
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
          <div className="card_action-container">
            <div className="card_action">
            { p.githubRepository && <button 
              onClick={this.handleClick} 
              name="gitHub"
              id={p.id}
              value={`https://github.com/rbhgn/${p.githubRepository}`} 
              className="card_action_button">
                <Icon name="github" color="#000000" size={32} />
            </button> }
            { p.previewUrl && <button 
                onClick={this.handleClick} 
                name="web"
                id={p.id}
                value={p.previewUrl} 
                className="card_action_button">
                  <Icon name="web" color="#000000" size={32} />
            </button> }
            </div>
            <div className="card_action">
            { <button 
              onClick={this.handleLikes} 
              name="likes"
              id={p.id}
              value="1"
              className="card_action_button">
                <Icon name="like" color="#000000" size={32} />
            </button> }
            {<button 
                onClick={this.handleLikes} 
                name="likes"
                id={p.id}
                value= "-1"
                className="card_action_button">
                  <Icon name="dislike" color="#000000" size={32} />
            </button> }
            </div>



          </div>



        </div>
        ) 
      })
      }
    </div>
  )
}
 render() {
    return (
      this.renderProjects()
    )
  }
}


