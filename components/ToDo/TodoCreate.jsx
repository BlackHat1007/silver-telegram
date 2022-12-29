import React, {useState} from "react";

import './TodoCreate.css'

function TodoCreate() {
    const [data, setData] = useState("");
    const [todo, setTodo] = useState([]);
    const [progress, setProgress] = useState([]);
    const [review, setReview] = useState([])
    const [completed, setCompleted] = useState([])
    

    const handleInput = (e) => {
        setData(e.target.value)
    }
    const handleClick = () => {
        if (data) {
            setTodo([...todo, data])
            setData("");
       }
    }
    const handleToProg = (todoVal) => {
        setTodo(todo.filter((todo)=>todo!==todoVal))
        setProgress([...progress,todoVal])
    }
    const handleToRev = (progVal) => {
        setProgress(progress.filter((todo)=>todo!==progVal))
        setReview([...review,progVal])
    } 
    const handleDelete = (rewVal) => {
        setReview(review.filter((res) => res !== rewVal))
        setTodo([...todo, rewVal])
        
    }
    const handleComplete = (rewVal) => {
        setReview(review.filter((res) => res !== rewVal))
        setCompleted([...completed,rewVal])
    }
    const handleAfterComplete = (compval) => {
        alert("Hurray!! Tasks Successfully completed :-)");
        if (alert) {
            setCompleted(completed.filter((item)=>item!==compval))
        }
    }
 
    return (
        <div className='box'> 
              <div className="headers">
            <div className='text'>
                <h1>To-Do Application</h1> 
            </div> 
            <div className='text_todo'>
                <input type="text" onChange={handleInput} value={data} />
                <button onClick={handleClick}>Add Todo</button >
            </div></div>
            <div className='main_todo_container'>
              <div className="container">                   
                    <div className="titles"><h2>TO-DO</h2></div>
                    <div className="titledata">{todo.map((item)=><h4 onClick={() =>handleToProg(item)}><li>{item}</li></h4>)}</div>
                </div>
                <div className="container">
                    <div className="titles"><h2>In Progress</h2></div>
                    <div className="titledata"> {progress.map((item)=><h4 onClick={() =>handleToRev(item)}><li>{item}</li></h4>)}</div>
                    
                </div>          
                <div className="container">
                    <div className="titles"><h2>Review</h2></div>
                    {/* {review.map((item) => <h4>{item}</h4>)} */}
                    <div className="titledata">
                        {review.map((item) =>
                        <div >
                            <h4><li>{item} &nbsp;&nbsp;&nbsp;
                            <button className="rewbtn" onClick={()=>handleDelete(item)}>	&#10060;  </button>&nbsp;&nbsp;
                            <button className="rewbtn" onClick={()=>handleComplete(item)}>&#9989;</button></li></h4>
                        </div>)}
                    </div>
                </div>
                <div className="container">
                    <div className="titles"><h2>Completed</h2></div>
                    <div className="titledata">{completed.map((item) => <h4><li>{item}&nbsp;&nbsp;&nbsp;
                        <button onClick={() =>handleAfterComplete(item)} className="rewbtn"
                        >&#128077;</button></li></h4>)}</div>
                </div>
            </div>
      </div>
    )
  }
  export default TodoCreate
  
                

    

                  


