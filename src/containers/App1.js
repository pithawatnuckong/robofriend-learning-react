import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";

import { setSearchField, requestRobots } from "../actions.js";

const App = () => {
	const dispatch = useDispatch();
	const {isPending, robots, error, searchField} = useSelector(state => state)

	useEffect(() => {
		dispatch(requestRobots());
	}, [dispatch]);

	const filteredRobots = robots?.filter((robot) =>
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
				<h1 className="xl:text-9xl 2xl:text-9xl text-6xl text-slate-400 tracking-wide uppercase mb-2">
					robofriends
				</h1>
				<SearchBox
					changeSearch={(event) => {
						dispatch(setSearchField(event.target.value));
					}}
				/>
			</header>
			<Scroll>
				<CardList robots={filteredRobots} />
			</Scroll>
		</>
	);
};

export default App;
