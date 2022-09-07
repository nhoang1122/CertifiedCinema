// COMPONENTS //
import NavBar from "./Components/NavBar";

//PAGES//
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import Account from "./Pages/Account";

import ProtectedRoute from "./Components/ProtectedRoute";

import { Route, Routes } from "react-router-dom";

import { AuthContextProvider } from "./Context/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider> 
        <NavBar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} /> 
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
