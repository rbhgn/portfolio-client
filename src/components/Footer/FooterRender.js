import React, {PureComponent} from 'react'
import Icon from '../../img/Icon/'

export default class FooterRender extends PureComponent  {
  handleClick = (e) => {
    const value = e.currentTarget.value
    window.open(value)
    }
 render() {
    return (
      <div className="sidebar_container">
        <div className="sidebar_header_container">
          <h1 className="sidebar_header">Rob Hagen</h1>
          <p1 className="sidebar_under"> - Webdeveloper - </p1>
        </div>
        <div className="sidebar_content_container">
          <p className="sidebar_content">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.</p>
        </div>
        <div>
          <button className="sidebar_button" onClick={this.handleClick} value="https://github.com/rbhgn"><Icon name="github" color="#ffffff" width={48} height={48}  /></button>
          <button className="sidebar_button" onClick={this.handleClick} value="https://linkedin.com/rbhgn"><Icon name="linkedin" color="#ffffff" width={48} height={48}  /></button>
        </div>
      </div>
    )
  }
}