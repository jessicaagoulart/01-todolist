import { CREATE_TASK, DELETE_TASK, UPDATE_TASK } from "./tasks.actionsTypes";

const initialState = {
	list: [],
};

const createTask = (state, action) => {
	return {
		...state,
		list: [
			...state.list,
			{
				title: action.task.title,
				id: action.task.id,
				isConcluded: false,
			},
		],
	};
};

const deleteTask = (state, action) => {
	let list = state.list.filter((task) => task.id !== action.task.id);
	return {
		...state,
		list: [...list],
	};
};

const updateTask = (state, action) => {
	let list = state.list;

	let newList = list.filter((task) => task.id !== action.task.id);

	newList.push(action.task);

	return {
		...state,
		list: [...newList],
	};
};

function tasksReducer(state = initialState, action) {
	switch (action.type) {
		case CREATE_TASK:
			return createTask(state, action);
		case DELETE_TASK:
			return deleteTask(state, action);
		case UPDATE_TASK:
			return updateTask(state, action);
		default:
			return state;
	}
}

export default tasksReducer;
