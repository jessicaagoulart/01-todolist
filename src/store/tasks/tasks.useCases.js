import * as actions from "./tasks.actions";

export const createTask = (task) => (dispatch) => {
	dispatch(actions.createTask(task));
};

export const deleteTask = (task) => (dispatch) => {
	dispatch(actions.deleteTask(task));
};

export const updateTask = (task) => (dispatch) => {
	dispatch(actions.updateTask(task));
};
