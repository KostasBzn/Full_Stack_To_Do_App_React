import { Link } from "react-router-dom";

const SignedUp = () => {
  return (
    <div className="welcome_page">
      <div className="welcome-container">
        <p>
          You are successfully signed up! click{" "}
          <Link to="/signin" className="link-style">
            here
          </Link>{" "}
          to sign in!
        </p>
      </div>
    </div>
  );
};

export default SignedUp;
