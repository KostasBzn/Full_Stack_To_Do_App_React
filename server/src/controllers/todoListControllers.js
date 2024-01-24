import Todo from "../models/todo-schema.js";

export const addTodo = async (req, res) => {
  try {
    const newTodo = new Todo(req.body);
    await newTodo.save();
    await newTodo.populate("author");
    res.json(newTodo);
    console.log("Task created successfully:", newTodo);
  } catch (error) {
    console.error("Error creating the task", error.message);
    res.send({ success: false, error: error.message });
  }
};

export const getAllTodo = async (req, res) => {
  try {
    const todos = await Todo.find().populate("author");
    //console.log("Tasks fetched successfully:", todos);
    res.send({ success: true, todos });
  } catch (error) {
    console.error("Error fetching the tasks", error.message);
    res.send({ success: false, error: error.message });
  }
};

export const deleteTodo = async (req, res) => {
  const { todoId } = req.params;

  await Todo.findByIdAndDelete(todoId);
  res.json({ message: "Todo deleted successfully!" });
};

export const findTodo = async (req, res) => {
  try {
    const todoId = req.params.todoId;

    const todo = await Todo.findOne({ _id: todoId });

    if (!todo) {
      return res.send({ success: false, message: "Todo not found" });
    }

    res.send({ success: true, todo });
  } catch (error) {
    console.error("Error finding the todo", error.message);
    res.send({ success: false, error: error.message });
  }
};
// 4- UPDATE a blog  /blog/like/:blogId/:authorId

export const editTodo = async (req, res) => {
  const { todoId } = req.params;

  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      todoId,
      { $set: req.body },
      { new: true }
    ).populate("author");

    if (!updatedTodo) {
      return res.send({ success: false, message: "Task not found" });
    }

    console.log("Todo updated successfully:", updatedTodo);
    res.send({
      success: true,
      todo: updatedTodo,
      message: "Updated successfully",
    });
  } catch (error) {
    console.error("Error updating the todo", error.message);
    res.send({ success: false, error: error.message });
  }
};
