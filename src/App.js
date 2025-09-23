import './App.css';
import React, { createContext, useContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import Nav from './nav';
import Home from './pages/home';
import About from './pages/about';
import Login from './pages/login';
import Error from './pages/error';
import Characters from './pages/characters';


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
    <AuthProvider>
      <Router>
        <Routes>
          {/* Default route - redirects localhost:3000 to localhost:3000/login */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          
          <Route element={<NavBarLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;