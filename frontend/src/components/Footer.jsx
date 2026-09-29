import { Link } from "react-router-dom";
import "../styles/footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-brand">
                    <Link to="/" className="footer-logo">
                        Research<span>AI</span>
                    </Link>

                    <p>
                        An AI-powered research assistant to help students and
                        researchers discover, understand, and organize research.
                    </p>
                </div>

                <div className="footer-links">
                    <div>
                        <h3>Research</h3>
                        <Link to="/search">Search Papers</Link>
                        <Link to="/my-research">My Research</Link>
                        <Link to="/literature-review">Literature Review</Link>
                    </div>

                    <div>
                        <h3>Tools</h3>
                        <Link to="/citations">Citation Manager</Link>
                        <Link to="/chat">AI Assistant</Link>
                        <Link to="/tracker">Research Tracker</Link>
                    </div>

                    <div>
                        <h3>Account</h3>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Create Account</Link>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© 2026 ResearchAI. All rights reserved.</p>

                <p>
                    Built for students and researchers.
                </p>
            </div>
        </footer>
    );
}

export default Footer;