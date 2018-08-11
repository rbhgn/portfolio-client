import React, {PureComponent} from 'react'
import Icon from '../../img/Icon/'

export default class BioRender extends PureComponent  {
  
  handleClick = (e) => {
    const value = e.currentTarget.value
    window.open(value)
    }

 render() {
    return (
      <div className="bio_container">
        <div className="bio_header_container">
          <h1 className="bio_header_top">Rob Hagen</h1>
          <p className="bio_header_bottom"> - Webdeveloper - </p>
        </div>
        <div className="bio_content_container">
          <p className="bio_content">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.</p>
        </div>
        <div className="bio_buttons_container">
          <button className="bio_button" onClick={this.handleClick} value="https://www.linkedin.com/in/rbhgn/"><Icon name="linkedin" color="#ffffff" width={48} height={48}  /></button>
          <button className="bio_button" onClick={this.handleClick} value="https://github.com/rbhgn"><Icon name="github" color="#ffffff" width={48} height={48} /></button>
        </div>
      </div>
    )
  }
}