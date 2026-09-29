import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/dashboard.css";

function Dashboard() {
    const { user } = useAuth();

    return (
        <main className="dashboard-page">

            {/* Header */}
            <section className="dashboard-header">
                <div>
                    <span className="dashboard-eyebrow">
                        RESEARCH WORKSPACE
                    </span>

                    <h1>
                        Welcome back,{" "}
                        <span>{user?.name || "Researcher"}</span>
                    </h1>

                    <p>
                        Continue your research journey and keep your
                        academic work organized.
                    </p>
                </div>

                <Link
                    to="/upload"
                    className="dashboard-primary-button"
                >
                    + Upload Paper
                </Link>
            </section>


            {/* Stats */}
            <section className="dashboard-stats">

                <div className="dashboard-stat-card">
                    <span className="dashboard-stat-label">
                        SAVED PAPERS
                    </span>

                    <strong>12</strong>

                    <span className="dashboard-stat-note">
                        Papers in your library
                    </span>
                </div>

                <div className="dashboard-stat-card">
                    <span className="dashboard-stat-label">
                        IN REVIEW
                    </span>

                    <strong>5</strong>

                    <span className="dashboard-stat-note">
                        Papers being analyzed
                    </span>
                </div>

                <div className="dashboard-stat-card">
                    <span className="dashboard-stat-label">
                        CITATIONS
                    </span>

                    <strong>24</strong>

                    <span className="dashboard-stat-note">
                        References organized
                    </span>
                </div>

                <div className="dashboard-stat-card">
                    <span className="dashboard-stat-label">
                        TASKS
                    </span>

                    <strong>8</strong>

                    <span className="dashboard-stat-note">
                        Research tasks tracked
                    </span>
                </div>

            </section>


            {/* Main dashboard grid */}
            <section className="dashboard-main-grid">

                {/* Progress */}
                <div className="dashboard-panel progress-panel">

                    <div className="dashboard-panel-heading">
                        <div>
                            <span>RESEARCH PROGRESS</span>
                            <h2>Current progress</h2>
                        </div>

                        <Link to="/tracker">
                            View tracker →
                        </Link>
                    </div>

                    <div className="dashboard-progress-list">

                        <div className="dashboard-progress-item">
                            <div className="progress-item-top">
                                <span>Literature Review</span>
                                <strong>70%</strong>
                            </div>

                            <div className="progress-track">
                                <span
                                    style={{ width: "70%" }}
                                ></span>
                            </div>
                        </div>

                        <div className="dashboard-progress-item">
                            <div className="progress-item-top">
                                <span>Paper Analysis</span>
                                <strong>55%</strong>
                            </div>

                            <div className="progress-track">
                                <span
                                    style={{ width: "55%" }}
                                ></span>
                            </div>
                        </div>

                        <div className="dashboard-progress-item">
                            <div className="progress-item-top">
                                <span>Citation Management</span>
                                <strong>35%</strong>
                            </div>

                            <div className="progress-track">
                                <span
                                    style={{ width: "35%" }}
                                ></span>
                            </div>
                        </div>

                    </div>
                </div>


                {/* Quick actions */}
                <div className="dashboard-panel">

                    <div className="dashboard-panel-heading">
                        <div>
                            <span>QUICK ACTIONS</span>
                            <h2>Research tools</h2>
                        </div>
                    </div>

                    <div className="dashboard-actions">

                        <Link
                            to="/search"
                            className="dashboard-action"
                        >
                            <div className="dashboard-action-icon">
                                ⌕
                            </div>

                            <div>
                                <strong>Search Papers</strong>
                                <span>
                                    Discover relevant studies
                                </span>
                            </div>

                            <b>→</b>
                        </Link>

                        <Link
                            to="/upload"
                            className="dashboard-action"
                        >
                            <div className="dashboard-action-icon">
                                □
                            </div>

                            <div>
                                <strong>Upload PDF</strong>
                                <span>
                                    Analyze a research paper
                                </span>
                            </div>

                            <b>→</b>
                        </Link>

                        <Link
                            to="/chat"
                            className="dashboard-action"
                        >
                            <div className="dashboard-action-icon">
                                ◌
                            </div>

                            <div>
                                <strong>Ask Research AI</strong>
                                <span>
                                    Discuss your research
                                </span>
                            </div>

                            <b>→</b>
                        </Link>

                        <Link
                            to="/citations"
                            className="dashboard-action"
                        >
                            <div className="dashboard-action-icon">
                                ¶
                            </div>

                            <div>
                                <strong>Manage Citations</strong>
                                <span>
                                    Organize your references
                                </span>
                            </div>

                            <b>→</b>
                        </Link>

                    </div>
                </div>

            </section>


            {/* Recent activity */}
            <section className="dashboard-panel dashboard-activity">

                <div className="dashboard-panel-heading">
                    <div>
                        <span>RECENT ACTIVITY</span>
                        <h2>Research activity</h2>
                    </div>

                    <Link to="/my-research">
                        View all →
                    </Link>
                </div>

                <div className="activity-list">

                    <div className="activity-item">
                        <div className="activity-marker">
                            01
                        </div>

                        <div className="activity-content">
                            <strong>
                                Artificial Intelligence in Healthcare
                            </strong>

                            <span>
                                Added to your research library
                            </span>
                        </div>

                        <time>Today</time>
                    </div>

                    <div className="activity-item">
                        <div className="activity-marker">
                            02
                        </div>

                        <div className="activity-content">
                            <strong>
                                Machine Learning Research Methods
                            </strong>

                            <span>
                                Literature review updated
                            </span>
                        </div>

                        <time>Yesterday</time>
                    </div>

                    <div className="activity-item">
                        <div className="activity-marker">
                            03
                        </div>

                        <div className="activity-content">
                            <strong>
                                Deep Learning Applications
                            </strong>

                            <span>
                                Citation added
                            </span>
                        </div>

                        <time>2 days ago</time>
                    </div>

                </div>
            </section>


            {/* Bottom CTA */}
            <section className="dashboard-bottom">

                <div>
                    <span>KEEP GOING</span>

                    <h2>
                        Continue building your research.
                    </h2>

                    <p>
                        Explore papers, organize your literature,
                        and keep your research progress on track.
                    </p>
                </div>

                <Link
                    to="/search"
                    className="dashboard-secondary-button"
                >
                    Explore Papers →
                </Link>

            </section>

        </main>
    );
}

export default Dashboard;