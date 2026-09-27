import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/navbar.css";

function ResearchLogo() {
    return (
        <div className="research-logo">
            <svg
                className="research-logo-icon"
                viewBox="0 0 64 64"
                aria-hidden="true"
            >
                <path
                    d="M8 18c8-3 16-1 24 6v28c-8-6-16-8-24-5V18Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinejoin="round"
                />

                <path
                    d="M56 18c-8-3-16-1-24 6v28c8-6 16-8 24-5V18Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinejoin="round"
                />

                <path
                    d="M36 12c8 1 13 5 15 11-7 0-13-3-17-8 0 9-4 15-10 19"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

                <path
                    d="M38 9c4-3 8-4 12-3-2 4-5 7-9 8"
                    fill="currentColor"
                />
            </svg>

            <div className="research-logo-text">
                <span className="research-logo-name">
                    Research<span>AI</span>
                </span>

                <small>Research • Analyze • Grow</small>
            </div>
        </div>
    );
}

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const { user, logout, isAuthenticated } = useAuth();

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const handleLogout = () => {
        logout();
        closeMenu();
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">

                <Link
                    to="/"
                    className="navbar-brand"
                    onClick={closeMenu}
                >
                    <ResearchLogo />
                </Link>

                <button
                    type="button"
                    className="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div
                    className={`navbar-menu ${menuOpen ? "menu-open" : ""
                        }`}
                >
                    <div className="navbar-links">
                        <Link to="/" onClick={closeMenu}>
                            Home
                        </Link>

                        <Link to="/search" onClick={closeMenu}>
                            Papers
                        </Link>

                        <Link to="/my-research" onClick={closeMenu}>
                            My Research
                        </Link>

                        <Link
                            to="/literature-review"
                            onClick={closeMenu}
                        >
                            Literature Review
                        </Link>

                        <Link to="/citations" onClick={closeMenu}>
                            Citations
                        </Link>

                        <Link to="/tracker" onClick={closeMenu}>
                            Tracker
                        </Link>
                    </div>

                    <div className="navbar-actions">
                        {isAuthenticated ? (
                            <>
                                <Link
                                    to="/chat"
                                    className="nav-ai-link"
                                    onClick={closeMenu}
                                >
                                    AI Assistant
                                </Link>

                                <Link
                                    to="/upload"
                                    className="nav-upload-link"
                                    onClick={closeMenu}
                                >
                                    Upload PDF
                                </Link>

                                <span className="navbar-user">
                                    {user?.name}
                                </span>

                                <Link
                                    to="/dashboard"
                                    className="nav-dashboard-button"
                                    onClick={closeMenu}
                                >
                                    Dashboard
                                </Link>

                                <button
                                    type="button"
                                    className="logout-button"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className="login-link"
                                    onClick={closeMenu}
                                >
                                    Login
                                </Link>

                                <Link
                                    to="/signup"
                                    className="signup-button"
                                    onClick={closeMenu}
                                >
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;