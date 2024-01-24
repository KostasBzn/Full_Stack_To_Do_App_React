import { useContext } from "react";
import { UserContext } from "../context/AuthContext.jsx";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton.jsx";

const Navbar = () => {
  const { user } = useContext(UserContext);

  return (
    <nav className="navbar">
      <ul className="nav_list">
        {user ? (
          <div className="nav_user">
            <li>
              <p>Welcome {user}</p>
            </li>
            <li>
              <LogoutButton />
            </li>
          </div>
        ) : (
          <div className="nav_no-user">
            <Link to="/" className="nav_home">
              Home
            </Link>
            <li>
              <Link to="/signin">Sign in</Link>
            </li>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
