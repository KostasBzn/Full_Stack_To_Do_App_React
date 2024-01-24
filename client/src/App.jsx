import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import UserContextProvider from "./context/AuthContext.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import Application from "./pages/Application.jsx";
import SignedUp from "./components/SignedUp.jsx";
import WelcomeLogged from "./components/WelcomeLogged.jsx";
import TodoContextProvider from "./context/TodoContext.jsx";
import NewTodoForm from "./pages/NewTodoForm.jsx";
import EditForm from "./pages/EditForm.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserContextProvider>
          <TodoContextProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/app" element={<Application />} />
              <Route path="/signedup" element={<SignedUp />} />
              <Route path="/signedin" element={<WelcomeLogged />} />
              <Route path="/newtodoform" element={<NewTodoForm />} />
              <Route path="/editform" element={<EditForm />} />
            </Routes>
          </TodoContextProvider>
        </UserContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
