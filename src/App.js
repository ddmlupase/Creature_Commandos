<<<<<<< HEAD
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import Nav from "./nav";
import Home from "./pages/home";
import About from "./pages/about";
import Login from "./pages/login";
import Error from "./pages/error";
import Characters from "./pages/characters";
=======
import './App.css';
import React, { createContext, useContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import Nav from './nav';
import Home from './pages/home';
import About from './pages/about';
import Login from './pages/login';
import Error from './pages/error';
import Characters from './pages/characters';
>>>>>>> e38a55194a1b844f881006f2dba46ec49a615b88


// Create Authentication Context
const AuthContext = createContext();

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Auth Provider Component
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (username) => {
    setUser(username);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const NavBarLayout = () => (
  <>
    <Nav />
    <Outlet />
  </>
);

function App() {
  return (
<<<<<<< HEAD
    <Router>
      <Routes>
        <Route element={<NavBarLayout />}>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/error" element={<Error />} />
        </Route>
      </Routes>
    </Router>
=======
    <AuthProvider>
      <Router>
        <Routes>
          <Route element={<NavBarLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/error" element={<Error />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
>>>>>>> e38a55194a1b844f881006f2dba46ec49a615b88
  );
}

export default App;