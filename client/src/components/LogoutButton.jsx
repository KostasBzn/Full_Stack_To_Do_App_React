import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };
  return (
    <>
      <button onClick={logout} className="nav_logout">
        Logout
      </button>
    </>
  );
};

export default LogoutButton;
