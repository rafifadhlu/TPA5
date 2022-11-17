
import { configureStore,createStore,combineReducers } from "@reduxjs/toolkit";
import {reducer}  from "../reducer/todoReducer";


const store = configureStore({
    reducer: reducer,
})

export default store;

// const store = configureStore({
//     reducer: todoReducer,
//   });
