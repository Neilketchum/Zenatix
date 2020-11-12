import { ADD_STRING } from './types';
export const addString = (str) => dispatch => {
    dispatch({
        type:ADD_STRING,
        payload:str
    })
  };