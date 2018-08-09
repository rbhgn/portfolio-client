import React, {PureComponent} from 'react'
import Icon from '../../img/Icon/'
import {Loader} from '../Loader'

export default class ProjectsRender extends PureComponent  {
  state = {imagesLoaded: false}
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
    !this.state[`like_${id}`] && this.props.handleUpdateCounter(id, {[name]: value})
    this.setState({[`like_${id}`]: true})
  }

  loadImage = (url) => {
    return new Promise(function(resolve, reject){
        const img = new Image()
        img.onload = () => resolve(img)
        img.onerror = () => reject(img)
        img.src = url
    })
  }

  componentDidMount() {
    this.props.projects.map(async (image, index) => {
      try {
         await (this.loadImage(image.img) && await this.loadImage(image.imgSmall)) && this.props.projects.length === index + 1 && this.setState({ imagesLoaded:true })
      } catch(e) {
        console.log(e)
      }
    })
    this.props.projects.map((a, index) => this.setState({[`like_${index}`]: false}))
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
          <div className="card_container_img" style={{backgroundImage:`url(${p.imgSmall})`}}>
          <img src={p.img} onLoad={ this.imgOnload } className="card_img" alt={ p.title }/>
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
            { p.githubRepository && <div className="card_action">
                <button 
                  onClick={this.handleClick} 
                  name="gitHub"
                  id={p.id}
                  value={`https://github.com/rbhgn/${p.githubRepository}`} 
                  className="card_action_button">
                  <Icon name="github" color="#000000" size={16} />
                </button>  
                <p className="view_text">{ p.gitHub }</p> 
            </div> }
              
            { p.previewUrl &&  <div className="card_action">
              <button 
                onClick={this.handleClick} 
                name="web"
                id={p.id}
                value={p.previewUrl} 
                className="card_action_button">
                  <Icon name="web" color="#000000" size={16} />
              </button> 
              <p className="view_text">{ p.web }</p> 
            </div>
            }
            
            { <div className="card_action"> 
              <button 
                onClick={this.handleLikes} 
                name="likes"
                id={p.id}
                value="1"
                className="card_action_button">
                  <Icon name="heart" color="#000000" size={16} />
              </button> 
              <p className="view_text">{ p.likes }</p> 
            </div> }
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
      this.state.imagesLoaded ? this.renderProjects() : <Loader color="#ffffff"/>
    )
  }
}