import React from "react";
import Navbar from "../components/Navbar";

function Todo(){
    return(
        <div className="todo-page">
            <Navbar/>
            <div className="todo-wrap">
                <div className="todo-header">
                    <h2 className="todo-title">Todo Dashboard</h2>
                    <span className="todo-badge">Pending: {pending}</span>
                </div>
            </div>

            <div className="todo-add-row">
                <input
                 className="todo-input"
                 type="text"
                  name=""
                  value={}
                  onChange={}
                  placeholder="Add new Task"  
                 />
                <button type="submit"
                 className="todo-btn todo-btn-add" 
                onClick={}
                >
                    Add
                </button>
            </div>
            <input 
                className="todo-input todo-search"
                type="text" 
                name="" 
                placeholder="Search Tasks...."
                value={}
                onChange={}
             />

            <div className="todo-list">
                {
                    filtered.map(t=>(
                        <div className={t.done ? "todo-row todo-row-done" :"todo-row"} 
                        key={t.id}>
                         <span>{t.text}</span>  
                         <button 
                          className="todo-btn todo-btn-done"
                          type="button"
                          onClick={}
                          >
                            Done
                        </button> 
                        <button
                          type="button"
                          className="todo-btn todo-btn-del"
                          onClick={} 
                        >
                            Delete
                        </button>    
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Todo;