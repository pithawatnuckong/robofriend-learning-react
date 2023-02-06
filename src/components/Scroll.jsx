import React from "react";
import "../App.css";

const Scroll = (props) => {
	return <div className={`h-[50rem] border-y py-4 overflow-y-scroll`}>{props.children}</div>;
};

export default Scroll;
