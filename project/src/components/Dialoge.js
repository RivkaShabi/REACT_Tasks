import { Redirect } from "react-router-dom";
import React, { useState } from 'react';
import Todos from "./Todos";
const Dialoge = () => {
    let [nextToDo,setNextToDo]=useState(false);
    if(nextToDo){<Redirect to="todos" />
            return ( <Todos/>)
    }
else{
    return ( <>
    <h1>נוספת בהצלחה!!!</h1>
    <input type="button" value="אישור" onClick={()=>setNextToDo(true)}/>
    </> );}
    
}

export default Dialoge;