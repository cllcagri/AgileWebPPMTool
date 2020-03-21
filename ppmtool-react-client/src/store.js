import {createStore, applyMiddleware, compose} from "redux";
import React from "react";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import {createLogger} from "redux-logger";


const initialState = {};
let store;

const logger = createLogger({
    collapsed: true,
    diff: true
});


if(window.navigator.userAgent.includes("Chrome")){
    store = createStore(rootReducer,
                        initialState,
                        composeWithDevTools(applyMiddleware(thunk,logger)));
}else{
    store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk,logger)));
}


export default store;