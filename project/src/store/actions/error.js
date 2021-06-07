import * as ActionTypes from '../ActionTypes';
export const setError = (error) => {
    return {
        type: ActionTypes.SET_ERROR,
        payload: error
    }
}