import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Header from "./Components/Header";


const App = () => {
  return (
    <div className='w-full overflow-hi'>
    {<Header/>}

    { <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
     </Routes> } 
    </div>
  );
};

export default App;
