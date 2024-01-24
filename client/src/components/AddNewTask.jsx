import { useNavigate } from "react-router-dom";

const AddNewTask = () => {
  const navigate = useNavigate();

  const handleAddClick = () => {
    navigate("/newtodoform");
  };

  return (
    <div className="add-button-container">
      <button className="add-task_button" onClick={handleAddClick}>
        <i className="fa-regular fa-square-plus"></i> Add new task
      </button>
    </div>
  );
};

export default AddNewTask;
