import { takeLatest, takeEvery} from 'redux-saga/effects';
import login from './login'

export default function* (){
    yield takeLatest('saga_increase',login)
}