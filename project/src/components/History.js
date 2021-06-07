import { connect } from "react-redux";
import HistotyToDo from './HistotyToDo';
import React, { useState } from 'react';
const History = (props) => {
    const [inputRefShreach, setinputRefShreach] = useState('');
    const inputRef = React.createRef()
    const updateinputRefShreach = () => {
        const inputText = inputRef.current.value
        setinputRefShreach(inputText)
        console.log(inputText)
        shreachToDo()

    }

    const shreachToDo = () => {
        console.log( props.arr)

        props.arr.filter((item) => { return item.title.includes(inputRefShreach) })
        console.log( props.arr)
    }

    //let toDoList = selector.todoList.filter((item)=>{return item.completed===true})
    return (<><h1>המשימות שבוצעו:</h1>
        <h6>חיפוש משימה:</h6>
        <input type="text" ref={inputRef} onKeyUp={updateinputRefShreach} />

        {props.arr.filter((item) => { return item.title.includes(inputRefShreach)}).map((item) => { return <HistotyToDo key={item.id} myTodo={item} />})}

    </>)


}
const mapStateToProps = (state) => {
    return {
        arr: state.todo.todoList.filter((item) => { return item.completed === true })
    }
}
export default connect(mapStateToProps)(History);
