import { connect } from "react-redux";
import React, { useState }  from 'react';
import Todo from "./Todo";
import {  delToDos ,addToDo} from '../store/actions';
import AddToDo from "./AddToDo";
import { useSelector } from 'react-redux';

const Todos = (props) => {
    const selector = useSelector((state) => state.todo);
    let toDoList = selector.todoList.filter((item)=>{return item.completed===false})

    const [showAdd, setShowAdd] = useState(false);
    return (  <> <h1>המשימות:</h1>{toDoList.map((item)=>{return <Todo key={item.id} myTodo={item} deleteFunc={props.delToDos} />})}

    <input type="button" value="הוספת משימה" onClick={()=>{setShowAdd(true)}}/>
    {showAdd&&<AddToDo  setShow={setShowAdd}/>}
    </>);

}
const mapStateToProps = (state) => {
    return {
        arr: state.todo.todoList.filter((item)=>{return item.completed===false})
    }
}
export default connect(mapStateToProps,{delToDos})(Todos);