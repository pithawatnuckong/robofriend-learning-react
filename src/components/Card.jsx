import React from "react";
import "../App.css";

const Card = ({name, email}) => {

	return (
		<div
		className="bg-emerald-400 inline-block 
        rounded-md border-2 border-slate-300 shadow-lg 
      shadow-slate-400 hover:scale-105 transition-all 
        duration-300 cursor-pointer"
		>
			<img src={`https://robohash.org/${name}?200x200`} alt="robot" />
			<article className="text-center py-4">
				<h2 className="text-3xl">{name}</h2>
				<p className="mt-2 text-base">{email}</p>
			</article>
		</div>
	);
};

export default Card;
