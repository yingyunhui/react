import { combineReducers } from 'redux';
//import { login } from './login';

/*
export default combineReducers({
    login
})
*/
const login=(state={count:0}, action)=>{
  const count = state.count
  switch (action.type) {
    case 'increase':
      return { count: count + 1 }
    default:
      return state
  }
}

export default login