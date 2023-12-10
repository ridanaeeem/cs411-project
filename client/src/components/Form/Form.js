import React, { useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createRecipe, getRecipeFromUrl } from "../../actions/recipes";

export function Form() {
	// user info
	const user = JSON.parse(localStorage.getItem("profile"));
	const email = user?.email;

	// set the initial state of the recipe data to be empty strings
	const [recipeData, setRecipeData] = useState({
		title: "",
		description: "",
		ingredients: "",
		instructions: "",
		tags: "",
		creator: String(email),
	});

	// so we can dispatch the actions
	const dispatch = useDispatch();

	// when the user clicks the submit button, validate the data before dispatching
	function validate(recipeData) {
		// go through each property in the recipeData object
		for (var prop in recipeData) {
			// maxLength and required is covered by the HTML input fields
			// check for special characters next
			if (Object.prototype.hasOwnProperty.call(recipeData, prop)) {
				if (recipeData[prop].includes("<") || recipeData[prop].includes(">")) {
					alert(`Please enter a valid ${prop}, special characters (<, >, {, }) not allowed`);
					return false;
				} else if (recipeData[prop].includes("{") || recipeData[prop].includes("}")) {
					alert(`Please enter a valid ${prop}, special characters (<, >, {, }) not allowed`);
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
			dispatch(createRecipe({ ...recipeData }));
		} else {
			console.log("Error");
		}
		// clear the form after recipe data is sent
		handleClear(e);
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
			creator: String(email),
		});
	};

	// api - get recipe from url
	const fetchRecipeFromUrl = async (recipe_url) => {
		const base_url = "https://recipe-scrape.vercel.app/api/scrape?url=";
		const recipeUrl = base_url + recipe_url;

		const data = await fetch(recipeUrl).then((response) => response.json());
		setRecipeData({
			title: data.title,
			description: data.description,
			ingredients: data.ingredients,
			instructions: data.instructions,
			tags: "",
			creator: String(email),
		});
	};

	return (
		<>
			<button
				onClick={() =>
					fetchRecipeFromUrl("https://www.onceuponachef.com/recipes/roast-beef-tenderloin-wine-sauce.html")
				}>
				getch reipce
			</button>
			<form id="recipeForm" onSubmit={handleSubmit}>
				<label>
					Title
					<br></br>
					<input
						id="titleInput"
						type="text"
						value={recipeData.title}
						onChange={(e) => setRecipeData({ ...recipeData, title: e.target.value })}
						required
						maxLength="50"
						form="recipeForm"
					/>
				</label>
				<br></br>
				<label>
					Description
					<br></br>
					<input
						id="descriptionInput"
						value={recipeData.description}
						onChange={(e) => setRecipeData({ ...recipeData, description: e.target.value })}
						required
						maxLength="300"
						form="recipeForm"
					/>
				</label>
				<br></br>
				<label>
					Ingredients
					<br></br>
					<input
						id="ingredientsInput"
						value={recipeData.ingredients}
						onChange={(e) => setRecipeData({ ...recipeData, ingredients: e.target.value })}
						required
						maxLength="50"
						form="recipeForm"
					/>
				</label>
				<br></br>
				<label>
					Instructions
					<br></br>
					<input
						id="instructionsInput"
						value={recipeData.instructions}
						onChange={(e) => setRecipeData({ ...recipeData, instructions: e.target.value })}
						required
						maxLength="200"
						form="recipeForm"
					/>
				</label>
				<br></br>
				<label>
					Tags
					<br></br>
					<input
						id="tagsInput"
						value={recipeData.tags}
						onChange={(e) => setRecipeData({ ...recipeData, tags: e.target.value })}
						maxLength="20"
					/>
				</label>
				<br></br>
				{/* photo upload currently does not work - table this functionality for now  */}
				{/* <label">Photo Upload
				<br></br>
				<div>
					<FileBase
						id="photoInput"
						type="file"
						multiple={false}
						onDone={(base64) => setRecipeData({ ...recipeData, recipePhoto: base64 })}></FileBase>
				</div> 
				</label> */}
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
