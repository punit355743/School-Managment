import { Actions } from './actions';

export const fetchStudentlist = () => {
    return { type: Actions.STUDENT_LIST_FETCH }
}
export const fetchStudentlistSucess = (response) => {
    return { type: Actions.STUDENT_LIST_SUCCESS, payload: response }
}

export const fetchStudentlistError = (error) => {
    return { type: Actions.STUDENT_LIST_ERROR, payload: error }
}

export const updateStudentList = (student) => {
    return { type: Actions.UPDATE_STUDENT_LIST, payload: student }
}

export const addNewStudent = (student) => {
    return { type: Actions.ADD_NEW_STUDENT, payload: student }
}