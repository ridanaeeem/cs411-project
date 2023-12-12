import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRecipes } from "../../actions/recipes";
import { Login } from "../Login";
import default1 from "../../images/default1.svg";

export function Recipe({ curRecipe }) {
	// dispatch an action (getRecipes) to the redux store
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getRecipes());
	}, [dispatch]);

	console.log(curRecipe);
	return (
		<>
			{curRecipe.image ? (
				<img src={curRecipe.image} alt={curRecipe.title} />
			) : (
				<img src={default1} alt="default" />
			)}
			<h1>{curRecipe.title}</h1>
			<h1>{curRecipe.creator}</h1>
			<h1>{curRecipe.likes}</h1>
			<h1>{curRecipe.postDate.substring(0, 10)}</h1>
			<h1>{curRecipe.description}</h1>
			<h1>{curRecipe.ingredients}</h1>
			<h1>{curRecipe.instructions}</h1>
			<div></div>
		</>
	);
}
