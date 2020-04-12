import axios from 'axios';
import {GET_ERRORS, GET_PROJECT, GET_PROJECT_TASKS} from "./types";

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

export const getBacklog = (backlogId) => async  dispatch => {
    try {
        const res = await axios.get(`http://localhost:8080/api/backlog/${backlogId}`);
        dispatch({
            type: GET_PROJECT_TASKS,
            payload: res.data
        });
    }catch (e) {
        dispatch({
            type: GET_ERRORS,
            payload: e.response.data
        });
    }
};