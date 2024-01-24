import { useContext } from "react";
import { UserContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const WelcomeLogged = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <div className="welcome_page">
        <div className="welcome-container">
          <p>
            Welcome <span>{user}</span>!
          </p>
          <p>
            Click{" "}
            <Link to="/app" className="link-style">
              here
            </Link>{" "}
            to redirect to the application
          </p>
        </div>
      </div>
    </>
  );
};

export default WelcomeLogged;
