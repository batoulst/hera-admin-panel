import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import Navbar from "./component/Navbar";
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/logIn" element={<LogIn />} />
      <Route path="/signUp" element={<SignUp />} />
    </Routes>
    </>
    

  );
}

export default App;
