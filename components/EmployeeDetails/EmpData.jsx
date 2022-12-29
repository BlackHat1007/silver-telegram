import React from 'react'
import { useState } from 'react';
import EmpBody from './EmpBody'
import EmpHead from './EmpHead'
import EmpPopup from './EmpPopup';
import EditPopUp from "./EditPopUp";

function EmpData() {
  const [popUp, setPopUp] = useState(false);
  const [details, setDetails] = useState([]);
  const [editData, setEditData] = useState();
const [editPop,setEditPop]=useState()
  const handleDelete = (rewVal) => {
    if (window.confirm("Are you sure?")) {
       setDetails(details.filter((res, index) => index !== rewVal))
    } else {
      return false;
    }
  }
    

  return (<>
    <EmpHead handlePopUpState={(i) => setPopUp(i)}/>
    <EmpBody
      details={details}
      handleDelete={handleDelete}
      handleEditData={(item, index, status) => {
        setEditData({ item: item, index: index });
        setEditPop(status)
      }}
    />
    {popUp ? (
        <EmpPopup
          handlePopUpState={(i) => setPopUp(i)}
          handleAddDetails={(data) => setDetails([...details, data])}
        />
    ) : null}
    {editPop ? <EditPopUp
      editData={editData}
      handleEditPopUp={(s) => setEditPop(s)}
      handleEditData={(edit, i) => details.map((item, index) => { 
        if (index === i) { 
          details[index]=edit
        }
        return null
      }) }
    /> : null}
  </>)
}
export default EmpData
