import React, { useState } from "react";

const Form = () => {
	const [recipeData, setRecipeData] = useState({
		title: "",
		description: "",
		ingredients: "",
		instructions: "",
		tags: "",
		recipePhoto: "",
	});

	const handleSubmit = () => {};

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
				<label for="titleInput">Description </label>
				<br></br>
				<input
					id="descriptionInput"
					value={recipeData.creator}
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
				<label for="photoInput">Photo URL</label>
                <br></br>
				<input
					id="photoInput"
					value={recipeData.recipePhoto}
					onChange={(e) => setRecipeData({ ...recipeData, recipePhoto: e.target.value })}></input>
			</form>
		</>
	);
};

export default Form;