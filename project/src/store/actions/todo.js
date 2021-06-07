import axios from "axios"

import * as ActionTypes from '../ActionTypes';
import { setError } from "./error";
export const getToDos = (id) => {
    return (dispatch, getState) => {
        axios.get('https://jsonplaceholder.typicode.com/todos?userId=' + id).
            then(response => {
                console.log(response.data);
                dispatch(saveToDos(response.data))
            })
            .catch(err => {
                console.log(err);
                dispatch(setError({ level: 3, text: err.message }))
            })
    }
}
export const delToDos = (todo) => {
    return (dispatch) => {
        axios.delete('https://jsonplaceholder.typicode.com/todos/'+todo.id).
            then(response => {
                console.log(todo);
                dispatch(deleteToDo(todo))
            })
            .catch(err => {
                console.log(err);
                dispatch(setError({ level: 3, text: err.message }))
            })
    }
}
export const updetaToDo = (todo) => {
    return (dispatch) => {     
        axios.put('https://jsonplaceholder.typicode.com/todos/'+todo.id,{...todo,completed:true}).
            then(response => {debugger
                console.log(response);
                dispatch(update(response.data))
            })
            .catch(err => {
                console.log(err);
                dispatch(setError({ level: 3, text: err.message }))
            })
    }
}
export const postToDos = (todo) => {
    return (dispatch) => {
        axios.post('https://jsonplaceholder.typicode.com/todos/id').
            then(response => {debugger
                console.log(todo);
                dispatch(addToDo(todo))
            })
            .catch(err => {
                console.log(err);
                dispatch(setError({ level: 3, text: err.message }))
            })
    }
}


export const saveToDos = (todos) => {
    return {
        type: ActionTypes.TODOS_SAVED,
        payload: todos
    }
}
export const deleteToDo = (todos) => {
    return {
        type: "TODO_DELETED",
        payload: todos
    }
}
export const addToDo = (todo) => {
    return {
        type: "TODO_ADDED",
        payload: todo
    }
}
export const update = (todo) => {
    return {
        type: "TODO_UPDETA",
        payload: todo
    }
}
