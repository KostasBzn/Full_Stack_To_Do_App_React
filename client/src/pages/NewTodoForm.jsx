import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext.jsx";
import { UserContext } from "../context/AuthContext.jsx";

const NewTodoForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [priority, setPriority] = useState("medium");
  const [completed, setCompleted] = useState(false);
  const [selectedUser, setSelectedUser] = useState("");
  const { createTodo } = useContext(TodoContext);
  const { allUsers } = useContext(UserContext);

  console.log("All users:", allUsers);

  const handleAddTodo = async (e) => {
    e.preventDefault();
    setCompleted(false);
    await createTodo(title, content, priority, completed, selectedUser);
  };

  return (
    <div className="newtask-form-container">
      <form onSubmit={handleAddTodo}>
        <div className="newtask-form-field">
          <label className="newtask-form-label">
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="newtask-input-field"
              required
            />
          </label>
        </div>

        <div className="newtask-form-field">
          <label className="newtask-form-label">
            Content:
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="newtask-input-field"
              rows="10"
              required
            />
          </label>
        </div>

        <div className="newtask-form-field">
          <label className="newtask-form-label">
            Priority:
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="newtask-select-field"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </label>
        </div>

        <div className="newtask-form-field">
          <label className="newtask-form-label">
            Assign to:
            <select
              value={selectedUser}
              onChange={(e) => setSelectedUser(e.target.value)}
              className="newtask-select-field"
            >
              <option value="">Select user</option>
              {allUsers ? (
                allUsers.map((user) => (
                  <option key={user._id} value={user.username}>
                    {user.username}
                  </option>
                ))
              ) : (
                <option disabled>Loading users...</option>
              )}
            </select>
          </label>
        </div>
        <div className="newtask-btn-container">
          <button type="submit" className="newtask-submit-btn">
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewTodoForm;
