import * as ActionTypes from '../ActionTypes';
const initialState = {
    // todoList:[{userId:1,id:1,title:"delectus aut autem",completed:false}]
    // todoList: [{ "userId": 1, "id": 1, "title": "delectus aut autem", "completed": false }, { "userId": 1, "id": 2, "title": "quis ut nam facilis et officia qui", "completed": false }, { "userId": 1, "id": 3, "title": "fugiat veniam minus", "completed": false }],
    todoList: [],
    selectedToDo: null

}
export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.TODOS_SAVED:
            return { ...state, todoList: action.payload }
        case ActionTypes.TODO_DELETED:
            let arr = state.todoList.filter((item) => item.id !== action.payload.id);
            // let selectedToDo = state.selectedToDo&&action.id === state.selectedToDo.id ? null : state.selectedToDo;
            return { ...state, todoList: arr };
        case ActionTypes.TODO_ADDED:
            return {
                ...state,
                todoList: [...state.todoList, action.payload]
            }
        case ActionTypes.TODO_UPDETA:
            let arr2 = state.todoList.filter((item) => item.id !== action.payload.id);
            arr2.push(action.payload)
            console.log(arr2)
            return {
                ...state,
                todoList:arr2
            }
    }
    return state;
}