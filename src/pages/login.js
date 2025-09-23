import React, { useState, useEffect } from "react";  
import { useNavigate } from "react-router-dom";
import { useAuth } from '../App';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [title, setTitle] = useState("");
    
    // placeholder for username and password values since we dont have database yet
    const realusername = 'Rodwell';
    const realpassword = '1234';

    const navigate = useNavigate();
    const { login, isLoggedIn } = useAuth();

    useEffect(() => {
        setTitle(username ? `Welcome, ${username}` : "Sign in");
    }, [username]);

    // Redirect if already logged in
    useEffect(() => {
        if (isLoggedIn) {
            navigate("/home");
        }
    }, [isLoggedIn, navigate]);

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === realusername && password === realpassword) {
            login(username);
            navigate("/home");
        } else {
            alert("Invalid credentials. Try admin / 1234");
        }
    }
    
    const pageStyles = {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url("/cover.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        paddingLeft: '1100px'
    };

    const overlayStyles = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        zIndex: 1
    };

    const loginBoxStyles = {
        backgroundColor: 'rgba(15, 15, 25, 0.1)', // Made much more transparent
        backdropFilter: 'blur(2px)', // Reduced blur for subtle effect
        borderRadius: '0px',
        padding: '50px 40px',
        width: '400px',
        maxWidth: '90vw',
        position: 'relative',
        zIndex: 2,
        transition: 'all 0.3s ease' // Added smooth transition
    };

    const titleStyles = {
        fontSize: '32px',
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.3)', // Made transparent
        marginBottom: '40px',
        textAlign: 'left',
        transition: 'color 0.3s ease' // Added transition for text color
    };

    const inputGroupStyles = {
        marginBottom: '30px'
    };

    const labelStyles = {
        fontSize: '16px',
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.3)', // Made transparent
        marginBottom: '12px',
        display: 'block',
        transition: 'color 0.3s ease' // Added transition
    };

    const inputStyles = {
        width: '100%',
        padding: '16px 20px',
        backgroundColor: 'transparent',
        border: '2px solid rgba(68, 68, 68, 0.3)', // Made transparent
        borderRadius: '0px',
        fontSize: '16px',
        color: 'rgba(255, 255, 255, 0.3)', // Made transparent
        outline: 'none',
        transition: 'all 0.3s ease', // Enhanced transition
        fontFamily: 'inherit'
    };

    const buttonStyles = {
        width: '100%',
        padding: '16px',
        backgroundColor: 'rgba(108, 117, 125, 0.3)', // Made transparent
        color: 'rgba(255, 255, 255, 0.3)', // Made transparent
        border: 'none',
        borderRadius: '25px',
        fontSize: '16px',
        fontWeight: '500',
        cursor: 'pointer',
        transition: 'all 0.3s ease', // Enhanced transition
        marginTop: '20px',
        marginBottom: '30px'
    };

    const linkStyles = {
        color: 'rgba(14, 165, 233, 0.3)', // Made transparent
        textDecoration: 'none',
        fontSize: '14px',
        marginBottom: '15px',
        display: 'block',
        textAlign: 'center',
        transition: 'color 0.3s ease' // Added transition
    };

    const createAccountStyles = {
        width: '100%',
        padding: '16px',
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.3)', // Made transparent
        border: '2px solid rgba(108, 117, 125, 0.3)', // Made transparent
        borderRadius: '25px',
        fontSize: '16px',
        fontWeight: '500',
        cursor: 'pointer',
        transition: 'all 0.3s ease', // Enhanced transition
        marginBottom: '30px'
    };

    const hintStyles = {
        textAlign: 'center',
        marginTop: '20px',
        color: 'rgba(136, 136, 136, 0.3)', // Made transparent
        fontSize: '14px',
        transition: 'color 0.3s ease' // Added transition
    };

    const helpLinkStyles = {
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        color: 'rgba(14, 165, 233, 0.3)', // Made transparent
        textDecoration: 'none',
        fontSize: '14px',
        transition: 'color 0.3s ease' // Added transition
    };

    return (
        <>
            <style>
                {`
                    .login-card {
                        opacity: 0.3;
                        transition: all 0.3s ease;
                        border-radius: 10px !important;
                    }
                    
                    .login-card:hover {
                        opacity: 1;
                        background-color: rgba(15, 15, 25, 0.7) !important;
                        backdrop-filter: blur(8px) !important;
                    }
                    
                    .login-card:hover h1 {
                        color: #ffffff !important;
                    }
                    
                    .login-card:hover {
                        opacity: 1;
                        background-color: rgba(15, 15, 25, 0.7) !important;
                        backdrop-filter: blur(8px) !important;
                        border: 2px solid #0f0 !important;
                        box-shadow: 0 0 15px rgba(0, 255, 0, 0.5), 0 0 30px rgba(0, 255, 0, 0.3), 0 0 45px rgba(0, 255, 0, 0.1) !important;
                    }
                    .login-card:hover label {
                        color: #ffffff !important;
                    }
                    
                    .login-card:hover .login-input {
                        color: #ffffff !important;
                        border-color: #444444 !important;
                    }
                    
                    .login-card:hover .login-input::placeholder {
                        color: rgba(255, 255, 255, 0.5) !important;
                    }
                    
                    .login-card:hover .login-button {
                        background-color: #6c757d !important;
                        color: #ffffff !important;
                    }
                    
                    .login-card:hover .hint-text {
                        color: #888888 !important;
                    }
                    
                    .login-card:hover .help-link {
                        color: #0ea5e9 !important;
                    }
                    
                    .login-input:focus {
                        border-color: #ffffff !important;
                    }
                    
                    .login-input::placeholder {
                        color: rgba(255, 255, 255, 0.2);
                    }
                    
                    .login-button:hover {
                        background-color: #5a6268 !important;
                    }
                    
                    .login-button:disabled {
                        background-color: #495057 !important;
                        cursor: not-allowed;
                    }
                    
                    .create-account-btn:hover {
                        border-color: #ffffff !important;
                    }
                    
                    .link:hover {
                        text-decoration: underline !important;
                    }
                `}
            </style>
            <div style={pageStyles}>
                <div style={overlayStyles}></div>
                
                <div className="login-card" style={loginBoxStyles}>
                    <h1 style={titleStyles}>{title}</h1>
                    
                    <form onSubmit={handleLogin}>
                        <div style={inputGroupStyles}>
                            <label style={labelStyles}>Username (Email Address)</label>
                            <input 
                                type="text" 
                                className="login-input"
                                style={inputStyles}
                                value={username}
                                required
                                maxLength={20} 
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        
                        <div style={inputGroupStyles}>
                            <label style={labelStyles}>Password</label>
                            <input 
                                type="password" 
                                className="login-input"
                                style={inputStyles}
                                value={password}
                                required
                                maxLength={20} 
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        
                        <button type="submit" className="login-button" style={buttonStyles}>
                            Sign In
                        </button>
                    </form>
                    
                    <div className="hint-text" style={hintStyles}>
                        Demo: admin / 1234
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;