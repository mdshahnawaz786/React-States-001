import React from 'react'
import "./comp.css"

const Comp = ({dark,text1,text2,text3}) => {
  return (
    <div style={dark ? {backgroundColor:"black"} : {backgroundColor:"white"}} className='main_container'>

        <div className='c' style={dark ? {color:"white"} : {color:"black"}}>

            <h1>{text1}</h1>
            <p>{text2}</p>
            <p>{text3}</p>
            

        </div>
    </div>
  )
}

export default Comp