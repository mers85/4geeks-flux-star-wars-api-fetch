import React from "react";
import "../../styles/home.scss";
import Characters from "./characters";
import Planets from "./planets";
import Vehicles from "./vehicles";

export const Home = () => {
	return (
		<div className="container-fluid mt-5 py-5">
			<div className="row">
				<div className="col-8 mx-auto">
					<Characters />
					<Planets />
					<Vehicles />
				</div>
			</div>
		</div>
	);
};
