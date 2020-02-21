import * as Types from '../actions/types';

const initialState = {
    'result' : {}
}


const handleReadTodoSuccess = (state, action) => {
    let newState = {...state}
    if(action.result !== undefined) {
        newState = Object.assign({}, state, action.result)
    }

    return {...newState}
}

const handleReadTodoError = (state, action) => {
    let newState = {...state}
    return {...newState}
}


export default (state = initialState, action) => {
    switch(action.type){
        case Types.READ_TODO:
            return state;
        case Types.READ_TODO_SUCCESS:
            return handleReadTodoSuccess(state);
        case Types.READ_TODO_ERROR:
            return handleReadTodoError(state)
        default: return state
    }
}