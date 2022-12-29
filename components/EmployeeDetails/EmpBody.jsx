import React from 'react'
import "./EmpBody.css"

function EmpBody(props) {

    // console.log(props);
  return (<>
      <div className='outerdiv'>
          <h1 className='data'>Data</h1>
          <div className='innerdiv'>
              <table className='tablemap' border="2">
                  <thead>
                      <th>E.NO</th>
                      <th>Name</th>
                      <th>Age</th>
                      <th>Email</th>
                      <th>Mobile</th>
                      <th>City</th>
                      <th>Action</th>
                  </thead>
                  <tbody>
                      {props.details
                          .filter((item) => item.Name !== "" && item.age !== "" && item.email !== "" && 
                            item.phNo!==""&&item.city!=="" )
                          .map((item, index) => (
                          <tr>
                              <td>{index+1}</td>
                              <td>{item.Name}</td>
                              <td>{item.age}</td>
                              <td>{item.email}</td>
                              <td>{item.phNo}</td>
                              <td>{item.city}</td>
                              <td>
                                <div className='tabbtn'>
                                          <button
                                              style={{ width: "50px", margin: "0px,30px,0px,30px" }}
                                              onClick={()=>props.handleEditData(item,index,true)}
                                          >
                                              &#9998;
                                          </button>
                                          <button style={{ width: "50px" }} onClick={() => props.handleDelete(index)}>
                                              &#10006;
                                          </button>
                                      </div>
                             </td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          </div>
     </div>
  </>)
}
export default EmpBody

