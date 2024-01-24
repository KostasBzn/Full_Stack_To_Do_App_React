import express from "express";
import {
  addTodo,
  deleteTodo,
  editTodo,
  getAllTodo,
  findTodo,
} from "../controllers/todoListControllers.js";

const router = express.Router();

router.get("/healthcheck", (req, res) => {
  res.sendStatus(200);
});

router.get("/fetchtodos", getAllTodo);

router.get("/:todoId", findTodo);

router.post("/createtodo", addTodo);

router.put("/edittodo/:todoId", editTodo);

router.delete("/deletetodo/:todoId", deleteTodo);

export default router;

//const todosWithUser = await Todo.find().populate("user");
