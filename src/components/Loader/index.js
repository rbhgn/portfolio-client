import React from 'react'

export const Loader = (props) => {
  return (

    <div className="loader"
      style={{ 
        borderColor: `${props.mainColor}`, 
        borderTopColor: `${props.secundaryColor}`,
        backgroundColor: "#DED4B9"
        }}
    >
    </div>


  )
}