import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import CardDetail from "../component/cardDetail";
import NotFound from "../component/notFound";
import Loading from "../component/loading";

import starWarsImg from "../../img/star001.jpeg";
import { urlCharacters } from "../component/helpers.js";

function CharacterDetail() {
	const { store, actions } = useContext(Context);
	const [detail, setDetail] = useState({});
	let { id } = useParams();

	useEffect(() => {
		fetch(urlCharacters + "/" + id)
			.then(response => {
				if (response.ok) {
					return response.json();
				}
			})
			.then(data => {
				if (data) {
					setDetail(data.result);
					actions.loading(false);
				}
			})
			.catch(err => console.error(err));
	}, []);

	let moreDetails = [
		{ title: "Name", content: detail.properties ? detail.properties.name : "" },
		{ title: "Birth year", content: detail.properties ? detail.properties.birth_year : "" },
		{ title: "Gender", content: detail.properties ? detail.properties.gender : "" },
		{ title: "Height", content: detail.properties ? detail.properties.height : "" },
		{ title: "Skin Color", content: detail.properties ? detail.properties.skin_color : "" },
		{ title: "Eye Color", content: detail.properties ? detail.properties.eye_color : "" }
	];

	return store.isPending ? (
		<Loading />
	) : detail.properties && detail.description ? (
		<CardDetail
			image={starWarsImg}
			title={detail.properties.name}
			description={detail.description}
			moreDetails={moreDetails}
		/>
	) : (
		<NotFound />
	);
}

export default CharacterDetail;
CharacterDetail.propTypes = {
	id: PropTypes.string
};
