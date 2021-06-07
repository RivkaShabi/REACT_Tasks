import axios from "axios"
import React, { useState } from 'react'
import Login from "../../components/Login";
import * as ActionTypes from '../ActionTypes';
import { setError } from "./error";
import { getToDos } from "./todo";

export const getAllUser=()=>{
    return (dispatch)=>{
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(response=>{
                  
            dispatch(setError({ level:1, text: " המערך נוצר" }))
            dispatch(getUser(response.data))

        })
        .catch(err => {
            console.log(err);
            dispatch(setError({ level: 4, text: err.message }))
        })
    }
}
export const logUser = (user) => {
   
    return (dispatch) => { 
      
        axios.get(`https://jsonplaceholder.typicode.com/users?username=${user.username}&email=${user.email}`)
            .then(response => {
                console.log(response);
                if (response.data.length === 0)
                    dispatch(setError({ level: 5, text: "אין כזה משתמש" }))
                else {
                    dispatch(saveUser(response.data[0].id))
                    dispatch(setError({ level: 1, text: "התחברת בהצלחה" }))
                    dispatch(getToDos(response.data[0].id))
                    // log()
                    
                }

            })
            .catch(err => {
                console.log(err);
                dispatch(setError({ level: 4, text: err.message }))
            })
    }
}
export const saveUser = (user) => {
    return {
        type: ActionTypes.SAVE_USER,
        payload: user
    }
}
export const getUser = (user) => {
    return {
        type: ActionTypes.GET_USERS,
        payload: user
    }
}
export const addUser = (user) => {
    return {
        type: "ADD_USER",
        payload: user
    }
}
export const logOutUser = (user) => {
    return {
        type:ActionTypes.SAVE_USER,
        payload: user
    }
}
