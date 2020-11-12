import { ADD_STRING } from './types';
export const addString = (str) => dispatch => {
    console.log("HI")
    dispatch({
        type:ADD_STRING,
        payload:str
    })
  };