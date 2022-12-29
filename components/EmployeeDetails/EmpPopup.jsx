import React from 'react'
import { useState } from 'react';
import "./EmpPopup.css"

function EmpPopup(props) {
   const [details, setDetails] = useState({
    Name: "",
    age: "",
    email: "",
    phNo: "",
    city: "",
  });
  const handleInputData = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  // console.log(details);
 
  return (<>
    <div id='popback'>
      <div id='popup'>
        <button onClick={() => props.handlePopUpState(false)}>&larr;</button>
        <input
          type="text"
          placeholder="Enter your Name here..."
          name="Name"
          onChange={handleInputData}
        />
          <input
          type="number"
          placeholder="Enter your Age here..."
          name="age"
          onChange={handleInputData}
        />
         <input
          type="email"
          placeholder="Enter your Email ID here..."
          name="email"
          onChange={handleInputData}
        />
           <input
          type="number"
          placeholder="Enter your mobile number here..."
          name="phNo"
          onChange={handleInputData}
        />
            <input
          type="text"
          placeholder="Enter your city here..."
          name="city"
          onChange={handleInputData}
        />
           <span className="popup_btn">
          <button
            onClick={() => {
              props.handleAddDetails(details);
              props.handlePopUpState(false);
            }}
          >
            Add  
          </button>
          <button onClick={() => props.handlePopUpState(false)}>Cancel</button>
        </span>

      </div>
    </div>
     
  </>)
}

export default EmpPopup