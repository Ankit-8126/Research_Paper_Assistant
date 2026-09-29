import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/my-research.css";

function MyResearch() {
    const [savedPapers, setSavedPapers] = useState([
        {
            id: 1,
            title: "Artificial Intelligence in Healthcare",
            authors: "John Smith, Emily Carter",
            journal: "Journal of Medical Research",
            year: 2024,
            category: "Artificial Intelligence",
            status: "Saved",
        },
        {
            id: 2,
            title: "Machine Learning Research Methods",
            authors: "David Wilson, Sarah Brown",
            journal: "International Research Journal",
            year: 2023,
            category: "Machine Learning",
            status: "In Review",
        },
        {
            id: 3,
            title: "Deep Learning Applications",
            authors: "Michael Lee, Robert Taylor",
            journal: "Computing & Technology Review",
            year: 2024,
            category: "Deep Learning",
            status: "Saved",
        },
    ]);

    const [searchQuery, setSearchQuery] = useState("");

    const handleRemove = (id) => {
        setSavedPapers((papers) =>
            papers.filter((paper) => paper.id !== id)
        );
    };

    const filteredPapers = savedPapers.filter((paper) => {
        const search = searchQuery.toLowerCase();

        return (
            paper.title.toLowerCase().includes(search) ||
            paper.authors.toLowerCase().includes(search) ||
            paper.category.toLowerCase().includes(search)
        );
    });

    return (
        <main className="my-research-page">

            {/* Header */}
            <section className="my-research-header">
                <div>
                    <span className="my-research-eyebrow">
                        YOUR RESEARCH LIBRARY
                    </span>

                    <h1>My Research</h1>

                    <p>
                        Keep your important research papers organized
                        and easy to revisit.
                    </p>
                </div>

                <Link
                    to="/search"
                    className="my-research-primary-button"
                >
                    + Find Papers
                </Link>
            </section>


            {/* Summary */}
            <section className="my-research-summary">

                <div className="research-summary-item">
                    <span>Total Papers</span>
                    <strong>{savedPapers.length}</strong>
                </div>

                <div className="research-summary-item">
                    <span>Saved</span>
                    <strong>
                        {
                            savedPapers.filter(
                                (paper) => paper.status === "Saved"
                            ).length
                        }
                    </strong>
                </div>

                <div className="research-summary-item">
                    <span>In Review</span>
                    <strong>
                        {
                            savedPapers.filter(
                                (paper) => paper.status === "In Review"
                            ).length
                        }
                    </strong>
                </div>

            </section>


            {/* Search */}
            <section className="my-research-toolbar">

                <div className="my-research-search">
                    <span>⌕</span>

                    <input
                        type="text"
                        placeholder="Search your research library..."
                        value={searchQuery}
                        onChange={(e) =>
                            setSearchQuery(e.target.value)
                        }
                    />
                </div>

                <span className="my-research-result-count">
                    {filteredPapers.length}{" "}
                    {filteredPapers.length === 1
                        ? "paper"
                        : "papers"}
                </span>

            </section>


            {/* Papers */}
            <section className="my-research-list">

                {filteredPapers.length > 0 ? (
                    filteredPapers.map((paper) => (
                        <article
                            className="research-paper-card"
                            key={paper.id}
                        >

                            <div className="research-paper-index">
                                <span>
                                    {String(paper.id).padStart(2, "0")}
                                </span>
                            </div>

                            <div className="research-paper-main">

                                <div className="research-paper-top">
                                    <span className="research-paper-category">
                                        {paper.category}
                                    </span>

                                    <span
                                        className={`research-paper-status ${paper.status === "Saved"
                                                ? "status-saved"
                                                : "status-review"
                                            }`}
                                    >
                                        {paper.status}
                                    </span>
                                </div>

                                <Link
                                    to={`/paper/${paper.id}`}
                                    className="research-paper-title"
                                >
                                    {paper.title}
                                </Link>

                                <p className="research-paper-authors">
                                    {paper.authors}
                                </p>

                                <div className="research-paper-meta">
                                    <span>{paper.journal}</span>
                                    <span>•</span>
                                    <span>{paper.year}</span>
                                </div>

                            </div>

                            <div className="research-paper-actions">

                                <Link
                                    to={`/paper/${paper.id}`}
                                    className="paper-view-button"
                                >
                                    View Paper
                                </Link>

                                <button
                                    type="button"
                                    className="paper-remove-button"
                                    onClick={() =>
                                        handleRemove(paper.id)
                                    }
                                >
                                    Remove
                                </button>

                            </div>

                        </article>
                    ))
                ) : (
                    <div className="my-research-empty">

                        <div className="empty-research-icon">
                            □
                        </div>

                        <h2>
                            No research papers found
                        </h2>

                        <p>
                            {searchQuery
                                ? "Try a different search term."
                                : "Start building your research library by exploring papers."}
                        </p>

                        {!searchQuery && (
                            <Link
                                to="/search"
                                className="my-research-primary-button"
                            >
                                Explore Papers
                            </Link>
                        )}

                    </div>
                )}

            </section>

        </main>
    );
}

export default MyResearch;