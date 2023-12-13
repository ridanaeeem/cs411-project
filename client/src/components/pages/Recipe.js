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

	const curIngredientsList = curRecipe.ingredients.map((ingredients) => {
		return <li key={ingredients}>{ingredients}</li>;
	});

	const curInstructionsList = curRecipe.instructions.map((instructions) => {
		return <li key={instructions}>{instructions}</li>;
	});

	console.log(curRecipe);
	return (
		<>
			{curRecipe.image ? (
				<img src={curRecipe.image} alt={curRecipe.title} />
			) : (
				<img src={default1} alt="default" />
			)}
			<h1>{curRecipe.title}</h1>
			<div>Posted {curRecipe.postDate.substring(0, 10)}</div>
			{curRecipe.url ? <a href={curRecipe.url}>Original source here</a> : null}
			<div>{curRecipe.description}</div>
			<h1>Ingredients: </h1>
			<ul>{curIngredientsList}</ul>
			<h1>Instructions: </h1>
			<ol>{curInstructionsList}</ol>
		</>
	);
}
