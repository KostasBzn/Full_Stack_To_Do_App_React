import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/AuthContext";
import { TodoContext } from "../context/TodoContext";
import { useNavigate } from "react-router-dom";

const EditForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [priority, setPriority] = useState("medium");
  const [completed, setCompleted] = useState(false);
  const [selectedUser, setSelectedUser] = useState("");
  const { allUsers } = useContext(UserContext);
  const { editTodo, selectedTodo } = useContext(TodoContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (selectedTodo) {
      setTitle(selectedTodo.title);
      setContent(selectedTodo.content);
      setPriority(selectedTodo.priority);
      setSelectedUser(selectedTodo.selectedUser);
    }
  }, [selectedTodo]);

  const updatedData = {
    title,
    content,
    priority,
    selectedUser,
  };

  const handleEditTodo = async (e) => {
    e.preventDefault();
    setCompleted(false);
    if (selectedTodo) {
      editTodo(selectedTodo._id, updatedData);
    }

    console.log("edit form is open");
  };

  const handleCancel = () => {
    navigate("/app");
  };

  return (
    <div className="newtask-form-container">
      {selectedTodo ? (
        <form onSubmit={handleEditTodo}>
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
          <div className="newtask-btn-container edittask-btn-container">
            <button type="submit" className="newtask-submit-btn">
              Save
            </button>
            <button className="newtask-cancel-btn" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EditForm;
