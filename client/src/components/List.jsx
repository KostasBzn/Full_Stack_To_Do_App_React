import { useContext } from "react";
import { TodoContext } from "../context/TodoContext.jsx";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/AuthContext.jsx";

const List = () => {
  const { allTasks, deleteTodo, findTodo, editTodo } = useContext(TodoContext);
  const { userInfo } = useContext(UserContext);
  console.log("User List Form:", userInfo);

  const navigate = useNavigate();

  function formatDate(createdAt) {
    const date = new Date(createdAt);
    const formattedDate = `${date.toLocaleString("default", {
      month: "short",
    })} ${date.getDate()} ${date.getFullYear()}, ${date.toLocaleString(
      "en-US",
      {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }
    )}`;
    return formattedDate;
  }

  const handleStatus = (taskId, status) => {
    editTodo(taskId, { completed: status });
    console.log(`Task ${taskId} status change to status ${status}`);
  };

  const handleEdit = (taskId) => {
    findTodo(taskId);
    navigate("/editform");
    console.log(`Edit task ${taskId}`);
  };

  const handleDelete = (taskId) => {
    deleteTodo(taskId);
    window.location.reload();
    console.log(`Delete task ${taskId}`);
  };

  return (
    <>
      <p className="list-heading">Your Thai ToDo List:</p>
      <br />
      {allTasks && userInfo ? (
        <ul className="task-list">
          {allTasks.map((task) => (
            <li key={task._id} className="task-item">
              <div>
                <h3 className="task-title"> {task.title}</h3>
              </div>
              <div className="task-content">
                <p> {task.content} </p>
              </div>
              <div className="task-creator">
                <p className="task-author">Creator: {task.author.username}</p>
                <p className="task-created">{formatDate(task.createdAt)}</p>
              </div>
              <div></div>
              <div className="task-completed-container">
                <p className="task-completed">
                  Status: {task.completed ? "Completed" : "Pending"}
                </p>
                <p className="task-priority">Priority: {task.priority}</p>
              </div>
              <div className="task.assigned-container">
                <p className="task-assigned">
                  Assigned to: {task.selectedUser}
                </p>
              </div>

              <div className="task-buttons-container">
                <button
                  className={`task-button check-btn${
                    userInfo.username !== task.selectedUser
                      ? " btn-disabled"
                      : ""
                  }`}
                  onClick={() => handleStatus(task._id, !task.completed)}
                  disabled={userInfo.username !== task.selectedUser}
                >
                  {task.completed ? (
                    <p className="task-completed-toggle">Done!</p>
                  ) : (
                    <i className="fas fa-check"></i>
                  )}
                </button>
                <button
                  className={`task-button edit-btn ${
                    userInfo._id !== task.author._id ? " btn-disabled" : ""
                  }`}
                  onClick={() => handleEdit(task._id)}
                  disabled={userInfo._id !== task.author._id}
                >
                  <i className="far fa-edit"></i>
                </button>

                <button
                  className={`task-button delete-btn ${
                    userInfo._id !== task.author._id ? " btn-disabled" : ""
                  }`}
                  onClick={() => handleDelete(task._id)}
                  disabled={userInfo._id !== task.author._id}
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="loading-message">Loading tasks...</p>
      )}
    </>
  );
};

export default List;
