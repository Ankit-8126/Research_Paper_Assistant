import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/paper-details.css";

function PaperDetails() {
    const { id } = useParams();

    const papers = {
        1: {
            title: "Artificial Intelligence in Healthcare",
            authors: "John Smith, Emily Carter",
            journal: "Journal of Medical Research",
            year: 2024,
            category: "Artificial Intelligence",
            abstract:
                "This paper explores the growing role of artificial intelligence in modern healthcare. It examines applications including clinical decision support, medical image analysis, patient monitoring, and predictive healthcare systems.",
            keywords: [
                "Artificial Intelligence",
                "Healthcare",
                "Machine Learning",
                "Clinical Decision Support",
            ],
            findings: [
                "AI can support clinical decision-making and healthcare workflows.",
                "Machine learning models are increasingly used for medical data analysis.",
                "Successful implementation requires attention to data quality and system reliability.",
            ],
        },

        2: {
            title: "Machine Learning Research Methods",
            authors: "David Wilson, Sarah Brown",
            journal: "International Research Journal",
            year: 2023,
            category: "Machine Learning",
            abstract:
                "This study presents commonly used research methodologies for machine learning projects. It discusses dataset preparation, model evaluation, experimental design, and reproducibility in machine learning research.",
            keywords: [
                "Machine Learning",
                "Research Methods",
                "Evaluation",
                "Data Analysis",
            ],
            findings: [
                "Dataset quality has a major influence on experimental outcomes.",
                "Evaluation metrics should match the research objective.",
                "Reproducible experiments improve the reliability of research findings.",
            ],
        },

        3: {
            title: "Deep Learning Applications",
            authors: "Michael Lee, Robert Taylor",
            journal: "Computing & Technology Review",
            year: 2024,
            category: "Deep Learning",
            abstract:
                "This paper examines the use of deep learning across computer vision, natural language processing, and intelligent systems. It highlights common architectures, applications, and practical research considerations.",
            keywords: [
                "Deep Learning",
                "Neural Networks",
                "Computer Vision",
                "NLP",
            ],
            findings: [
                "Deep neural networks can learn complex representations from large datasets.",
                "Transfer learning can reduce the amount of task-specific training required.",
                "Model performance depends on architecture, data, and evaluation methodology.",
            ],
        },
    };

    const paper = papers[id];

    const [saved, setSaved] = useState(false);
    const [citation, setCitation] = useState("");
    const [copied, setCopied] = useState(false);

    if (!paper) {
        return (
            <main className="paper-details-page">
                <section className="paper-not-found">
                    <span>RESEARCH PAPER</span>
                    <h1>Paper not found</h1>
                    <p>
                        The research paper you are looking for could not be
                        found in the current research library.
                    </p>

                    <Link
                        to="/search"
                        className="paper-details-primary-button"
                    >
                        Back to Papers
                    </Link>
                </section>
            </main>
        );
    }

    const generateCitation = () => {
        const generatedCitation =
            `${paper.authors}. (${paper.year}). ${paper.title}. ${paper.journal}.`;

        setCitation(generatedCitation);
        setCopied(false);
    };

    const copyCitation = async () => {
        if (!citation) return;

        try {
            await navigator.clipboard.writeText(citation);
            setCopied(true);

            setTimeout(() => {
                setCopied(false);
            }, 1800);
        } catch {
            setCopied(false);
        }
    };

    return (
        <main className="paper-details-page">

            {/* Breadcrumb */}
            <div className="paper-breadcrumb">
                <Link to="/search">Papers</Link>
                <span>→</span>
                <span>Paper Details</span>
            </div>


            {/* Main paper header */}
            <section className="paper-details-header">

                <div className="paper-details-category">
                    {paper.category}
                </div>

                <h1>{paper.title}</h1>

                <p className="paper-details-authors">
                    {paper.authors}
                </p>

                <div className="paper-details-meta">
                    <span>{paper.journal}</span>
                    <span>•</span>
                    <span>{paper.year}</span>
                </div>

                <div className="paper-details-actions">

                    <button
                        type="button"
                        className={
                            saved
                                ? "paper-action-button saved"
                                : "paper-action-button"
                        }
                        onClick={() => setSaved(!saved)}
                    >
                        {saved ? "Saved to Research" : "Save to Research"}
                    </button>

                    <Link
                        to={`/chat?paperId=${id}`}
                        className="paper-ai-button"
                    >
                        Ask Research AI
                    </Link>

                </div>

            </section>


            {/* Paper layout */}
            <section className="paper-details-layout">

                {/* Main content */}
                <article className="paper-details-main">

                    <section className="paper-content-section">
                        <span className="paper-section-label">
                            ABSTRACT
                        </span>

                        <h2>About this research</h2>

                        <p className="paper-abstract">
                            {paper.abstract}
                        </p>
                    </section>


                    <section className="paper-content-section">
                        <span className="paper-section-label">
                            KEY FINDINGS
                        </span>

                        <h2>Research findings</h2>

                        <div className="paper-findings">
                            {paper.findings.map((finding, index) => (
                                <div
                                    className="paper-finding"
                                    key={index}
                                >
                                    <span>
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <p>{finding}</p>
                                </div>
                            ))}
                        </div>
                    </section>


                    <section className="paper-content-section">
                        <span className="paper-section-label">
                            KEYWORDS
                        </span>

                        <h2>Research topics</h2>

                        <div className="paper-keywords">
                            {paper.keywords.map((keyword) => (
                                <span key={keyword}>
                                    {keyword}
                                </span>
                            ))}
                        </div>
                    </section>

                </article>


                {/* Sidebar */}
                <aside className="paper-details-sidebar">

                    <div className="paper-sidebar-card">
                        <span className="paper-sidebar-label">
                            PAPER INFORMATION
                        </span>

                        <div className="paper-info-row">
                            <span>Category</span>
                            <strong>{paper.category}</strong>
                        </div>

                        <div className="paper-info-row">
                            <span>Published</span>
                            <strong>{paper.year}</strong>
                        </div>

                        <div className="paper-info-row">
                            <span>Journal</span>
                            <strong>{paper.journal}</strong>
                        </div>

                        <div className="paper-info-row">
                            <span>Paper ID</span>
                            <strong>#{id}</strong>
                        </div>
                    </div>


                    <div className="paper-sidebar-card citation-card">

                        <span className="paper-sidebar-label">
                            CITATION
                        </span>

                        <h3>
                            Generate reference
                        </h3>

                        <p>
                            Create a formatted reference for this
                            research paper.
                        </p>

                        <button
                            type="button"
                            className="citation-generate-button"
                            onClick={generateCitation}
                        >
                            Generate Citation
                        </button>

                        {citation && (
                            <div className="citation-result">

                                <p>{citation}</p>

                                <button
                                    type="button"
                                    className="citation-copy-button"
                                    onClick={copyCitation}
                                >
                                    {copied
                                        ? "Copied"
                                        : "Copy Citation"}
                                </button>

                            </div>
                        )}

                    </div>


                    <div className="paper-sidebar-card ai-card">

                        <span className="paper-sidebar-label">
                            RESEARCH AI
                        </span>

                        <h3>
                            Have questions about this paper?
                        </h3>

                        <p>
                            Ask questions about the research,
                            methodology, findings, or concepts.
                        </p>

                        <Link
                            to={`/chat?paperId=${id}`}
                            className="paper-ai-sidebar-button"
                        >
                            Ask Research AI →
                        </Link>

                    </div>

                </aside>

            </section>


            {/* Bottom navigation */}
            <section className="paper-details-bottom">

                <div>
                    <span>CONTINUE RESEARCHING</span>

                    <h2>
                        Explore more research papers.
                    </h2>

                    <p>
                        Discover related studies and continue building
                        your research library.
                    </p>
                </div>

                <Link
                    to="/search"
                    className="paper-details-secondary-button"
                >
                    Explore Papers →
                </Link>

            </section>

        </main>
    );
}

export default PaperDetails;