import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/search.css";

function SearchPapers() {
    const papers = [
        {
            id: 1,
            title: "Artificial Intelligence in Healthcare",
            authors: "John Smith, Emily Carter",
            journal: "Journal of Medical Research",
            year: 2024,
            category: "Artificial Intelligence",
            abstract:
                "An overview of how artificial intelligence is being applied to modern healthcare systems, clinical decision-making, and medical research.",
        },
        {
            id: 2,
            title: "Machine Learning Research Methods",
            authors: "David Wilson, Sarah Brown",
            journal: "International Research Journal",
            year: 2023,
            category: "Machine Learning",
            abstract:
                "A study of commonly used machine learning research methodologies, evaluation techniques, and experimental practices.",
        },
        {
            id: 3,
            title: "Deep Learning Applications",
            authors: "Michael Lee, Robert Taylor",
            journal: "Computing & Technology Review",
            year: 2024,
            category: "Deep Learning",
            abstract:
                "An exploration of deep learning applications across computer vision, natural language processing, and intelligent systems.",
        },
        {
            id: 4,
            title: "Natural Language Processing for Academic Research",
            authors: "Anna Johnson, Daniel Moore",
            journal: "Computational Linguistics Review",
            year: 2022,
            category: "NLP",
            abstract:
                "Research on natural language processing techniques for extracting, organizing, and understanding academic information.",
        },
        {
            id: 5,
            title: "Data Science in Modern Research",
            authors: "James Anderson, Olivia Martin",
            journal: "Data Science Journal",
            year: 2023,
            category: "Data Science",
            abstract:
                "An introduction to data-driven research methods and the role of data science in modern academic studies.",
        },
    ];

    const [searchQuery, setSearchQuery] = useState("");
    const [category, setCategory] = useState("All");
    const [year, setYear] = useState("All");

    const categories = [
        "All",
        ...new Set(papers.map((paper) => paper.category)),
    ];

    const years = [
        "All",
        ...new Set(
            papers
                .map((paper) => paper.year)
                .sort((a, b) => b - a)
        ),
    ];

    const filteredPapers = papers.filter((paper) => {
        const search = searchQuery.toLowerCase().trim();

        const matchesSearch =
            paper.title.toLowerCase().includes(search) ||
            paper.authors.toLowerCase().includes(search) ||
            paper.category.toLowerCase().includes(search) ||
            paper.journal.toLowerCase().includes(search);

        const matchesCategory =
            category === "All" || paper.category === category;

        const matchesYear =
            year === "All" || paper.year.toString() === year.toString();

        return matchesSearch && matchesCategory && matchesYear;
    });

    const clearFilters = () => {
        setSearchQuery("");
        setCategory("All");
        setYear("All");
    };

    const hasFilters =
        searchQuery.trim() !== "" ||
        category !== "All" ||
        year !== "All";

    return (
        <main className="search-page">

            {/* Header */}
            <section className="search-header">

                <div>
                    <span className="search-eyebrow">
                        RESEARCH DISCOVERY
                    </span>

                    <h1>
                        Find the research
                        <br />
                        you need.
                    </h1>

                    <p>
                        Explore academic papers, discover relevant studies,
                        and build your research library.
                    </p>
                </div>

                <div className="search-header-note">
                    <span>RESEARCH LIBRARY</span>
                    <strong>{papers.length}</strong>
                    <small>Available papers</small>
                </div>

            </section>


            {/* Search controls */}
            <section className="search-controls">

                <div className="main-search-box">
                    <span className="search-icon">⌕</span>

                    <input
                        type="text"
                        placeholder="Search papers, authors, topics, or journals..."
                        value={searchQuery}
                        onChange={(e) =>
                            setSearchQuery(e.target.value)
                        }
                    />
                </div>

                <div className="search-filter-row">

                    <div className="search-filter">
                        <label htmlFor="category">
                            CATEGORY
                        </label>

                        <select
                            id="category"
                            value={category}
                            onChange={(e) =>
                                setCategory(e.target.value)
                            }
                        >
                            {categories.map((item) => (
                                <option key={item} value={item}>
                                    {item}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="search-filter">
                        <label htmlFor="year">
                            YEAR
                        </label>

                        <select
                            id="year"
                            value={year}
                            onChange={(e) =>
                                setYear(e.target.value)
                            }
                        >
                            {years.map((item) => (
                                <option key={item} value={item}>
                                    {item}
                                </option>
                            ))}
                        </select>
                    </div>

                    {hasFilters && (
                        <button
                            type="button"
                            className="clear-search-button"
                            onClick={clearFilters}
                        >
                            Clear filters
                        </button>
                    )}

                </div>

            </section>


            {/* Results heading */}
            <section className="search-results-heading">

                <div>
                    <span>SEARCH RESULTS</span>

                    <h2>
                        {filteredPapers.length}{" "}
                        {filteredPapers.length === 1
                            ? "paper"
                            : "papers"}{" "}
                        found
                    </h2>
                </div>

                <span className="search-results-description">
                    Showing papers from the research library
                </span>

            </section>


            {/* Results */}
            <section className="search-results">

                {filteredPapers.length > 0 ? (
                    filteredPapers.map((paper, index) => (
                        <article
                            className="search-paper-card"
                            key={paper.id}
                        >

                            <div className="search-paper-number">
                                {String(index + 1).padStart(2, "0")}
                            </div>

                            <div className="search-paper-content">

                                <div className="search-paper-meta-top">
                                    <span>
                                        {paper.category}
                                    </span>

                                    <span className="search-paper-year">
                                        {paper.year}
                                    </span>
                                </div>

                                <Link
                                    to={`/paper/${paper.id}`}
                                    className="search-paper-title"
                                >
                                    {paper.title}
                                </Link>

                                <p className="search-paper-authors">
                                    {paper.authors}
                                </p>

                                <p className="search-paper-abstract">
                                    {paper.abstract}
                                </p>

                                <div className="search-paper-footer">

                                    <div className="search-paper-journal">
                                        <span>
                                            JOURNAL
                                        </span>

                                        <strong>
                                            {paper.journal}
                                        </strong>
                                    </div>

                                    <Link
                                        to={`/paper/${paper.id}`}
                                        className="search-view-button"
                                    >
                                        View Paper →
                                    </Link>

                                </div>

                            </div>

                        </article>
                    ))
                ) : (
                    <div className="search-empty">

                        <div className="search-empty-icon">
                            ⌕
                        </div>

                        <h2>
                            No papers found
                        </h2>

                        <p>
                            Try changing your search terms or filters
                            to find relevant research.
                        </p>

                        <button
                            type="button"
                            className="clear-search-button"
                            onClick={clearFilters}
                        >
                            Reset Search
                        </button>

                    </div>
                )}

            </section>

        </main>
    );
}

export default SearchPapers;