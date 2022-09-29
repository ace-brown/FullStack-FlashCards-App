import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    // Retrieve all the posts we currently have in db
    const postMessages = await PostMessage.find();

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = (req, res) => {
  const postBody = req.body;

  const newPost = new PostMessage(postBody);

  try {
    // Save the newPost
    newPost.save();

    // Posting status and sending the data as response
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
