import { Actions } from './../actions/actions';

const initialState = {
    status: 'pending',
    studentForm:{}
}


export const addNewStudentReducer = (state = initialState, action) => {

    switch (action.type) {
        case Actions.ADD_NEW_STUDENT:
            return {
                status: 'done',
                studentForm:action.payload
            }       
        default:
            return state
    }

}