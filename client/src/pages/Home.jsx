import { useContext } from "react";
import Welcome from "../components/Welcome";
import WelcomeLogged from "../components/WelcomeLogged";
import { UserContext } from "../context/AuthContext";

const Home = () => {
  const { user } = useContext(UserContext);

  return <>{user ? <WelcomeLogged /> : <Welcome />}</>;
};

export default Home;
