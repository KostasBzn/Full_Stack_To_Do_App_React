import { useContext, useState } from "react";
import { UserContext } from "../context/AuthContext.jsx";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, user, signInMessage } = useContext(UserContext);

  const signinHandler = async (e) => {
    e.preventDefault();
    await signIn(email, password);
  };
  return (
    <div className="form_page">
      <div className="form-container">
        <h2>Sign In</h2>
        <form onSubmit={signinHandler}>
          <div className="form-field">
            <label className="form-label">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              required
            />
          </div>
          <div className="form-field">
            <label className="form-label">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              required
            />
          </div>
          {signInMessage && !user ? (
            <p className="signin_warning">{signInMessage}!</p>
          ) : (
            <p className="signin_warning"></p>
          )}
          <button type="submit" className="submit-btn">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
