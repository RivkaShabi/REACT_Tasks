import { addToDo } from '../store/actions';
import React, { useState } from 'react';
import { connect } from "react-redux";


const AddToDo = (props) => {

    const findMax = () => {
        if (props.myList.length!=0) {
            let max = Math.max.apply(Math, props.myList.map(function (o) { return o.id; }))
            return max + 1;
        }
        else
            return 1;

    }
    const [myTodo, setMyTodo] = useState({ "userId": props.currentUser, "id": findMax(), "title": null, "completed": false });
    const inputRefTohen = React.createRef();
    const updateTohen = () => {
        const inputText = inputRefTohen.current.value
        setMyTodo({
            ...myTodo,
            title: inputText,

        });

    }
    return (<>
        <div>
            <label>:הזן תוכן המשימה</label>
            <input ref={inputRefTohen} type="text" onKeyUp={updateTohen} />
            <input type="button" value="שמור" onClick={() => { props.addToDo(myTodo); props.setShow(false); inputRefTohen.current.value="";}} />
            <input type="button" value="ביטול" onClick={() => { props.setShow(false) }} />

        </div>

    </>);
}
const mapStateToProps = (state) => {
    return {
        currentUser: state.user.currentUser,
        myList: state.todo.todoList.filter((item)=>{return item.completed===false})
    }
}

export default connect(mapStateToProps, { addToDo })(AddToDo);

