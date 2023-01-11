import React from "react";
import NavBar from "../component/NavBar";
import ToDoList from "../component/ToDoList";
import Footer from "../component/Footer";

function Home(){
    return(
       <div> 
        <div> 
            <NavBar />
        </div>
         
        <div> 
            <ToDoList />
        </div>

        <div>
            <Footer />
        </div>

        </div>
    );
}
export default Home;