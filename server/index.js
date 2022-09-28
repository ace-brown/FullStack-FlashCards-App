import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://fullstack_flashcards_app:UOkgHMZt3SZNPKPT@cluster0.zo6mc77.mongodb.net/?retryWrites=true&w=majority";

const port = process.env.PORT || 5000;
