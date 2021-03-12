import React from "react";

import vaderImg from "../../img/vader.png";

export const NotFound = () => {
	return (
		<div className="container pt-5 mt-5 text-center">
			<div className="card-body py-2">
				<img className="img-fluid" src={vaderImg} width="200" />
				<h4 className="text-muted mx-auto font-italic display-4">Not found</h4>
			</div>
		</div>
	);
};

export default NotFound;
