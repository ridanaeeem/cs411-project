import React, { useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createRecipe } from "../../actions/recipes";

export function Form() {
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

	// when the user clicks the submit button, validate the data before dispatching
	function validate(recipeData) {
		// map recipedata
		for (var prop in recipeData) {
			// go through each property in the recipeData object
			if (Object.prototype.hasOwnProperty.call(recipeData, prop)) {
				if (recipeData[prop].includes("<") || recipeData[prop].includes(">")) {
					alert(`Please enter a valid ${prop}, no special characters (<, >, {, }) allowed`);
					return false;
				} else if (recipeData[prop].includes("{") || recipeData[prop].includes("}")) {
					alert(`Please enter a valid ${prop}, no special characters (<, >, {, }) allowed`);
					return false;
				}
			}
		}
		return true;
	}

	// when the user submits the form, dispatch the action to create the recipe
	const handleSubmit = (e) => {
		// send over post request with the data entered by user
		// so the form doesn't clear when the user submits, in case error checking needs to happen
		e.preventDefault();
		// dispatch action to create the recipe
		console.log("Recipe Data:", recipeData);
		if (validate(recipeData)) {
			dispatch(createRecipe(recipeData));
		} else {
			console.log("Error");
		}
	};

	// when the user clicks the clear button, clear the form
	const handleClear = (e) => {
		e.preventDefault();
		setRecipeData({
			title: "",
			description: "",
			ingredients: "",
			instructions: "",
			tags: "",
			recipePhoto: "",
		});
	};

	return (
		<>
			<form id="recipeForm" onSubmit={handleSubmit}>
				<label for="titleInput">Title </label>
				<br></br>
				<input
					id="titleInput"
					type="text"
					value={recipeData.title}
					onChange={(e) => setRecipeData({ ...recipeData, title: e.target.value })}
					required
					maxlength="50"
					form="recipeForm"
				/>
				<br></br>
				<label for="descriptionInput">Description </label>
				<br></br>
				<input
					id="descriptionInput"
					value={recipeData.description}
					onChange={(e) => setRecipeData({ ...recipeData, description: e.target.value })}
					required
					maxlength="300"
					form="recipeForm"
				/>
				<br></br>
				<label for="ingredientsInput">Ingredients </label>
				<br></br>
				<input
					id="ingredientsInput"
					value={recipeData.ingredients}
					onChange={(e) => setRecipeData({ ...recipeData, ingredients: e.target.value })}
					required
					maxlength="50"
					form="recipeForm"
				/>
				<br></br>
				<label for="instructionsInput">Instructions </label>
				<br></br>
				<input
					id="instructionsInput"
					value={recipeData.instructions}
					onChange={(e) => setRecipeData({ ...recipeData, instructions: e.target.value })}
					required
					maxlength="200"
					form="recipeForm"
				/>
				<br></br>
				<label for="tagsInput">Tags </label>
				<br></br>
				<input
					id="tagsInput"
					value={recipeData.tags}
					onChange={(e) => setRecipeData({ ...recipeData, tags: e.target.value })}
					maxlength="20"
				/>
				<br></br>
				{/* photo upload currently does not work - table functionality for now  */}
				{/* <label for="photoInput">Photo Upload</label>
				<br></br>
				<div>
					<FileBase
						id="photoInput"
						type="file"
						multiple={false}
						onDone={(base64) => setRecipeData({ ...recipeData, recipePhoto: base64 })}></FileBase>
				</div> */}
				<button type="submit" id="submit">
					Submit
				</button>
				<button type="button" onClick={handleClear}>
					Clear
				</button>
			</form>
		</>
	);
}

export default Form;
