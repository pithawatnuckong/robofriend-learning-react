import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import  thunkMiddleware  from "redux-thunk";
import "./index.css"
// import App from "./containers/App";
import App from "./containers/App1"
import reducer from "./reducers";
// import { searchRobots, requestRobots } from "./reducers.js";

const logger = createLogger()
// You can do multiple reducer 
// const rootReducer = combineReducers({searchRobots, requestRobots})

const store = configureStore({
	reducer: reducer,
	middleware: [logger, thunkMiddleware]
})

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<App />
	</Provider>,
);
