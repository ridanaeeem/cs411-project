import React, { useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createRecipe } from "../../actions/recipes";

const Form = () => {
	const [recipeData, setRecipeData] = useState({
		title: "",
		description: "",
		ingredients: "",
		instructions: "",
		tags: "",
		recipePhoto: "",
	});

	// so we can dispatch the actions
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		console.log("submit");
		// send over post request with the data entered by user
		// so the form doesn't clear when the user submits, in case error checking needs to happen
		e.preventDefault();
		// dispatch action to create the recipe
		console.log("Recipe Data:", recipeData);
		dispatch(createRecipe(recipeData));
	};

	const clear = () => {
		console.log("clear");
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label for="titleInput">Title </label>
				<br></br>
				<input
					id="titleInput"
					value={recipeData.title}
					onChange={(e) => setRecipeData({ ...recipeData, title: e.target.value })}></input>
				<br></br>
				<label for="descriptionInput">Description </label>
				<br></br>
				<input
					id="descriptionInput"
					value={recipeData.description}
					onChange={(e) => setRecipeData({ ...recipeData, description: e.target.value })}></input>
				<br></br>
				<label for="ingredientsInput">Ingredients </label>
				<br></br>
				<input
					id="ingredientsInput"
					value={recipeData.ingredients}
					onChange={(e) => setRecipeData({ ...recipeData, ingredients: e.target.value })}></input>
				<br></br>
				<label for="instructionsInput">Instructions </label>
				<br></br>
				<input
					id="instructionsInput"
					value={recipeData.instructions}
					onChange={(e) => setRecipeData({ ...recipeData, instructions: e.target.value })}></input>
				<br></br>
				<label for="tagsInput">Tags </label>
				<br></br>
				<input
					id="tagsInput"
					value={recipeData.tags}
					onChange={(e) => setRecipeData({ ...recipeData, tags: e.target.value })}></input>
				<br></br>
				<label for="photoInput">Photo Upload</label>
				<br></br>
				<div>
					<FileBase
						id="photoInput"
						type="file"
						multiple={false}
						onDone={(base64) => setRecipeData({ ...recipeData, recipePhoto: base64 })}></FileBase>
				</div>
				<button onClick={handleSubmit}>Submit</button>
				<button onClick={clear}>Clear</button>
			</form>
		</>
	);
};

export default Form;
