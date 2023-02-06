import React from "react";
import "../App.css";

const SearchBox = ({ changeSearch }) => {
	return (
		<div className="my-4">
			<input
				onChange={changeSearch}
				className="w-3/12 py-3 px-4 rounded-full border-2 border-slate-500 m-2"
				type="text"
				placeholder="Find robot"
			/>
		</div>
	);
};

export default SearchBox;
