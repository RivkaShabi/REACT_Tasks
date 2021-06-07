import { updetaToDo } from '../store/actions';
import { connect } from "react-redux";

import {  delToDos } from '../store/actions';
const Todo = ({ myTodo,deleteFunc,...props }) => {
    return (<>
        <div>{myTodo.id}</div>
        <div>{myTodo.title}</div>
        <input type="checkbox" defaultChecked={myTodo.completed}  onChange={()=>props.updetaToDo(myTodo)} />
        <input type='button' value="מחק" onClick={()=>{props.delToDos(myTodo);}}/> 
        {/* <input type="button" value="עדכון"/> */}

    </>);
}
export default connect(null, {updetaToDo,delToDos})(Todo);
