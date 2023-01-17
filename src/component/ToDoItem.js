import React from "react";
function ToDoItem (props){
    return(
        <div style={{border: "1px solid red", width: '50%', margin: '4rem auto'}}>
            <h1>{props.todo.title} </h1>
            <p>{props.todo.Description}</p>
        </div>
    );
}
export default ToDoItem;