import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { GetUsers } from "./GetUsers";
import { GetTodos } from "./GetTodos";
import { GetPhotos } from "./GetPhotos";
import { GetAlbums } from "./GetAlbums";
import { PutTodos } from "./PutTodos";


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Fetch API</h1>
			<GetUsers/>
			<GetTodos/>
			<GetPhotos/>
			<GetAlbums/>
			<PutTodos/>
		</div>
	);
};

export default Home;
