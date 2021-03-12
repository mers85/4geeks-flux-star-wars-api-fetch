import React, { useContext } from "react";
import { Context } from "../store/appContext";

import Card from "../component/card";
import Loading from "../component/loading";
import NotFound from "../component/notFound";
import PropertiesPlanet from "../component/propertiesPlanet";
import { makeFetch } from "../component/functions";

import TatooineImg from "../../img/tatooinePlanet.jpg";
import "../../styles/horizontal-scroll.scss";

function Planets() {
	const { store, actions } = useContext(Context);

	function nextPlanets() {
		makeFetch(store.planets.next)
			.then(response => {
				if (response) {
					actions.addPlanets(response);
				}
			})
			.catch(err => console.error(err));
	}
	let urlNextPagination = store.planets ? store.planets.next : null;

	return (
		<div>
			<div className="card p-4 m-3">
				<h3>Planets</h3>

				<div className="card-deck-scrollable flex-nowrap overflow-auto py-3">
					{store.isPending ? (
						<Loading />
					) : store.planets ? (
						store.planets.results.map(planet => {
							return (
								<Card
									key={planet.name + planet.uid}
									uid={planet.uid}
									image={TatooineImg}
									title={planet.name}
									properties={<PropertiesPlanet url={planet.url} />}
									labelButton={"Learn more..."}
									path="planets"
									buttonFavorite={planet.favorite}
								/>
							);
						})
					) : (
						<NotFound />
					)}
					{urlNextPagination ? (
						<button className="btn btn-light border-0" onClick={nextPlanets}>
							<i className="fas fa-plus-circle text-muted" />
						</button>
					) : (
						""
					)}
				</div>
			</div>
		</div>
	);
}

export default Planets;
