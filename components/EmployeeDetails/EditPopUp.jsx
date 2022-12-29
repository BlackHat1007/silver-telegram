import React from 'react'
import { useState } from 'react';

export default function EditPopUp(props) {
    const { Name, age, email, phNo, city } = props.editData.item;
    const [edit, setEdit] = useState({ Name: Name, age: age, email: email, phNo: phNo, city: city })
    const handleInputData = (e) => { 
        setEdit({...edit,[e.target.name]:e.target.value})
    }
  return (
    <div id='popback'><div id='popup'>
        <button onClick={() => props.handleEditPopUp(false)}>&larr;</button>
        <input
          type="text"
          placeholder="Enter your Name here..."
          name="Name"
          onChange={handleInputData}
          value={edit.Name}
        />
          <input
          type="number"
          placeholder="Enter your Age here..."
          name="age"
          onChange={handleInputData}
          value={edit.age}
        />
         <input
          type="email"
          placeholder="Enter your Email ID here..."
          name="email"
          onChange={handleInputData}
          value={edit.email}
        />
           <input
          type="number"
          placeholder="Enter your mobile number here..."
          name="phNo"
          onChange={handleInputData}
          value={edit.phNo}
        />
            <input
          type="text"
          placeholder="Enter your city here..."
          name="city"
          onChange={handleInputData}
          value={edit.city}
        />
           <span className="popup_btn">
          <button
                  onClick={() => { 
                      props.handleEditData(edit, props.editData.index);
                      props.handleEditPopUp(false)
            }}
          >
            Add  
          </button>
              <button onClick={() => props.handleEditPopUp(false)}>Cancel</button>
        </span>

      </div></div>
  )
}
