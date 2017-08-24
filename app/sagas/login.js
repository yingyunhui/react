import {select, put, call} from 'redux-saga/effects';

export default function* (){
    yield put({type:"increase"});
}