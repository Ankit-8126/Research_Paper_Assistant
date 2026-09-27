import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/literature-review.css";

function LiteratureReview() {
    const [papers, setPapers] = useState([
        {
            id: 1,
            title: "Artificial Intelligence in Healthcare",
            authors: "John Smith, Emily Carter",
            year: 2024,
            category: "Artificial Intelligence",
            status: "Completed",
        },
        {
            id: 2,
            title: "Machine Learning Research Methods",
            authors: "David Wilson, Sarah Brown",
            year: 2023,
            category: "Machine Learning",
            status: "In Progress",
        },
        {
            id: 3,
            title: "Deep Learning Applications",
            authors: "Michael Lee, Robert Taylor",
            year: 2024,
            category: "Deep Learning",
            status: "To Review",
        },
    ]);

    const [searchQuery, setSearchQuery] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");
    const [generated, setGenerated] = useState(false);

    const updateStatus = (id, newStatus) => {
        setPapers((currentPapers) =>
            currentPapers.map((paper) =>
                paper.id === id
                    ? { ...paper, status: newStatus }
                    : paper
            )
        );
    };

    const removePaper = (id) => {
        setPapers((currentPapers) =>
            currentPapers.filter((paper) => paper.id !== id)
        );
    };

    const handleGenerateReview = () => {
        setGenerated(true);

        setTimeout(() => {
            setGenerated(false);
        }, 2500);
    };

    const filteredPapers = papers.filter((paper) => {
        const search = searchQuery.toLowerCase().trim();

        const matchesSearch =
            paper.title.toLowerCase().includes(search) ||
            paper.authors.toLowerCase().includes(search) ||
            paper.category.toLowerCase().includes(search);

        const matchesStatus =
            statusFilter === "All" ||
            paper.status === statusFilter;

        return matchesSearch && matchesStatus;
    });

    const completedCount = papers.filter(
        (paper) => paper.status === "Completed"
    ).length;

    const inProgressCount = papers.filter(
        (paper) => paper.status === "In Progress"
    ).length;

    const toReviewCount = papers.filter(
        (paper) => paper.status === "To Review"
    ).length;

    return (
        <main className="literature-review-page">

            {/* Header */}
            <section className="literature-header">

                <div>
                    <span className="literature-eyebrow">
                        LITERATURE WORKSPACE
                    </span>

                    <h1>
                        Build your
                        <br />
                        literature review.
                    </h1>

                    <p>
                        Organize research papers, track your reading
                        progress, and prepare a structured literature review.
                    </p>
                </div>

                <button
                    type="button"
                    className="literature-primary-button"
                    onClick={handleGenerateReview}
                >
                    {generated
                        ? "Review Generated"
                        : "Generate Review"}
                </button>

            </section>


            {/* Overview */}
            <section className="literature-overview">

                <div className="literature-overview-card">
                    <span>TOTAL PAPERS</span>
                    <strong>{papers.length}</strong>
                    <small>In your review workspace</small>
                </div>

                <div className="literature-overview-card">
                    <span>COMPLETED</span>
                    <strong>{completedCount}</strong>
                    <small>Research papers reviewed</small>
                </div>

                <div className="literature-overview-card">
                    <span>IN PROGRESS</span>
                    <strong>{inProgressCount}</strong>
                    <small>Currently being analyzed</small>
                </div>

                <div className="literature-overview-card">
                    <span>TO REVIEW</span>
                    <strong>{toReviewCount}</strong>
                    <small>Papers waiting for review</small>
                </div>

            </section>


            {/* Progress */}
            <section className="literature-progress">

                <div className="literature-progress-heading">
                    <div>
                        <span>REVIEW PROGRESS</span>
                        <h2>Research coverage</h2>
                    </div>

                    <strong>
                        {papers.length > 0
                            ? Math.round(
                                (completedCount / papers.length) * 100
                            )
                            : 0}
                        %
                    </strong>
                </div>

                <div className="literature-progress-track">
                    <span
                        style={{
                            width: `${papers.length > 0
                                    ? (completedCount / papers.length) * 100
                                    : 0
                                }%`,
                        }}
                    ></span>
                </div>

                <p>
                    {completedCount} of {papers.length} papers have been
                    completed.
                </p>

            </section>


            {/* Toolbar */}
            <section className="literature-toolbar">

                <div className="literature-search">
                    <span>⌕</span>

                    <input
                        type="text"
                        placeholder="Search your literature..."
                        value={searchQuery}
                        onChange={(e) =>
                            setSearchQuery(e.target.value)
                        }
                    />
                </div>

                <div className="literature-filter">
                    <label htmlFor="literature-status">
                        STATUS
                    </label>

                    <select
                        id="literature-status"
                        value={statusFilter}
                        onChange={(e) =>
                            setStatusFilter(e.target.value)
                        }
                    >
                        <option value="All">All Statuses</option>
                        <option value="To Review">To Review</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>

            </section>


            {/* Papers */}
            <section className="literature-list">

                <div className="literature-list-heading">
                    <div>
                        <span>RESEARCH PAPERS</span>
                        <h2>
                            {filteredPapers.length}{" "}
                            {filteredPapers.length === 1
                                ? "paper"
                                : "papers"}
                        </h2>
                    </div>

                    <span>
                        Update each paper as you progress
                    </span>
                </div>

                {filteredPapers.length > 0 ? (
                    filteredPapers.map((paper, index) => (
                        <article
                            className="literature-paper-card"
                            key={paper.id}
                        >

                            <div className="literature-paper-number">
                                {String(index + 1).padStart(2, "0")}
                            </div>

                            <div className="literature-paper-main">

                                <div className="literature-paper-top">
                                    <span>
                                        {paper.category}
                                    </span>

                                    <span
                                        className={`literature-status ${paper.status === "Completed"
                                                ? "literature-status-completed"
                                                : paper.status === "In Progress"
                                                    ? "literature-status-progress"
                                                    : "literature-status-review"
                                            }`}
                                    >
                                        {paper.status}
                                    </span>
                                </div>

                                <Link
                                    to={`/paper/${paper.id}`}
                                    className="literature-paper-title"
                                >
                                    {paper.title}
                                </Link>

                                <p className="literature-paper-authors">
                                    {paper.authors}
                                </p>

                                <div className="literature-paper-meta">
                                    <span>{paper.year}</span>
                                    <span>•</span>
                                    <span>
                                        Research paper #{paper.id}
                                    </span>
                                </div>

                            </div>

                            <div className="literature-paper-actions">

                                <select
                                    value={paper.status}
                                    onChange={(e) =>
                                        updateStatus(
                                            paper.id,
                                            e.target.value
                                        )
                                    }
                                    aria-label={`Update status for ${paper.title}`}
                                >
                                    <option value="To Review">
                                        To Review
                                    </option>
                                    <option value="In Progress">
                                        In Progress
                                    </option>
                                    <option value="Completed">
                                        Completed
                                    </option>
                                </select>

                                <Link
                                    to={`/paper/${paper.id}`}
                                    className="literature-view-button"
                                >
                                    View Paper
                                </Link>

                                <button
                                    type="button"
                                    className="literature-remove-button"
                                    onClick={() =>
                                        removePaper(paper.id)
                                    }
                                >
                                    Remove
                                </button>

                            </div>

                        </article>
                    ))
                ) : (
                    <div className="literature-empty">

                        <div className="literature-empty-icon">
                            ≡
                        </div>

                        <h2>
                            No research papers found
                        </h2>

                        <p>
                            Try changing your search or status filter,
                            or add more papers to your literature review.
                        </p>

                        <Link
                            to="/search"
                            className="literature-secondary-button"
                        >
                            Explore Papers
                        </Link>

                    </div>
                )}

            </section>


            {/* Bottom section */}
            <section className="literature-bottom">

                <div>
                    <span>RESEARCH WORKFLOW</span>

                    <h2>
                        Discover. Compare. Understand.
                    </h2>

                    <p>
                        Keep your research organized while building a
                        stronger understanding of the existing literature.
                    </p>
                </div>

                <Link
                    to="/citations"
                    className="literature-secondary-button"
                >
                    Manage Citations →
                </Link>

            </section>

        </main>
    );
}

export default LiteratureReview;