import { Actions } from './../actions/actions';

const initialState = {
    loading: false,
    studentList: [],
    error: null
}


export const studentListReducer = (state = initialState, action) => {

    switch (action.type) {
        case Actions.STUDENT_LIST_FETCH:
            return {
                loading: true,
                studentList: [],
                error: null
            }
        case Actions.STUDENT_LIST_SUCCESS:
            return {
                loading: false,
                studentList: action.payload,
                error: null
            }
        case Actions.STUDENT_LIST_ERROR:
            return {
                loading: false,
                studentList: [],
                error: action.payload
            }
            case Actions.NEW_STUDENT_ADD_IN_CLASS:
                const studetList  = [...state.studentList,action.payload];
                return {
                    loading: false,
                    studentList:studetList,
                    error: null
                }

                case Actions.UPDATE_STUDENT_LIST:
                 const notupdateStudent = state.studentList.filter(stu=> stu.id !== action.payload.id )
                 const updatedList  = [...notupdateStudent,action.payload];
                return {
                    loading: false,
                    studentList:updatedList,
                    error: null
                }


        default:
            return state
    }

}