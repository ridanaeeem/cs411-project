import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRecipes } from "../../actions/recipes";
import default1 from "../../images/default1.svg";
import axios from "axios";

async function parse(unprocessedIngredients, servings) {
	const processedIngredients = unprocessedIngredients.join("\n");
	const encodedParams = new URLSearchParams();
	encodedParams.set("ingredientList", processedIngredients);
	encodedParams.set("servings", servings);

	const options = {
		method: "POST",
		url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/parseIngredients",
		params: {
			includeNutrition: "false",
		},
		headers: {
			"content-type": "application/x-www-form-urlencoded",
			"X-RapidAPI-Key": "d49bb82da7msh74a5016bc434a76p182177jsna51ffdf2e618",
			"X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
		},
		data: encodedParams,
	};

	try {
		const response = await axios.request(options);
		// console.log(response.data);
		return response.data;
	} catch (error) {
		console.error(error);
	}
}

async function conversion(parsedIngredients) {
	for (let i = 0; i < parsedIngredients.length; i++) {
		const gram = parsedIngredients[i].possibleUnits.indexOf("g");
		const cup = parsedIngredients[i].possibleUnits.indexOf("cup");
		const tsp = parsedIngredients[i].possibleUnits.indexOf("teaspoon");
		const tbsp = parsedIngredients[i].possibleUnits.indexOf("tablespoon");
		const options = {
			method: "GET",
			url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/convert",
			params: {
				ingredientName: parsedIngredients[i].name,
				targetUnit: parsedIngredients[i].possibleUnits[gram],
				sourceUnit: parsedIngredients[i].unit,
				sourceAmount: parsedIngredients[i].amount,
			},
			headers: {
				"X-RapidAPI-Key": process.env.REACT_APP_API4_KEY,
				"X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
			},
		};

		try {
			const response = await axios.request(options);
			return response.data;
		} catch (error) {
			console.error(error);
		}
	}
}

async function convert(curRecipe) {
	const parsedIngredients = await parse(curRecipe.ingredients, curRecipe.yield);
	console.log(parsedIngredients);
	const convertedIngredients = await conversion(parsedIngredients);
	console.log(convertedIngredients);
}

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
			<button onClick={(e) => convert(curRecipe)}>Convert to Grams</button>
			<h1>Instructions: </h1>
			<ol>{curInstructionsList}</ol>
		</>
	);
}
