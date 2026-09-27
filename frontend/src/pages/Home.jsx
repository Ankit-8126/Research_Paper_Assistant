import { Link } from "react-router-dom";
import "../styles/home.css";

function Home() {
    return (
        <main className="home-page">

            {/* Hero */}
            <section className="home-hero">
                <div className="home-hero-content">

                    <span className="home-eyebrow">
                        RESEARCH WORKSPACE
                    </span>

                    <h1>
                        Research smarter.
                        <br />
                        <em>Discover with clarity.</em>
                    </h1>

                    <p>
                        A focused workspace for discovering research papers,
                        understanding complex studies, managing citations,
                        and organizing your research journey.
                    </p>

                    <div className="home-hero-actions">
                        <Link
                            to="/search"
                            className="home-primary-button"
                        >
                            Explore Research Papers
                        </Link>

                        <Link
                            to="/signup"
                            className="home-secondary-button"
                        >
                            Create Account
                        </Link>
                    </div>

                    <div className="home-hero-meta">
                        <span>Research</span>
                        <span>•</span>
                        <span>Analyze</span>
                        <span>•</span>
                        <span>Organize</span>
                    </div>
                </div>

                <div className="home-hero-visual">
                    <div className="paper-preview">

                        <div className="paper-preview-top">
                            <span>RESEARCH PAPER</span>
                            <span>2024</span>
                        </div>

                        <div className="paper-preview-icon">
                            <svg
                                viewBox="0 0 64 64"
                                aria-hidden="true"
                            >
                                <path
                                    d="M14 8h25l11 11v37H14z"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                />
                                <path
                                    d="M39 8v13h11"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                />
                                <path
                                    d="M22 34h20M22 42h15"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>

                        <h3>
                            Artificial Intelligence
                            <br />
                            in Modern Healthcare
                        </h3>

                        <p>
                            Explore important findings, research methods,
                            and key insights from academic studies.
                        </p>

                        <div className="paper-preview-lines">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        <Link to="/paper/1">
                            View Research Paper →
                        </Link>
                    </div>

                    <div className="floating-note floating-note-one">
                        <strong>12</strong>
                        <span>Saved Papers</span>
                    </div>

                    <div className="floating-note floating-note-two">
                        <strong>AI</strong>
                        <span>Research Assistant</span>
                    </div>
                </div>
            </section>

            {/* Intro */}
            <section className="home-intro">
                <div className="home-section-heading">
                    <span>ONE RESEARCH WORKSPACE</span>

                    <h2>
                        Everything you need to move
                        <br />
                        from question to understanding.
                    </h2>

                    <p>
                        ResearchAI brings the essential parts of your
                        research workflow together in one calm,
                        organized workspace.
                    </p>
                </div>

                <div className="home-feature-grid">

                    <Link to="/search" className="home-feature-card">
                        <div className="home-feature-number">
                            01
                        </div>

                        <div className="home-feature-icon">
                            <span>⌕</span>
                        </div>

                        <h3>Discover Papers</h3>

                        <p>
                            Search and explore research papers related
                            to your academic topic.
                        </p>

                        <span className="home-feature-link">
                            Explore papers →
                        </span>
                    </Link>

                    <Link to="/upload" className="home-feature-card">
                        <div className="home-feature-number">
                            02
                        </div>

                        <div className="home-feature-icon">
                            <span>□</span>
                        </div>

                        <h3>Understand Research</h3>

                        <p>
                            Upload papers and work with summaries,
                            key points, and important findings.
                        </p>

                        <span className="home-feature-link">
                            Analyze papers →
                        </span>
                    </Link>

                    <Link
                        to="/literature-review"
                        className="home-feature-card"
                    >
                        <div className="home-feature-number">
                            03
                        </div>

                        <div className="home-feature-icon">
                            <span>≡</span>
                        </div>

                        <h3>Organize Literature</h3>

                        <p>
                            Compare studies and build a structured
                            literature review.
                        </p>

                        <span className="home-feature-link">
                            Start review →
                        </span>
                    </Link>

                    <Link to="/citations" className="home-feature-card">
                        <div className="home-feature-number">
                            04
                        </div>

                        <div className="home-feature-icon">
                            <span>¶</span>
                        </div>

                        <h3>Manage Citations</h3>

                        <p>
                            Generate and organize references for
                            your research papers.
                        </p>

                        <span className="home-feature-link">
                            Manage citations →
                        </span>
                    </Link>

                    <Link to="/chat" className="home-feature-card">
                        <div className="home-feature-number">
                            05
                        </div>

                        <div className="home-feature-icon">
                            <span>◌</span>
                        </div>

                        <h3>Ask Research AI</h3>

                        <p>
                            Ask questions and get assistance while
                            exploring your research.
                        </p>

                        <span className="home-feature-link">
                            Ask AI →
                        </span>
                    </Link>

                    <Link to="/tracker" className="home-feature-card">
                        <div className="home-feature-number">
                            06
                        </div>

                        <div className="home-feature-icon">
                            <span>↗</span>
                        </div>

                        <h3>Track Progress</h3>

                        <p>
                            Keep research tasks, milestones, and
                            progress organized.
                        </p>

                        <span className="home-feature-link">
                            Open tracker →
                        </span>
                    </Link>

                </div>
            </section>

            {/* Research workflow */}
            <section className="home-workflow">

                <div className="home-workflow-content">
                    <span className="home-workflow-label">
                        A SIMPLE WORKFLOW
                    </span>

                    <h2>
                        Your research,
                        <br />
                        organized.
                    </h2>

                    <p>
                        Move through your research process without
                        losing track of papers, findings, references,
                        or progress.
                    </p>

                    <Link
                        to="/dashboard"
                        className="home-text-button"
                    >
                        Open Research Dashboard →
                    </Link>
                </div>

                <div className="home-workflow-steps">

                    <div className="home-workflow-step">
                        <span>01</span>

                        <div>
                            <h3>Discover</h3>
                            <p>
                                Find relevant studies and research
                                papers.
                            </p>
                        </div>
                    </div>

                    <div className="home-workflow-step">
                        <span>02</span>

                        <div>
                            <h3>Understand</h3>
                            <p>
                                Read, analyze, summarize, and ask
                                questions.
                            </p>
                        </div>
                    </div>

                    <div className="home-workflow-step">
                        <span>03</span>

                        <div>
                            <h3>Organize</h3>
                            <p>
                                Build literature reviews and manage
                                citations.
                            </p>
                        </div>
                    </div>

                    <div className="home-workflow-step">
                        <span>04</span>

                        <div>
                            <h3>Track</h3>
                            <p>
                                Keep your research tasks and progress
                                under control.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* CTA */}
            <section className="home-final-cta">

                <div>
                    <span>READY TO BEGIN?</span>

                    <h2>
                        Make your research
                        <br />
                        easier to navigate.
                    </h2>

                    <p>
                        Start exploring papers and build a more
                        organized research workflow today.
                    </p>
                </div>

                <div className="home-final-actions">
                    <Link
                        to="/search"
                        className="home-primary-button"
                    >
                        Explore Papers
                    </Link>

                    <Link
                        to="/signup"
                        className="home-secondary-button"
                    >
                        Create Account
                    </Link>
                </div>

            </section>

        </main>
    );
}

export default Home;