import {
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_FAILED,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_PENDING,
} from "./constants.js";

// synchronous jobs
export const setSearchField = (text) => ({
	type: CHANGE_SEARCH_FIELD,
	payload: text,
});

// asynchronous job
export const requestRobots = () => (dispatch) => {
	dispatch({
		type: REQUEST_ROBOTS_PENDING,
	});
	fetch("https://jsonplaceholder.typicode.com/users")
		.then((res) => res.json())
		.then((users) => {
			dispatch({
				type: REQUEST_ROBOTS_SUCCESS,
				payload: users,
			});
		})
		.catch((err) => {
			dispatch({
				type: REQUEST_ROBOTS_FAILED,
				err: err,
			});
		});
};

// asynchronous work it pass through first and invoke when function is done
// export const setSearchField = (text) => (dispatch) => {
// 	dispatch ({
// 		type: CHANGE_SEARCH_FIELD,
// 		payload: text,
// 	});
// };
