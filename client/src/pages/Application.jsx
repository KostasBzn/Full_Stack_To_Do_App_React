import { useContext } from "react";
import { UserContext } from "../context/AuthContext.jsx";
import { Link } from "react-router-dom";
import TodoList from "./TodoList.jsx";

const Application = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      {user ? (
        <div>
          <TodoList />
        </div>
      ) : (
        <div className="welcome_page">
          <div className="welcome-container">
            <p>
              You need to{" "}
              <Link to="/signin" className="link-style">
                sign in
              </Link>{" "}
              to access the application.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Application;
