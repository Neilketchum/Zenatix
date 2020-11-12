import { ADD_STRING } from '../Actions/types';

const initialState = {
    strings: ["MATERIALUI","ReactJS","HOOKS-LOVE","REDUX","JAVASCRIPT","NODEJS","SPRINGBOOT","HIBERNATE"],

};
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_STRING:
            console.log(state)
            return {
                ...state,
                strings: [...state.strings, action.payload] 
            }
        default:
            return state;
    }
}