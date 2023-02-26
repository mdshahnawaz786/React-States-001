import React from 'react'
import "./header.css"


const Header = ({dark , darkTheme}) => {
  return (
    <div style={dark ? {backgroundColor:"black", color:"white"} : {backgroundColor:"white", color:"black"}} className='header'>
      
            <h1>Overreacted</h1>
            
            <button className='button' style={dark ? {backgroundColor: "white", color:"black"} : {backgroundColor:"black",color:"white"}} onClick={() => {
                darkTheme(!dark)
            }}>Toggle</button>
       
    </div>
  )
}

export default Header
