import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { baseURL } from "../config/api.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./AuthContext.jsx";

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [allTasks, setAllTasks] = useState();
  const [newTask, setNewtask] = useState();
  const [updatedTodo, setUpdatedTodo] = useState();
  const [selectedTodo, setSelectedTodo] = useState();

  const { userInfo } = useContext(UserContext);

  const navigate = useNavigate();

  const createTodo = async (
    title,
    content,
    priority,
    completed,
    selectedUser
  ) => {
    try {
      const response = await axios.post(baseURL + `/todos/createtodo`, {
        title,
        content,
        priority,
        completed,
        selectedUser,
        author: userInfo._id,
      });

      navigate("/app");
      setNewtask(response.data);
      console.log("New Todo:", response.data);
    } catch (error) {
      console.error("Error", error.response.data.message);
    }
  };

  const deleteTodo = async (todoId) => {
    try {
      const response = await axios.delete(
        baseURL + `/todos/deletetodo/${todoId}`
      );
      console.log(response.data.message);
    } catch (error) {}
  };

  const editTodo = async (todoId, updatedData) => {
    try {
      const response = await axios.put(
        baseURL + `/todos/edittodo/${todoId}`,
        updatedData
      );

      if (response.data.success) {
        setUpdatedTodo(response.data.todo);

        navigate("/app");
        console.log("Task updated successfully!", response.data.todo);
      } else {
        console.error("Error editing the task", response.data.message);
      }
    } catch (error) {
      console.error("Error editing the task", error.message);
    }
  };

  const findTodo = async (todoId) => {
    try {
      const response = await axios.get(baseURL + `/todos/${todoId}`);

      if (response.data.success) {
        setSelectedTodo(response.data.todo);
        console.log("Task found successfully!", response.data.todo);
      } else {
        console.error("Task not found", error);
      }
    } catch (error) {
      console.error("Error finding the task", error.message);
    }
  };

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get(baseURL + `/todos/fetchtodos`);
        setAllTasks(response.data.todos);

        console.log("fetch all todos context", response.data.todos);
      } catch (error) {
        console.error("Error fetching the todos", error.response.data);
      }
    };

    fetchTodos();
  }, [newTask, updatedTodo]);

  return (
    <TodoContext.Provider
      value={{
        allTasks,
        selectedTodo,
        createTodo,
        deleteTodo,
        editTodo,
        findTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
