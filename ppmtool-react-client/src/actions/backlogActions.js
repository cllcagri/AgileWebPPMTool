import axios from 'axios';
import {DELETE_PROJECT_TASK, GET_ERRORS, GET_PROJECT_TASK, GET_PROJECT_TASKS} from "./types";

export const addProjectTask = (backlogId, projectTask, history) => async dispatch => {
    try {
        await axios.post(`http://localhost:8080/api/backlog/${backlogId}`, projectTask);
        history.push(`/projectBoard/${backlogId}`);
        dispatch({
            type: GET_ERRORS,
            payload: {}
        });
    } catch (e) {
        dispatch({
            type: GET_ERRORS,
            payload: e.response.data
        });
    }

};

export const getBacklog = (backlogId) => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:8080/api/backlog/${backlogId}`);
        dispatch({
            type: GET_PROJECT_TASKS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: GET_ERRORS,
            payload: e.response.data
        });
    }
};


export const getProjectTask = (backlogId, ptId, history) => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:8080/api/backlog/${backlogId}/${ptId}`);
        dispatch({
            type: GET_PROJECT_TASK,
            payload: res.data
        });
    } catch (e) {
        history.push("/dashboard");
    }
};


export const deleteProjectTask = (backlogId, ptId) => async dispatch => {
    if (window.confirm('Do you want to Delete this project task?')) {
        await axios.delete(`http://localhost:8080/api/backlog/${backlogId}/${ptId}`);
        dispatch({
            type: DELETE_PROJECT_TASK,
            payload: ptId
        });
    }
};