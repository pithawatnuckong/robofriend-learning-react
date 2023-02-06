import React, { useEffect } from "react";
import { connect } from "react-redux";
import "../App.css";
// import { useDispatch } from "react-redux";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";

import { setSearchField, requestRobots } from "../actions.js";

const mapStateToProp = (state) => {
	return {
		searchField: state.searchRobots.searchField,
		isPending: state.requestRobots.isPending,
		robots: state.requestRobots.robots,
		error: state.requestRobots.error,
	};
};

const mapDispatchToProp = (dispatch) => ({
	onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
	requestRobots: () => dispatch(requestRobots()),
});

const App = (props) => {
	const { searchField, isPending, robots, error } = props;

	useEffect(() => {
		props.requestRobots();
	}, []);

	const filteredRobots = robots.filter((robot) =>
		robot.name.toLowerCase().includes(searchField.toLocaleLowerCase()),
	);

	return isPending ? (
		<h1 className="text-center h-screen text-[10rem] text-white">
			YOUR ROBOTS IS FETCHING
		</h1>
	) : error ? (
		<h1 className="text-center h-screen text-white">
			YOUR PAGE IS COMPLETELY GONE
		</h1>
	) : (
		<>
			<header className="text-center">
				<h1 className="text-9xl text-slate-400 tracking-wide uppercase mb-2">
					robofriends
				</h1>
				<SearchBox changeSearch={props.onSearchChange} />
			</header>
			<Scroll>
				<CardList robots={filteredRobots} />
			</Scroll>
		</>
	);
};

export default connect(mapStateToProp, mapDispatchToProp)(App);
