import express from "express";
import { createPost, getPosts } from "../controllers/posts.js";

const router = express.Router();

// This route "/" is = "/posts"
router.get("/", getPosts);
router.post("/", createPost);

export default router;
