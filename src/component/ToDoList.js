import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList(props){
    //console.log(todos)
    return (
        <div>
            {/* loop over the todos list and get an individual todo */}

            {
                props.todos.map((item, index) => (
                    <ToDoItem key={index} todo={item} />
                ))
            }
         
        
         
        </div>
    );
}
export default ToDoList;