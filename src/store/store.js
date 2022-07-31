import { createStore,combineReducers } from 'redux';
import { studentListReducer } from './reducers/studentListReducer';




const store = createStore(studentListReducer);

export default store;
