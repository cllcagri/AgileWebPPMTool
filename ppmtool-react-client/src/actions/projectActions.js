import axios from "axios";
import {GET_ERRORS, GET_PROJECT, GET_PROJECTS, DELETE_PROJECT} from "./types";

export const createProject = (project, history) => async dispatch => {
    try {
        await axios.post("http://localhost:8080/api/project", project);
        history.push("/dashboard");
        dispatch({
            type: GET_ERRORS,
            payload: {}
        });
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
};

// get porjects from java backend
export const  getProjects = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/api/project/all");
    dispatch({
        type: GET_PROJECTS,
        payload: res.data
    });
};

export const getProject = (projectId, history) => async dispatch => {
    try{
        const res = await axios.get(`http://localhost:8080/api/project/${projectId}`);
        dispatch({
            type: GET_PROJECT,
            payload: res.data
        });
    }catch(error){
        history.push('/dashboard');
    }
};

export const deleteProject = (projectId) => async dispatch => {
    if(window.confirm('Do you want to Delete this project ?')) {
        await axios.delete(`/api/project/${projectId}`);
        dispatch({
            type: DELETE_PROJECT,
            payload: projectId
        });
    }
};