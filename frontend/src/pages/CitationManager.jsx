import { useState } from "react";
import "../styles/citation-manager.css";

function CitationManager() {
    const [citationStyle, setCitationStyle] = useState("APA");
    const [searchQuery, setSearchQuery] = useState("");
    const [copiedId, setCopiedId] = useState(null);

    const [papers, setPapers] = useState([
        {
            id: 1,
            title: "Artificial Intelligence in Modern Healthcare",
            authors: "Smith, J., & Wilson, S.",
            year: "2024",
            journal: "Journal of Modern Healthcare",
        },
        {
            id: 2,
            title: "Machine Learning Approaches for Data Analysis",
            authors: "Kumar, D., & Johnson, E.",
            year: "2023",
            journal: "International Journal of Data Science",
        },
        {
            id: 3,
            title: "Large Language Models and Research Applications",
            authors: "Brown, M., & Lee, A.",
            year: "2024",
            journal: "AI Research Journal",
        },
    ]);

    const generateCitation = (paper) => {
        if (citationStyle === "APA") {
            return `${paper.authors} (${paper.year}). ${paper.title}. ${paper.journal}.`;
        }

        if (citationStyle === "MLA") {
            return `${paper.authors}. "${paper.title}." ${paper.journal}, ${paper.year}.`;
        }

        return `${paper.authors}, "${paper.title}," ${paper.journal}, ${paper.year}.`;
    };

    const copyCitation = async (paper) => {
        const citation = generateCitation(paper);

        try {
            await navigator.clipboard.writeText(citation);

            setCopiedId(paper.id);

            setTimeout(() => {
                setCopiedId(null);
            }, 1500);
        } catch {
            alert("Unable to copy citation.");
        }
    };

    const deleteCitation = (paperId) => {
        setPapers((currentPapers) =>
            currentPapers.filter((paper) => paper.id !== paperId)
        );
    };

    const filteredPapers = papers.filter((paper) => {
        const query = searchQuery.toLowerCase().trim();

        if (!query) {
            return true;
        }

        return (
            paper.title.toLowerCase().includes(query) ||
            paper.authors.toLowerCase().includes(query) ||
            paper.journal.toLowerCase().includes(query) ||
            paper.year.includes(query)
        );
    });

    return (
        <main className="citation-page">
            <div className="citation-header">
                <div>
                    <span className="citation-label">
                        CITATION MANAGER
                    </span>

                    <h1>Manage Your Citations</h1>

                    <p>
                        Generate and organize citations for your
                        research papers.
                    </p>
                </div>

                <div className="citation-style">
                    <label htmlFor="citationStyle">
                        Citation Style
                    </label>

                    <select
                        id="citationStyle"
                        value={citationStyle}
                        onChange={(e) =>
                            setCitationStyle(e.target.value)
                        }
                    >
                        <option value="APA">APA</option>
                        <option value="MLA">MLA</option>
                        <option value="Chicago">
                            Chicago
                        </option>
                    </select>
                </div>
            </div>

            <section className="citation-summary">
                <div>
                    <span>📝</span>

                    <strong>{papers.length}</strong>

                    <p>Total Citations</p>
                </div>

                <div>
                    <span>📚</span>

                    <strong>{papers.length}</strong>

                    <p>Research Papers</p>
                </div>

                <div>
                    <span>⚙️</span>

                    <strong>{citationStyle}</strong>

                    <p>Current Style</p>
                </div>
            </section>

            <section className="citation-list-section">
                <div className="citation-section-heading">
                    <div>
                        <h2>Generated Citations</h2>

                        <span>
                            {filteredPapers.length}{" "}
                            {filteredPapers.length === 1
                                ? "citation"
                                : "citations"}
                        </span>
                    </div>

                    <input
                        type="text"
                        className="citation-search"
                        placeholder="Search citations..."
                        value={searchQuery}
                        onChange={(e) =>
                            setSearchQuery(e.target.value)
                        }
                    />
                </div>

                {filteredPapers.length > 0 ? (
                    <div className="citation-list">
                        {filteredPapers.map((paper) => (
                            <article
                                key={paper.id}
                                className="citation-card"
                            >
                                <div className="citation-card-header">
                                    <div>
                                        <span className="citation-type">
                                            {citationStyle}
                                        </span>

                                        <h3>{paper.title}</h3>
                                    </div>

                                    <div className="citation-actions">
                                        <button
                                            type="button"
                                            onClick={() =>
                                                copyCitation(
                                                    paper
                                                )
                                            }
                                            className="copy-button"
                                        >
                                            {copiedId === paper.id
                                                ? "✓ Copied"
                                                : "Copy"}
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() =>
                                                deleteCitation(
                                                    paper.id
                                                )
                                            }
                                            className="delete-citation-button"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>

                                <p className="citation-text">
                                    {generateCitation(paper)}
                                </p>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="citation-empty">
                        <div>📚</div>

                        <h3>No citations found</h3>

                        <p>
                            Try searching with a different paper
                            title, author, or year.
                        </p>
                    </div>
                )}
            </section>
        </main>
    );
}

export default CitationManager;