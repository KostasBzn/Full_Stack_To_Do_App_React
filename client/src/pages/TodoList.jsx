import AddNewTask from "../components/AddNewTask.jsx";
import List from "../components/List.jsx";

const TodoList = () => {
  return (
    <div className="todo-container">
      <AddNewTask />
      <List />
    </div>
  );
};

export default TodoList;
