import { combineReducers } from "redux";
import recipes from "./recipes";
import login from "./login";

export default combineReducers({ recipes, login });
