import express from "express";

import { signin, signup } from "../controllers/user.js";

const router = express.Router();

// receives info from frontend
router.post("/", signin);
router.post("/", signup);

export default router;
