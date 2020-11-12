import { ADD_STRING } from '../actions/types';

const initialState = {
    strings: [],
    addedstring: ""
};
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_STRING:
            return {
                ...state,
                strings: state.strings.concat(action.payload)
            }
        default:
            return state;
    }
}