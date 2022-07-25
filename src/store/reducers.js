import { combineReducers } from "redux";
import tasksReducer from "./tasks/tasksReducer";

const Reducers = () =>
	combineReducers({
		tasksReducer,
	});

export default Reducers;
