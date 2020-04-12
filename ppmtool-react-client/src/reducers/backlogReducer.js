import {GET_BACKLOG, GET_PROJECT_TASKS, DELETE_PROJECT_TASK, GET_ERRORS} from "../actions/types";

const initialState = {
    project_tasks : [],
    project_task: {}
};

export default  function (state = initialState, action) {
    switch(action.type){
        case GET_BACKLOG:
            return {
              ...state,
              project_tasks: action.payload
            };
        case GET_PROJECT_TASKS:
            return {
                ...state,
                project_tasks: action.payload
            };
        case DELETE_PROJECT_TASK:
            return {
                ...state
                //TODO: couple time after
            };
        default:
            return state;
    }
}