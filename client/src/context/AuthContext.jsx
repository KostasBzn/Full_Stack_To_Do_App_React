import { createContext, useEffect } from "react";
import { useState } from "react";
import { baseURL } from "../config/api.js";
import axios from "../config/axios-auth.js";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userInfo, setUserInfo] = useState();
  const [allUsers, setAllUsers] = useState(null);
  const [signInMessage, setSignInMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const signUp = async (username, email, password) => {
    try {
      const response = await axios.post(baseURL + `/users/signup`, {
        username,
        email,
        password,
      });

      if (response.data.success) {
        navigate("/signedup");
      }

      //window.location.reload();
    } catch (error) {
      console.error("Error", error.response.data.message);
    }
  };

  const signIn = async (email, password) => {
    try {
      const response = await axios.post(baseURL + `/users/signin`, {
        email,
        password,
      });

      const data = response.data;
      localStorage.setItem("token", data.token);
      console.log(data.message);
      setSignInMessage(data.message);
      //navigate("/signedin"); navigates to new page
      window.location.replace("/signedin"); // reloads the page
    } catch (error) {
      console.error("Error", error.response.data.message);
    }
  };

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const response = await axios.get(baseURL + `/users/fetchusers`);

        setAllUsers(response.data.users);
        console.log("fetch all users context", response.data.users);
      } catch (error) {
        console.error("Error fetching the users", error);
      }
    };

    fetchAllUsers();
  }, []);

  useEffect(() => {
    setLoading(true);
    const token = localStorage.getItem("token");

    const fetchUser = async () => {
      if (token) {
        try {
          const response = await axios.get(baseURL + `/users/loggeduser`);
          setUserInfo(response.data.user);
          setUser(response.data.user.username);

          console.log("fetch user", response.data.user);
        } catch (error) {
          console.error("Error decoding token:", error);
          localStorage.removeItem("token");
          setUser(null);
        }
      }
    };

    fetchUser();
    setLoading(false);
  }, []);

  return (
    <UserContext.Provider
      value={{
        loading,
        user,
        signInMessage,
        allUsers,
        userInfo,
        signUp,
        signIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
