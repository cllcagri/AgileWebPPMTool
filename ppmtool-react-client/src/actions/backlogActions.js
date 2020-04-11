import axios from 'axios';
import {GET_ERRORS} from "./types";

export const addProjectTask = (backlogId, projectTask, history) => async dispatch => {
    try{
        await axios.post(`http://localhost:8080/api/backlog/${backlogId}`, projectTask);
        history.push(`/projectBoard/${backlogId}`);
        dispatch({
            type: GET_ERRORS,
            payload: {}
        });
    }catch (e) {
        dispatch({
            type: GET_ERRORS,
            payload: e.response.data
        });
    }

};