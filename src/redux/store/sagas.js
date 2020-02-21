import {takeEvery, takeLatest, put, call} from 'redux-saga/effects';
import * as Types from '../actions/types';
import {GetDataFromServer} from '../services';

const Url = 'https://jsonplaceholder.typicode.com/todos'

function* fetchReadTodo(action) {
    try{
        const reqMethod = 'GET';
        const response = yield(GetDataFromServer)
        const result = yield response.json()

        if(result.error){
            yield put({type: Types.READ_TODO_ERROR, error:result.error})
        }
        else{
            yield put({type: Types.READ_TODO_SUCCESS, result})
        }
    }
    catch(error){
        console.log('error')
    }
}

export default function* rootSaga(params) {
    yield takeLatest(Types.READ_TODO, fetchReadTodo);
     
    console.log("ROOT SAGA");  
  }