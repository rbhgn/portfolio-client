import React from 'react'

export const Loader = (props) => {
  return (

    <div className="loader"
      style={{ 
        borderColor: `transparent`, 
        borderTopColor: `${props.color}`,
        backgroundColor: `transparent`
        }}
    >
    </div>


  )
}