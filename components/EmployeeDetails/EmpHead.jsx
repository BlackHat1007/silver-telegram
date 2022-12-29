import React from 'react'
import "./EmpHead.css"

function EmpHead(props) {
  return (
   <header>
        <h1>Employee DataBase</h1> 
         <button  onClick={() => props.handlePopUpState(true)}>
         &#10010; Add  
        </button>
   </header>
  )
}

export default EmpHead