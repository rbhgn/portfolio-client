import React, {PureComponent} from 'react'
import Icon from '../../img/Icon/'

export default class ProjectsRender extends PureComponent  {
  state = {
    imgLoaded: false, 
    imgSmallLoaded: false,
    page: 0
  }

  handleClick = (e) => {
    const value = e.currentTarget.value
    const name = e.currentTarget.name
    const id = (e.currentTarget.id)
    this.props.handleUpdateCounter(id, {[name]: 1})
    setTimeout(() => window.open(value), 1000)
  }

  prevPage = () => {
    this.refs.Card.style.opacity = 0
    setTimeout(() => {
    return (
    this.state.page <= 0 ? this.setState({page: this.props.projects.length -1, imgLoaded:false, imgSmallLoaded:false}) : this.setState((prevState) => {return {page: prevState.page - 1, imgLoaded:false, imgSmallLoaded:false}})
    )}, 500)}

  nextPage = () => {
    this.refs.Card.style.opacity = 0
    setTimeout(() => {
      return (
    this.state.page >= this.props.projects.length -1 ? this.setState({page: 0, imgLoaded:false, imgSmallLoaded:false}) : this.setState((prevState) => {return {page: prevState.page + 1, imgLoaded:false, imgSmallLoaded:false}})
  )}, 500)

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
        img.onload = () => resolve(true)
        img.onerror = () => reject(img)
        img.src = url
    })
  }

  preloadImg = async (p) => {
    console.log(p)
    try {
      await this.loadImage(this.props.projects[p].img) && this.setState({ imgLoaded: true })
    } catch(e) {
     console.log(e)
    }
  }

  preloadImgSmall = async (p) => {
    console.log(p)
    try {
      await this.loadImage(this.props.projects[p].imgSmall) && this.setState({ imgSmallLoaded: true })
    } catch(e) {
     console.log(e)
    }
  }

  componentDidMount() {
    this.props.projects.map((a, index) => this.setState({[`like_${index}`]: false}))
    }

  componentDidUpdate() {
    this.preloadImg(this.state.page)
    this.preloadImgSmall(this.state.page)
  }

renderProjects = () => {
  return (
    <div key={this.state.page} className="card" ref="Card">
      <div className="card_header" >
        {this.props.projects[this.state.page].title}
      </div>
      <div className="card_container_img" style={{backgroundImage:`url(${this.props.projects[this.state.page].imgSmall})`}}>
      <img src={this.props.projects[this.state.page].img} onLoad={ this.imgOnload } className="card_img" alt={ this.props.projects[this.state.page].title }/>
      </div>
      <div className="card_description">
        {this.props.projects[this.state.page].description}
      </div>
      {/* <hr /> */}
      <div className="card_tools">
        {this.props.projects[this.state.page].tools.map((t, index) => {
          return (<Icon name={t.name} color="#000000" width={32} height={32}  key={index} value={index}/>)
        })}
      </div>
      <hr />
      <div className="card_action-container">
        { this.props.projects[this.state.page].githubRepository && <div className="card_action">
            <button 
              onClick={this.handleClick} 
              name="gitHub"
              id={this.props.projects[this.state.page].id}
              value={`https://github.com/rbhgn/${this.props.projects[this.state.page].githubRepository}`} 
              className="card_action_button">
              <Icon name="github" color="#ee5050" width={16} height={16}  />
            </button>  
            <p className="view_text">{ this.props.projects[this.state.page].gitHub }</p> 
        </div> }
          
        { this.props.projects[this.state.page].previewUrl &&  <div className="card_action">
          <button 
            onClick={this.handleClick} 
            name="web"
            id={this.props.projects[this.state.page].id}
            value={this.props.projects[this.state.page].previewUrl} 
            className="card_action_button">
              <Icon name="web" color="#ee5050" width={16} height={16}  />
          </button> 
          <p className="view_text">{ this.props.projects[this.state.page].web }</p> 
        </div>
        }
        
        { <div className="card_action"> 
          <button 
            onClick={this.handleLikes} 
            name="likes"
            id={this.props.projects[this.state.page].id}
            value="1"
            className="card_action_button">
              <Icon name="heart" color="#ee5050 " width={16} height={16}  />
          </button> 
          <p className="view_text">{ this.props.projects[this.state.page].likes }</p> 
        </div> }
      </div>
    </div>
  )
}
 render() {
    return (
     
    <div className="projects_container">
      <div className="slide_button_container">
        <button onClick={this.prevPage}className="slide_button" ><Icon name="arrow-left" color="#ee5050 " width={16} height={64} className="slide_icon_left" /></button>
      </div>
      {this.state.imgLoaded && this.state.imgSmallLoaded ? this.renderProjects() : <div className="card"></div>}
      <div className="slide_button_container">
        <button onClick={this.nextPage} className="slide_button"><Icon name="arrow-right" color="#ee5050 " width={16} height={64}  /></button>
      </div>
    </div>
    )
  }
}