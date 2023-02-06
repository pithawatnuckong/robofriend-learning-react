import {
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_FAILED,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_PENDING,
} from "./constants.js";

const initialState = {
	searchField: "",
	isPending: false,
	robots: [],
	error: "",
}

export const reducer = (state = initialState, action = {}) => {
	if(action.type === CHANGE_SEARCH_FIELD) return({...state, searchField: action.payload})
	else if(action.type === REQUEST_ROBOTS_PENDING) return ({...state, isPending: true})
	else if(action.type === REQUEST_ROBOTS_SUCCESS) return ({...state, isPending: false, robots: action.payload})
	else if(action.type === REQUEST_ROBOTS_FAILED) return({...state, isPending:false, error: action.err})
	else return state;
}

export default reducer

// const initialStateSearch = {
// 	searchField: "",
// };

// export const searchRobots = (state = initialStateSearch, action = {}) => {
// 	switch (action.type) {
// 		case CHANGE_SEARCH_FIELD:
// 			return Object.assign({}, state, { searchField: action.payload });
// 		default:
// 			return state;
// 	}
// };

// const initialStateRobots = {
// 	isPending: false,
// 	robots: [],
// 	error: "",
// };

// export const requestRobots = (state = initialStateRobots, action = {}) => {
// 	switch (action.type) {
// 		case REQUEST_ROBOTS_PENDING:
// 			return Object.assign({}, state, { isPending: true });
// 		case REQUEST_ROBOTS_SUCCESS:
// 			return { ...state, robots: action.payload, isPending: false };
// 		case REQUEST_ROBOTS_FAILED:
// 			return Object.assign({}, state, {
// 				error: action.err,
// 				isPending: false,
// 			});
// 		default:
// 			return state;
// 	}
// };

// export const requestRobots2 = (state = initialStateRobots, action = {}) => {
// 	if (action.type === REQUEST_ROBOTS_PENDING) {
// 		return { ...state, isPending: true };
// 	} else if(action.type === REQUEST_ROBOTS_SUCCESS) {
//         return {...state, isPending: false, robots: action.payload}
//     } else if(action.type === REQUEST_ROBOTS_FAILED) {
//         return {...state, error: "Fetch error", isPending: false}
//     } else {
//         return state;
//     }
// };



