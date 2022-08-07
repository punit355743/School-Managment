import { createStore,combineReducers } from 'redux';
import { studentListReducer } from './reducers/studentListReducer';
import { addNewStudentReducer } from './reducers/addNewStudentReducer';

const rootReducer  = combineReducers({
    studentlist:studentListReducer,
    studentForm:addNewStudentReducer
})


const store = createStore(rootReducer);

export default store;
