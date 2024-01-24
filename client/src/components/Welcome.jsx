import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="welcome_page">
      <div className="welcome-container">
        <p>
          Welcome to my Thai to-do list application, you need to{" "}
          <Link to="/signin" className="link-style">
            sign in
          </Link>{" "}
          in order to use the application!
        </p>
        <p>
          Or{" "}
          <Link to="/signup" className="link-style">
            sign up
          </Link>{" "}
          if you do not have already an account!
        </p>
      </div>
    </div>
  );
};

export default Welcome;
