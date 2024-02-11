import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import { Login } from "./components/auth/Login";
import { SignUp } from "./components/auth/SignUp";

import { ChakraProvider } from "@chakra-ui/react";
import FrontPage from "./components/LandingPage/FrontPage";

function App() {

  return (
    <>
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<FrontPage/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </Router>
     </ChakraProvider>
    </>
  )
}

export default App
