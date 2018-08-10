import React from 'react'

export const Loader = (props) => {
  return (
<div style={{marginLeft: '50%',marginRight: '50%', display: 'block', textAlign:'center'}}>
    <div className="loader"
      style={{ 
        borderColor: `transparent`, 
        borderTopColor: `${props.color}`,
        backgroundColor: `transparent`
        }}
    >
    </div>
    </div>


  )
}