import React, {PureComponent} from 'react'
import Icon from '../../img/Icon/'

export default class FooterRender extends PureComponent  {

 render() {
  return (
    <div className="footer_container">
      <ul>
        <li><Icon name="github" color="#ffffff" size={48} /></li>
        <li><Icon name="linkedin" color="#ffffff" size={48} /></li>
      </ul>
    </div>
  )
 }}