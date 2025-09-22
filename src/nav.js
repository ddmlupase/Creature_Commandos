import { NavLink } from 'react-router-dom';
import { useAuth } from './App';

function Nav() {
  const { user, isLoggedIn, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  const userGreetingStyles = {
    fontSize: '14px',
    color: '#ffffff',
    fontWeight: '400'
  };

  return (
    <>
      <style>
        {`
          @font-face {
            font-family: 'Bradley Gratis';
            src: url('/fonts/BradleyGratis.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }

          .navbar {
            padding: 1rem 0 !important;
            min-height: 80px !important;
            background: linear-gradient(135deg, 
              rgba(117, 82, 130, 0.8) 0%, 
              rgba(75, 50, 90, 0.8) 50%, 
              rgba(45, 30, 60, 0.8) 100%) !important;
            backdrop-filter: blur(10px) !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3) !important;
          }

          .navbar-nav {
            align-items: center !important;
          }

          .nav-item {
            margin: 0 0.5rem !important;
          }

          .navbar-brand-custom {
            font-family: 'Bradley Gratis', 'Arial Black', sans-serif !important;
            font-size: 32px !important;
            font-weight: bold !important;
            text-decoration: none !important;
            color: #ffffff !important;
            text-shadow: 2px 2px 8px rgba(0,0,0,0.7) !important;
            transition: all 0.3s ease !important;
            filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3)) !important;
          }

          .navbar-brand-custom:hover {
            color: #f0f0f0 !important;
            transform: scale(1.05) !important;
            text-shadow: 2px 2px 12px rgba(0,0,0,0.8), 0 0 10px #0f0 !important;
            filter: drop-shadow(0 0 15px rgba(0, 255, 0, 0.5)) !important;
          }

          .custom-nav-link {
            font-family: inherit !important;
            font-weight: 500 !important;
            font-size: 18px !important;
            letter-spacing: 0.5px !important;
            transition: all 0.3s ease !important;
            padding: 0.75rem 1.25rem !important;
            border-radius: 8px !important;
            color: rgba(255, 255, 255, 0.9) !important;
            text-shadow: 1px 1px 3px rgba(0,0,0,0.5) !important;
            border: 1px solid transparent !important;
          }

          .custom-nav-link:hover {
            color: #ffffff !important;
            background: linear-gradient(135deg, 
              rgba(255, 255, 255, 0.15) 0%, 
              rgba(255, 255, 255, 0.1) 100%) !important;
            transform: translateY(-2px) !important;
            border: 1px solid #0f0 !important;
            box-shadow: 0 0 10px rgba(0, 255, 0, 0.5), 
                        0 0 20px rgba(0, 255, 0, 0.3), 
                        0 0 30px rgba(0, 255, 0, 0.1),
                        0 4px 15px rgba(0, 0, 0, 0.2) !important;
            text-shadow: 1px 1px 3px rgba(0,0,0,0.5), 0 0 8px #0f0 !important;
          }

          

          .navbar-text {
            margin-right: 1rem !important;
            font-size: 16px !important;
            text-shadow: 1px 1px 3px rgba(0,0,0,0.5) !important;
          }

          .navbar-toggler {
            border: 1px solid rgba(255, 255, 255, 0.3) !important;
            background: rgba(255, 255, 255, 0.1) !important;
            transition: all 0.3s ease !important;
          }

          .navbar-toggler:hover {
            background: rgba(255, 255, 255, 0.2) !important;
            border: 1px solid #0f0 !important;
            box-shadow: 0 0 10px rgba(0, 255, 0, 0.3) !important;
          }

          .navbar-toggler-icon {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.8%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
          }

          /* Responsive adjustments */
          @media (max-width: 991.98px) {
            .navbar-collapse {
              background: rgba(45, 30, 60, 0.95) !important;
              border-radius: 8px !important;
              margin-top: 1rem !important;
              padding: 1rem !important;
              backdrop-filter: blur(15px) !important;
              border: 1px solid rgba(255, 255, 255, 0.1) !important;
            }
          }
        `}
      </style>
      
      <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand-custom" to="/home">
            Creature Commandos
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink 
                  className={({ isActive }) => 
                    `nav-link custom-nav-link ${isActive ? 'active' : ''}`
                  } 
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  className={({ isActive }) => 
                    `nav-link custom-nav-link ${isActive ? 'active' : ''}`
                  } 
                  to="/characters"
                >
                  Characters
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  className={({ isActive }) => 
                    `nav-link custom-nav-link ${isActive ? 'active' : ''}`
                  } 
                  to="/about"
                >
                  About Us
                </NavLink>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto">
              {isLoggedIn ? (
                <>
                  <li className="nav-item">  
                    <span className="navbar-text" style={userGreetingStyles}>
                      Hello, {user} pogi
                    </span>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link custom-nav-link" to="/login" onClick={handleLogout}>
                      Logout
                    </NavLink>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <NavLink 
                    className={({ isActive }) => 
                      `nav-link custom-nav-link ${isActive ? 'active' : ''}`
                    } 
                    to="/login"
                  >
                    Login
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;