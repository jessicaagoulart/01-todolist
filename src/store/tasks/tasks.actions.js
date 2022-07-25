import * as actionTypes from "./tasks.actionsTypes";

export const createTask = (task) => ({
	task,
	type: actionTypes.CREATE_TASK,
});

export const deleteTask = (task) => ({
	task,
	type: actionTypes.DELETE_TASK,
});

export const updateTask = (task) => ({
	task,
	type: actionTypes.UPDATE_TASK,
});
